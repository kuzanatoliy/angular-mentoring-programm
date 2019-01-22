import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.sass']
})
export class ModalWindowComponent implements OnInit {
  @Input() title;
  @Input() okButtonName: string;
  @Input() cancelButtonName: string;
  @Input() okAction: Function;
  @Input() cancelAction: Function;
  @Input() show: boolean; 

  constructor() { }

  ngOnInit() {
  }

  okHandler() {
    this.okAction()
  }

  cancelHandler() {
    this.cancelAction();
  }

}
