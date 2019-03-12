import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  ActionTypes,
  CourseCreateAction,
  CourseCreateSuccessAction,
  CourseCreateFailedAction,
  CourseLoadAction,
  CourseLoadSuccessAction,
  CourseLoadFailedAction,
  CourseUpdateAction,
  CourseUpdateSuccessAction,
  CourseUpdateFailedAction,
} from '../actions/course.actions';

import { CoursesService } from 'src/app/services';

import { ICourse } from 'src/app/interfaces/ICourse';
 
@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
  ) {}
 
  @Effect()
  public courseCreate$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.courseCreate),
    mergeMap((action: CourseCreateAction) => this.coursesService.createCourse(action.payload.course)
      .pipe(map((course: ICourse) => new CourseCreateSuccessAction({ course })),
      catchError(() => of(new CourseCreateFailedAction())))),
  );

  @Effect()
  public courseLoad$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.courseLoad),
    mergeMap((action: CourseLoadAction) => this.coursesService.getCourse(action.payload.id)
      .pipe(map((course: ICourse) => new CourseLoadSuccessAction({ course })),
      catchError(() => of(new CourseLoadFailedAction())))),
  );

  @Effect()
  public courseUpdate$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.courseUpdate),
    mergeMap((action: CourseUpdateAction) => {
      const { course } = action.payload
      return this.coursesService.updateCourse(course.id, course)
        .pipe(map(() => new CourseUpdateSuccessAction({ course })),
        catchError(() => of(new CourseUpdateFailedAction())));
    }),
  );
}
