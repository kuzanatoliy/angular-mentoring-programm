import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  ActionTypes,
  AuthorListLoadFailedAction,
  AuthorListLoadSuccessAction,
} from '../actions/author-list.actions';

import { AuthorsService } from 'src/app/services';

import { IUser } from 'src/app/interfaces/IUser';

@Injectable()
export class AuthorListEffects {
  @Effect()
  public authorListLoading$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.authorListLoad),
    mergeMap(() => this.authorsService.getAuthorList()
      .pipe(map((items: Array<IUser>) => new AuthorListLoadSuccessAction({ items })),
      catchError(() => of(new AuthorListLoadFailedAction()))),
    ),
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService,
  ) {}
}
