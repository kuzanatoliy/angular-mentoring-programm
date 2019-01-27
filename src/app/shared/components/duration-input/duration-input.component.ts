import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.sass']
})
export class DurationInputComponent implements OnInit {
  @Input() public duration: number = 0;
  @Input() public durationChangeHandler?: Function;

  changeHandler () {
    this.durationChangeHandler && this.durationChangeHandler(this.duration);
  }

  constructor() { }

  ngOnInit() {
  }

}
