import { Action } from '@ngrx/store';
import { ICourse } from 'src/app/interfaces/ICourse';

export enum ActionTypes {
  courseInit = '[Course] Course init',
  courseLoad = '[Course] Course load',
  courseLoadSuccess = '[Course] Course load success',
  courseLoadFailed = '[Course] Course load failed',
  courseCreate = '[Course] Course create',
  courseCreateSuccess = '[Course] Course create success',
  courseCreateFailed = '[Course] Course create failed',
  courseUpdate = '[Course] Course update',
  courseUpdateSuccess = '[Course] Course update success',
  courseUpdateFailed = '[Course] Course update failed',
}

export class CourseInitAction implements Action {
  public readonly type = ActionTypes.courseInit;
}

export class CourseLoadAction implements Action {
  constructor(public payload: { id: number }) {};
  
  public readonly type = ActionTypes.courseLoad;
}

export class CourseLoadSuccessAction implements Action {
  constructor(public payload: { course: ICourse }) {}
  
  public readonly type = ActionTypes.courseLoadSuccess;
}

export class CourseLoadFailedAction implements Action {
  public readonly type = ActionTypes.courseLoadFailed;
}

export class CourseCreateAction implements Action {
  constructor(public payload: { course: ICourse }) {}
  
  public readonly type = ActionTypes.courseCreate;
}

export class CourseCreateSuccessAction implements Action {
  constructor(public payload: { course: ICourse }) {}
  
  public readonly type = ActionTypes.courseCreateSuccess;
}

export class CourseCreateFailedAction implements Action {
  public readonly type = ActionTypes.courseCreateFailed;
}

export class CourseUpdateAction implements Action {
  constructor(public payload: { course: ICourse }) {};
  
  public readonly type = ActionTypes.courseUpdate;
}

export class CourseUpdateSuccessAction implements Action {
  constructor(public payload: { course: ICourse }) {}
  
  public readonly type = ActionTypes.courseUpdateSuccess;
}

export class CourseUpdateFailedAction implements Action {
  public readonly type = ActionTypes.courseUpdateFailed;
}

export type ActionsUnion = CourseInitAction
  | CourseLoadAction
  | CourseLoadSuccessAction
  | CourseLoadFailedAction
  | CourseCreateAction
  | CourseCreateSuccessAction
  | CourseCreateFailedAction
  | CourseUpdateAction
  | CourseUpdateSuccessAction
  | CourseUpdateFailedAction
