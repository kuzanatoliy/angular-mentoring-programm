import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  ActionTypes,
  LogoutSuccessAction,
  LogoutFailedAction,
  LoginAction,
  LoginSuccessAction,
  LoginFailedAction,
  CheckUserInfoSuccessAction,
  CheckUserInfoFailedAction,
} from '../actions/user-info.actions';

import { AuthService, TokenService } from 'src/app/services';

import { IUser } from 'src/app/interfaces/IUser';
import { IUserInfoState } from '../reducers/user-info.reducer';
 
@Injectable()
export class UserInfoEffects {
  private user: IUser;

  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private tokenService: TokenService,
    private store: Store<{ userInfo }>
  ) {
    this.store.pipe(select('userInfo'))
      .subscribe((userInfo: IUserInfoState) => {
      this.user = userInfo.user;
    });
  }

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
          const { userName, firstName, lastName, token } = user;

          if (token) {
            this.tokenService.token = token;
          }

          if (userName) {
            return new LoginSuccessAction({ user: {
              userName,
              firstName,
              lastName
            }});
          } else {
            return new LoginFailedAction();
          }
        }),
        catchError(() => of(new LoginFailedAction())));
    })
  );

  @Effect()
  public checkUserInfo$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.checkUserInfo),
    mergeMap(() => {
      if(!this.user.userName && this.tokenService.token) {
        return this.auth.checkUserInfo()
        .pipe(map((user: IUser) => new CheckUserInfoSuccessAction({ user })),
        catchError(() => of(new CheckUserInfoFailedAction())));
      }
      return of(new CheckUserInfoSuccessAction({ user: this.user }));
    }),
  );
}