import { Action } from '@ngrx/store';

export enum ActionTypes {
  login = '[User info] login',
  loginSuccess = '[User info] login success',
  loginFailed = '[User info] login failed',
  logout = '[User info] logout',
  logoutSuccess = '[User info] logout success',
  logoutFailed = '[User info] logout failed',
  checkUserInfo = '[User info] check user info',
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

export class LogoutAction implements Action {
  public readonly type = ActionTypes.logout;
}

export class LogoutSuccessAction implements Action {
  public readonly type = ActionTypes.logoutSuccess;
}

export class LogoutFailedAction implements Action {
  public readonly type = ActionTypes.logoutFailed;
}

export class CheckUserInfoAction implements Action {
  public readonly type = ActionTypes.checkUserInfo;
}

export type ActionsUnion = LoginAction
  | LoginSuccessAction
  | LoginFailedAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutFailedAction
  | CheckUserInfoAction;
