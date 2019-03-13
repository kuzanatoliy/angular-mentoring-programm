import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser } from 'src/app/interfaces/IUser';

import { LOGIN_URL, LOGOUT_URL, USER_INFO_URL } from 'src/app/constants/urls';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  public login(userName: string, password: string): Observable<IUser> {
    return this.http.post(LOGIN_URL, { userName, password });
  }

  public logout(): Observable<IUser> {
    return this.http.post(LOGOUT_URL, {})
      .pipe();
  }

  public checkUserInfo(): Observable<IUser> {
    return this.http.get(USER_INFO_URL);
  }

  /* public isAuthorized(): Promise<boolean> {
    if (this.userInfo.userName || !this.tokenService.token) {
      return Promise.resolve(this.authorized);
    } else {
      return this.checkUserInfo()
        .then(() => Promise.resolve(this.authorized))
        .catch(() => {
          this.tokenService.token = null;
          return Promise.resolve(this.authorized);
        });
    }
  } */
}
