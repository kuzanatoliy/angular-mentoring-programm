import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { LoadingService } from 'src/app/services';

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
    private loadingService: LoadingService,
    private router: Router,
    private store: Store<{ userInfo: IUserInfoState }>
  ) {
    this.userInfo$ = this.store.pipe(select('userInfo'));
    this.userInfo$.subscribe((userInfo: IUserInfoState) => {
      const { error, loading, user } = userInfo;
      this.error = error;
      loading || loadingService.hide();
      user.userName && this.router.navigate(['courses']);
    });
  }

  public loginHandler(): void {
    this.loadingService.show();
    this.store.dispatch(new LoginAction({ userName: this.userName, password: this.password }));
  }

  public ngOnInit(): void { }

}
