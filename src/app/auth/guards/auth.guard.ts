import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from 'src/app/services/auth.service';
import { IUserInfoState } from 'src/app/store/reducers/user-info.reducer';
import { CheckUserInfoAction } from 'src/app/store/actions/user-info.actions';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private userInfo$: Observable<IUserInfoState>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<{ userInfo: IUserInfoState }>
  ) {
    this.userInfo$ = this.store.pipe(select('userInfo'));
    this.store.dispatch(new CheckUserInfoAction());
  }

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    
    return this.userInfo$.pipe(map((state: IUserInfoState) => {
      console.log(state);
      return !!state.user.userName;
    }));
    /*return this.authService.isAuthToObservable()
      .pipe(map((isAuth: boolean): boolean => {
        if (!isAuth) {
          this.router.navigate(['login']);
        }
        return isAuth;
      }));*/
  }
}
