import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-header',
  styleUrls: [ './header.component.sass' ],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public userName?: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.authService.subscribe(this.nextHandler);
  }

  public logoutHandler(): void {
    this.authService.logout().then(() => {
      this.userName = null;
      this.router.navigate(['login']);
    });
  }

  private nextHandler = (userInfo: IUser): void => {
    this.userName = userInfo.userName;
  }
}
