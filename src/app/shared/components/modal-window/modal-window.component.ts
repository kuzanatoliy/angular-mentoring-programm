import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  styleUrls: [ './modal-window.component.sass' ],
  templateUrl: './modal-window.component.html',
})
export class ModalWindowComponent implements OnInit {
  @Input() public title;
  @Input() public okButtonName: string;
  @Input() public cancelButtonName: string;
  @Input() public okAction: () => void;
  @Input() public cancelAction: () => void;
  @Input() public show: boolean;

  constructor() { }

  public ngOnInit(): void {
  }

  public okHandler(): void {
    this.okAction();
  }

  public cancelHandler(): void {
    this.cancelAction();
  }

}
