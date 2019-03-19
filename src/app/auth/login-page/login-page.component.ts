import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, LoadingService } from 'src/app/services';

import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-login-page',
  styleUrls: [ './login-page.component.sass' ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  public error: boolean = false;
  public userName: string;
  public password: string;

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService,
    private router: Router,
  ) { }

  public loginHandler(): void {
    this.loadingService.show();
    this.error = false;
    this.authService.login(this.userName, this.password)
      .then(({ userName }: IUser): void => {
        if (userName) {
          this.router.navigate(['courses']);
        } else {
          this.error = true;
        }
        this.loadingService.hide();
      });
  }

  public ngOnInit(): void { }

}
