import { Injectable }                 from '@angular/core';
import { reduce, switchMap }          from 'rxjs/operators';
import { HttpClient }                 from '@angular/common/http';
import { from as rxfrom, Observable } from 'rxjs';
import { ISale }                      from 'src/app/interfaces/sales';
import { IApiResponse }               from 'src/app/interfaces/api-response';

@Injectable({
  providedIn: 'root',
})
export class SalesService {

  constructor(
    private http: HttpClient,
  ) {
  }

  get() {
    const from = '2018-01-29 00:00:00';
    const to = '2019-11-01 00:00:00';

    this.http
      .get(`https://api.thegoodtill.com/api/external/get_sales?from=${ from }&to=${ to }`)
      .pipe(
        switchMap((result: IApiResponse): Observable<ISale[]> => {
          return rxfrom(result.data);
        }),
        reduce<any>((acc, el: ISale): any => {
          return {
            ...acc,
            totalSales: acc.totalSales + el.items.length,
            totalSaleItems: acc.totalSales + el.items.reduce((acc, item) => acc + item.quantity, 0),
          };
        }, {
          totalSales: 0,
          totalSaleItems: 0
        }),
      )
      .subscribe(stats => {
        console.log('stats', stats);
      });
  }

}
