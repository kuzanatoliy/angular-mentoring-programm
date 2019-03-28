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

@Component({
  providers: [{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationInputComponent),
  }, {
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DurationInputComponent),
  }],
  selector: 'app-duration-input',
  styleUrls: [ './duration-input.component.sass' ],
  templateUrl: './duration-input.component.html',
})
export class DurationInputComponent implements ControlValueAccessor, Validator {
  public duration = new FormControl(0, [ Validators.pattern(/^[0-9]*$/) ]);

  private onChange: (val: number) => void;
  private onTouch: () => void;

  constructor() {}

  public touchHandler: () => void = () => {
    this.onTouch && this.onTouch();
  }

  public changeHandler: () => void = () => {
    this.onChange && this.onChange(this.duration.value);
  }

  public validate(control: AbstractControl) {
    return control.valid ? null : { invalid: true };
  }

  public writeValue(value: number): void {
    this.duration.setValue(value);
  }

  public registerOnChange(callback: (val: number) => void): void {
    this.onChange = callback;
  }

  public registerOnTouched(callback: () => void): void {
    this.onTouch = callback;
  }
}
