import { Component, OnInit } from '@angular/core';

import { IUser } from '../../interfaces/IUser';

import { AuthService } from '../../auth/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public userName?: string = null;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userName = this.authService.getUserInfo();
  }

  ngDoCheck() {
    this.userName = this.authService.getUserInfo();
  }

}
