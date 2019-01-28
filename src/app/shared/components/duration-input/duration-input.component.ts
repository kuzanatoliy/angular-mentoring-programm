import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  styleUrls: [ './duration-input.component.sass' ],
  templateUrl: './duration-input.component.html',
})
export class DurationInputComponent implements OnInit {
  @Input() public duration: number = 0;
  @Input() public durationChangeHandler?: (duration: number) => void;

  constructor() { }

  public changeHandler(): void {
    this.durationChangeHandler && this.durationChangeHandler(this.duration);
  }

  public ngOnInit(): void { }

}
