import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-user-control',
  styleUrls: ['./user-control.component.sass'],
  templateUrl: './user-control.component.html',
})
export class UserControlComponent implements OnInit {
  @Input() public user?: IUser;

  constructor() { }

  public ngOnInit(): void { }

}
