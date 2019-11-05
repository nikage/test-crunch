import { Component, OnInit }               from '@angular/core';
import { map, tap }                        from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SalesService }                    from 'src/app/services/sales.service';
import { Observable }                      from 'rxjs';
import { ISaleStats }                      from 'src/app/interfaces/sales';
import { Moment }                          from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    }),
  );

  sales$: Observable<any>;
  salesDetails$: Observable<ISaleStats>;

  readonly NUMBER_FORMAT = '1.0-2';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private salesService: SalesService) {
  }

  ngOnInit() {
    this.salesDetails$ = this.salesService.getDetails();
  }

  dateChange(from: Moment) {
    this.salesDetails$ = this.salesService.getDetails(from);
  }
}
