import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { LoadingService } from 'src/app/services';

import { LoginAction } from 'src/app/store/actions/user-info.actions';
import { IUserInfoState } from 'src/app/store/reducers/user-info.reducer';

@Component({
  selector: 'app-login-page',
  styleUrls: [ './login-page.component.sass' ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  public error: boolean = false;
  public userInfo$: Observable<IUserInfoState>;

  public authData = new FormGroup({
    password: new FormControl('', [ Validators.required ]),
    userName: new FormControl('', [ Validators.required ]),
  });

  private subscription: Subscription;

  constructor(
    private loadingService: LoadingService,
    private router: Router,
    private store: Store<{ userInfo: IUserInfoState }>,
  ) { }

  public loginHandler(): void {
    this.loadingService.show();
    this.store.dispatch(new LoginAction(this.authData.value));
  }

  public ngOnInit(): void {
    this.userInfo$ = this.store.pipe(select('userInfo'));
    this.subscription = this.userInfo$.subscribe((userInfo: IUserInfoState) => {
      const { error, loading, user } = userInfo;
      this.error = error;
      loading || this.loadingService.hide();
      user.userName && this.router.navigate(['courses']);
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
