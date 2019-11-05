import { Injectable }                 from '@angular/core';
import { reduce, switchMap, map }     from 'rxjs/operators';
import { HttpClient }                 from '@angular/common/http';
import { from as rxfrom, Observable } from 'rxjs';
import { ISale, ISaleStats }          from 'src/app/interfaces/sales';
import { IApiResponse }               from 'src/app/interfaces/api-response';
import { SalesDetailsData }           from 'src/app/interfaces/sales-details';


@Injectable({
  providedIn: 'root',
})
export class SalesService {

  constructor(
    private http: HttpClient,
  ) {
  }

  get() {
    const from = '2019-10-29 00:00:00';
    const to = '2019-11-01 00:00:00';

    const sales = this.http
      .get(`https://api.thegoodtill.com/api/external/get_sales?from=${ from }&to=${ to }`)
      .pipe(
        switchMap((result: IApiResponse): Observable<ISale[]> => {
          return rxfrom(result.data);
        }),
        reduce<any>((acc, el: ISale): any => {
          return {
            ...acc,
            total: {
              sales: acc.totalSales + el.items.length,
              salesItems: acc.totalSales + el.items.reduce((acc, item) => acc + item.quantity, 0),
            },
            average: {
              monetaryAmount: 0,
            },

          };
        }, {
          totalSales: 0,
          totalSaleItems: 0,
        }),
      );
    return sales;
  }

  getDetails() {
    const from = '2019-08-29 00:00:00';
    const to = '2019-11-01 00:00:00';

    const seed: ISaleStats = {
      total: {
        numberOfSales: 0,
        monetaryAmount: 0,
        numberOfSalesItems: 0,
      },
      average: {
        numberOfSalesItems: 0,
        monetaryAmountPerSale: 0,
      },
    };
    const sales = this.http
      .get(`https://api.thegoodtill.com/api/external/get_sales_details?from=${ from }&to=${ to }`)
      .pipe(
        switchMap((result: IApiResponse): Observable<SalesDetailsData> => {
          return rxfrom(result.data);
        }),
        reduce<SalesDetailsData, ISaleStats>((acc: ISaleStats, el: SalesDetailsData): ISaleStats => {
          return {
            ...acc,
            total: {
              ...acc.total,
              numberOfSales: acc.total.numberOfSales + 1,
              numberOfSalesItems: acc.total.numberOfSalesItems + +el.sales_details.sales_items.length,
              monetaryAmount: acc.total.monetaryAmount + +el.sales_details.total_after_discount,
            }
          };
        }, seed),
        map(({ total }): ISaleStats => {
          return {
            total,
            average: {
              numberOfSalesItems: total.numberOfSalesItems / total.numberOfSales,
              monetaryAmountPerSale: total.monetaryAmount / total.numberOfSales,
            },
          };
        }),
      );
    return sales;
  }
}
