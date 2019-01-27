import { Component, OnInit, Input } from '@angular/core';

import { DatePipe } from '../../pipes/date.pipe';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.sass']
})
export class DateInputComponent implements OnInit {
  public value: string = '';
  @Input() public dateChangeHandler?: Function;
  
  @Input() set date(value) {
    const datePipe: DatePipe = new DatePipe();
    this.value = datePipe.transform(value);
  };

  changeHandler() {
    this.dateChangeHandler && this.dateChangeHandler(new Date(this.value));
  }

  constructor() { }

  ngOnInit() {
  }

}
