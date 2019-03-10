import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  ActionTypes, CourseCreateAction, CourseCreateSuccessAction, CourseCreateFailedAction,
  // CourseListLoadingStartAction,
  // CourseListLoadingSuccessAction,
  // CourseListLoadingFailedAction,
  // CourseListLoadMoreAction,
  // CourseListLoadMoreSuccessAction,
  // CourseListLoadMoreFailedAction,
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
  /*public courseListLoading$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.courseListLoadingStart),
    mergeMap((action: CourseListLoadingStartAction) => {
      const { page, count, query } = action.payload;
      return this.coursesService.getCourseList(page, count, query)
        .pipe(map((items: Array<ICourse>) => new CourseListLoadingSuccessAction({ items })),
        catchError(() => of(new CourseListLoadingFailedAction())))
      }),
  );*/

  /*@Effect()
  public courseListLoadMore$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.courseListLoadMore),
    mergeMap((action: CourseListLoadMoreAction) => {
      const { page, count, query } = action.payload;
      return this.coursesService.getCourseList(page, count, query)
        .pipe(map((items: Array<ICourse>) => new CourseListLoadMoreSuccessAction({ items })),
        catchError(() => of(new CourseListLoadMoreFailedAction())))
      }),
  );*/
}