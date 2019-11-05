import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSelectChange, MatDatepicker }                     from '@angular/material';
import * as  moment                                           from 'moment';
import { Moment }                                             from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: [ './datepicker.component.scss' ],
})
export class DatepickerComponent implements OnInit {

  selectedDate: Date;
  currentPeriod: string;

  @Output() dateChange: EventEmitter<Moment> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  datepickerChange() {
    this.currentPeriod = '';
  }

  emitDate(e: string) {
    this.dateChange.emit(moment(new Date(e)));
  }

  private setDate(date: Moment) {
    this.emitDate(date.toDate().toString());
    this.selectedDate = date.toDate();
  }

  dateSelectionRangeChange(e: MatSelectChange) {
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

}
