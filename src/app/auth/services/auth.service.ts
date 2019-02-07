import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUser } from '../../interfaces/IUser';

import { LOGIN_URL, LOGOUT_URL, USER_INFO_URL } from '../../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userInfo: IUser = {};
  private authorized: boolean = false;

  constructor(
    private http: HttpClient,
  ) { }

  public login(userName: string, password: string): Promise<IUser> {
    return this.http.post(LOGIN_URL, { userName, password })
      .toPromise()
      .then(this.auth);
  }

  public logout(): Promise<IUser> {
    return this.http.post(LOGOUT_URL, {})
      .toPromise()
      .then(this.auth);
  }

  public checkUserInfo(): Promise<IUser> {
    return this.http.get(USER_INFO_URL)
      .toPromise()
      .then(this.auth);
  }

  public isAuthorized(): Promise<boolean> {
    return Promise.resolve(this.authorized);
  }

  public getUserInfo(): string {
    return this.userInfo.userName;
  }

  private auth(user: IUser): IUser {
    if (user.userName) {
      this.userInfo = user;
      this.authorized = true;
    } else {
      this.userInfo = {};
      this.authorized = false;
    }
    return this.userInfo;
  }
}
