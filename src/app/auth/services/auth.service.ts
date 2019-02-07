import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUser } from '../../interfaces/IUser';

import { LOGIN_URL, LOGOUT_URL, USER_INFO_URL } from '../../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userInfo: IUser = {};
  private USER_NAME: string = 'user';
  private PASSWORD: string = 'user_password';
  // TODO Change after fixed course-item-page component
  private authorized: boolean = false;
  // TODO Change after fixed course-item-page component
  private userName?: string = null;

  constructor(
    private http: HttpClient,
  ) { }

  public login(userName: string, password: string): Promise<IUser | object> {
    return this.http.post(LOGIN_URL, { userName, password })
      .toPromise()
      .then((data) => this.userInfo = data);
  }

  public logout(): Promise<object> {
    this.authorized = false;
    this.userName = null;

    return Promise.resolve({});
  }

  public isAuthorized(): Promise<boolean> {
    return Promise.resolve(this.authorized);
  }

  public getUserInfo(): string {
    return this.userName;
  }
}
