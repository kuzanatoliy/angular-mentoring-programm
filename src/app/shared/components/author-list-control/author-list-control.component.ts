import { Component, Input, OnInit } from '@angular/core';

import { IUser } from '../../../interfaces/IUser';

@Component({
  selector: 'app-author-list-control',
  styleUrls: [ './author-list-control.component.sass' ],
  templateUrl: './author-list-control.component.html',
})
export class AuthorListControlComponent implements OnInit {
  @Input() public authors: Array<IUser> = [];

  constructor() { }

  public ngOnInit(): void {}

}
