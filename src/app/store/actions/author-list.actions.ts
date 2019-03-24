import { Action } from '@ngrx/store';

import { IUser } from 'src/app/interfaces/IUser';

export enum ActionTypes {
  authorListLoad = '[Author List] Course load',
  authorListLoadSuccess = '[Author List] Course load success',
  authorListLoadFailed = '[Author List] Course load failed',
}

export class AuthorListLoadAction implements Action {
  public readonly type = ActionTypes.authorListLoad;
}

export class AuthorListLoadSuccessAction implements Action {
  public readonly type = ActionTypes.authorListLoadSuccess;

  constructor(public payload: { items: Array<IUser> }) {}
}

export class AuthorListLoadFailedAction implements Action {
  public readonly type = ActionTypes.authorListLoadFailed;
}

export type ActionsUnion = AuthorListLoadAction
  | AuthorListLoadSuccessAction
  | AuthorListLoadFailedAction;
