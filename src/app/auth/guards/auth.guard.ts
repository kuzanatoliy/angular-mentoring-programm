import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUserInfoState } from 'src/app/store/reducers/user-info.reducer';
import { CheckUserInfoAction } from 'src/app/store/actions/user-info.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private userInfo$: Observable<IUserInfoState>;

  constructor(
    private router: Router,
    private store: Store<{ userInfo: IUserInfoState }>
  ) {
    this.userInfo$ = this.store.pipe(select('userInfo'));
    this.store.dispatch(new CheckUserInfoAction());
  }

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.userInfo$.pipe(map((state: IUserInfoState) => {
      const isAuth = !!state.user.userName;
      isAuth || this.router.navigate(['login']);
      return isAuth;
    }));
  }
}
