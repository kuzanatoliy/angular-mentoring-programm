import { Component, Input, OnInit } from '@angular/core';

import { DatePipe } from '../../pipes/date.pipe';

@Component({
  selector: 'app-date-input',
  styleUrls: [ './date-input.component.sass' ],
  templateUrl: './date-input.component.html',
})
export class DateInputComponent implements OnInit {
  public value: string = '';

  @Input() public dateChangeHandler?: (date: Date) => void;

  @Input() set date(value) {
    const datePipe: DatePipe = new DatePipe();
    this.value = datePipe.transform(value);
  }

  constructor() { }

  public changeHandler(): void {
    this.dateChangeHandler && this.dateChangeHandler(new Date(this.value));
  }

  public ngOnInit(): void { }

}
