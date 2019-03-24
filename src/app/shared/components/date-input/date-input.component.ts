import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
  Validators,
} from '@angular/forms';
import { DatePipe } from '../../pipes/date.pipe';

@Component({
  providers: [{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateInputComponent),
  }, {
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateInputComponent),
  }],
  selector: 'app-date-input',
  styleUrls: [ './date-input.component.sass' ],
  templateUrl: './date-input.component.html',
})
export class DateInputComponent implements ControlValueAccessor, Validator {
  public date = new FormControl('', [
    Validators.pattern(/^\s*(1[012]|0?[1-9])\.(3[01]|[12][0-9]|0?[1-9])\.((?:19|20)\d{2})\s*$/),
  ]);

  private datePipe: DatePipe;

  private onChange: (val: Date) => void;
  private onTouch: () => void;

  constructor() {
    // this.date.
    this.datePipe = new DatePipe();
  }

  public touchHandler: () => void = () => {
    this.onTouch && this.onTouch();
  }

  public changeHandler: () => void = () => {
    this.onChange && this.onChange(new Date(this.date.value));
  }

  public validate(control: AbstractControl) {
    return control.valid ? null : { invalid: true };
  }

  public writeValue(value: Date): void {
    this.date.setValue(this.datePipe.transform(value));
  }

  public registerOnChange(callback: (val: Date) => void): void {
    this.onChange = callback;
  }

  public registerOnTouched(callback: () => void): void {
    this.onTouch = callback;
  }
}
