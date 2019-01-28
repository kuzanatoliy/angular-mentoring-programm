import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-login-page',
  styleUrls: [ './login-page.component.sass' ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  public loading: boolean = false;
  public error: boolean = false;
  public userName: string;
  public password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  public loginHandler() {
    this.loading = true;
    this.error = false;
    this.authService.login(this.userName, this.password)
      .then(({ userName }: IUser): void => {
        if (userName) {
          this.router.navigate(['courses']);
        } else {
          this.error = true;
        }
        this.loading = false;
      });
  }

  public ngOnInit() {
    this.authService.isAuthorized()
      .then((isAuth: boolean): void => {
        if (isAuth) {
          this.router.navigate(['courses']);
        }
      });
  }

}
