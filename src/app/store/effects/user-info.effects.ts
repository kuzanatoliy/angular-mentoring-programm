import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  ActionTypes,
  CheckUserInfoFailedAction,
  CheckUserInfoSuccessAction,
  LoginAction,
  LoginFailedAction,
  LoginSuccessAction,
  LogoutFailedAction,
  LogoutSuccessAction,
} from '../actions/user-info.actions';

import { AuthService, TokenService } from 'src/app/services';

import { IUser } from 'src/app/interfaces/IUser';
import { IUserInfoState } from '../reducers/user-info.reducer';

@Injectable()
export class UserInfoEffects {
  @Effect()
  public logout$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.logout),
    mergeMap(() => this.auth.logout()
      .pipe(map(() => {
        this.tokenService.token = null;
        return new LogoutSuccessAction();
      }),
      catchError(() => of(new LogoutFailedAction())))),
  );

  @Effect()
  public login$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.login),
    mergeMap((action: LoginAction) => {
      const { userName, password } = action.payload;
      return this.auth.login(userName, password)
        .pipe(map((user: IUser) => {
          const { userName: name, firstName, lastName, token } = user;

          if (token) {
            this.tokenService.token = token;
          }

          if (name) {
            return new LoginSuccessAction({ user: {
              firstName,
              lastName,
              userName: name,
            }});
          } else {
            return new LoginFailedAction();
          }
        }),
        catchError(() => of(new LoginFailedAction())));
    }),
  );

  @Effect()
  public checkUserInfo$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.checkUserInfo),
    mergeMap(() => {
      if (!this.user.userName && this.tokenService.token) {
        return this.auth.checkUserInfo()
        .pipe(map((user: IUser) => new CheckUserInfoSuccessAction({ user })),
        catchError(() => of(new CheckUserInfoFailedAction())));
      }
      return of(new CheckUserInfoSuccessAction({ user: this.user }));
    }),
  );

  private user: IUser;

  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private tokenService: TokenService,
    private store: Store<{ userInfo }>,
  ) {
    this.store.pipe(select('userInfo'))
      .subscribe((userInfo: IUserInfoState) => {
      this.user = userInfo.user;
    });
  }
}
