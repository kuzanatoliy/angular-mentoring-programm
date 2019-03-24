import { Action } from '@ngrx/store';
import { ICourse } from 'src/app/interfaces/ICourse';

export enum ActionTypes {
  courseListLoadingStart = '[Course List] Course list loading start',
  courseListLoadingSuccess = '[Course List] Course list loading success',
  courseListLoadingFailed = '[Course List] Course list loading failed',
  courseListLoadMore = '[Course List] Course list load more',
  courseListLoadMoreSuccess = '[Course List] Course list load more success',
  courseListLoadMoreFailed = '[Course List] Course list load more failed',
}

export class CourseListLoadingStartAction implements Action {
  public readonly type = ActionTypes.courseListLoadingStart;

  constructor(public payload: { page?: number, count?: number, query?: string } = {}) {}
}

export class CourseListLoadingSuccessAction implements Action {
  public readonly type = ActionTypes.courseListLoadingSuccess;

  constructor(public payload: { items: Array<ICourse> }) {}
}

export class CourseListLoadingFailedAction implements Action {
  public readonly type = ActionTypes.courseListLoadingFailed;
}

export class CourseListLoadMoreAction implements Action {
  public readonly type = ActionTypes.courseListLoadMore;

  constructor(public payload: { page?: number, count?: number, query?: string } = {}) {}
}

export class CourseListLoadMoreSuccessAction implements Action {
  public readonly type = ActionTypes.courseListLoadMoreSuccess;

  constructor(public payload: { items: Array<ICourse> }) {}
}

export class CourseListLoadMoreFailedAction implements Action {
  public readonly type = ActionTypes.courseListLoadMoreFailed;
}

export type ActionsUnion = CourseListLoadingStartAction
  | CourseListLoadingSuccessAction
  | CourseListLoadingFailedAction
  | CourseListLoadMoreAction
  | CourseListLoadMoreSuccessAction
  | CourseListLoadMoreFailedAction;
