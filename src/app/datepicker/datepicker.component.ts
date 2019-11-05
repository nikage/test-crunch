import { Component, OnInit, ViewChild }   from '@angular/core';
import { MatSelectChange, MatDatepicker } from '@angular/material';
import * as  moment                       from 'moment';
import { Moment }                         from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: [ './datepicker.component.scss' ],
})
export class DatepickerComponent implements OnInit {

  selectedDate: Date;
  currentPeriod: string;

  constructor() {
  }

  ngOnInit() {
  }

  dateChange(type, e) {
    this.currentPeriod = '';
    console.log(e);
  }

  dateRangeChange(e: MatSelectChange) {
    const method = e.value;
    this[method]();
  }

  thisWeek() {
    const date = moment().day('Monday');
    this.setDate(date);
  }

  lastWeek() {
    const date = moment().subtract(7, 'd');

    this.setDate(date);
  }

  thisMonth() {
    const date = moment().startOf('month');
    this.setDate(date);
  }

  lastMonth() {
    const date = moment().subtract(30, 'd');
    this.setDate(date);

  }

  private setDate(date: Moment) {
    this.selectedDate = date.toDate();
  }

}
