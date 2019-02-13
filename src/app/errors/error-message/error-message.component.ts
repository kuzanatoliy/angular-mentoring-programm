import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  styleUrls: [ './error-message.component.sass' ],
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent implements OnInit {
  @Input() public title: string;
  @Input() public message: string;

  constructor() { }

  public ngOnInit(): void { }

}
