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
  constructor(public payload: { page?: number, count?: number, query?: string } = {}) {};
  
  public readonly type = ActionTypes.courseListLoadingStart;
}

export class CourseListLoadingSuccessAction implements Action {
  constructor(public payload: { items: Array<ICourse> }) {}
  
  public readonly type = ActionTypes.courseListLoadingSuccess;
}

export class CourseListLoadingFailedAction implements Action {
  public readonly type = ActionTypes.courseListLoadingFailed;
}

export class CourseListLoadMoreAction implements Action {
  constructor(public payload: { page?: number, count?: number, query?: string } = {}) {};
  
  public readonly type = ActionTypes.courseListLoadMore;
}

export class CourseListLoadMoreSuccessAction implements Action {
  constructor(public payload: { items: Array<ICourse> }) {}
  
  public readonly type = ActionTypes.courseListLoadMoreSuccess;
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
