import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { AuthService, LoadingService } from 'src/app/services';

import { IUser } from 'src/app/interfaces/IUser';
import { IUserInfoState } from 'src/app/store/reducers/user-info.reducer';
import { Observable } from 'rxjs';
import { LoginAction } from 'src/app/store/actions/user-info.actions';

@Component({
  selector: 'app-login-page',
  styleUrls: [ './login-page.component.sass' ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  public error: boolean = false;
  public userName: string;
  public password: string;
  public userInfo$: Observable<IUserInfoState>;

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService,
    private router: Router,
    private store: Store<{ userInfo: IUserInfoState }>
  ) {
    this.userInfo$ = this.store.pipe(select('userInfo'));
    this.userInfo$.subscribe((userInfo: IUserInfoState) => {
      this.error = userInfo.error;
      loadingService.hide();
    });
  }

  public loginHandler(): void {
    this.store.dispatch(new LoginAction({ userName: this.userName, password: this.password }));
    /*this.loadingService.show();
    this.error = false;
    this.authService.login(this.userName, this.password)
      .then(({ userName }: IUser): void => {
        if (userName) {
          this.router.navigate(['courses']);
        } else {
          this.error = true;
        }
        this.loadingService.hide();
      });*/
  }

  public ngOnInit(): void { }

}
