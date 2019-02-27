import { Action } from '@ngrx/store';

export enum ActionTypes {
  login = '[Auth] login',
  loginSuccess = '[Auth] login success',
  loginFailed = '[Auth] login failed',
}

export class LoginAction implements Action {
  public readonly type = ActionTypes.login;

  constructor(public payload: { userName: string; password: string }) {}
}

export class LoginSuccessAction implements Action {
  public readonly type = ActionTypes.loginSuccess;
}

export class LoginFailedAction implements Action {
  public readonly type = ActionTypes.loginFailed;
}

export type ActionsUnion = LoginAction | LoginSuccessAction | LoginFailedAction;
