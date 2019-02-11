import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TokenService } from './token.service';

import { IUser } from '../../interfaces/IUser';

import { LOGIN_URL, LOGOUT_URL, USER_INFO_URL } from '../../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userInfo: IUser = {};
  private authorized: boolean = false;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
  ) {
    this.checkUserInfo().then((data) => console.log(data));
  }

  public login(userName: string, password: string): Promise<IUser> {
    return this.http.post(LOGIN_URL, { userName, password, withCredentials: true })
      .toPromise()
      .then(this.auth);
  }

  public logout(): Promise<IUser> {
    return this.http.post(LOGOUT_URL, {})
      .toPromise()
      .then(this.auth);
  }

  public checkUserInfo(): Promise<IUser> {
    return this.http.get(USER_INFO_URL, { withCredentials: true })
      .toPromise()
      .then(this.auth);
  }

  public isAuthorized(): Promise<boolean> {
    return Promise.resolve(this.authorized);
  }

  public getUserInfo(): string {
    return this.userInfo.userName;
  }

  public auth: (user: IUser) => IUser = (user: IUser): IUser => {
    if (user.userName) {
      const { userName, firstName, lastName, token } = user;
      this.userInfo = {
        firstName,
        lastName,
        userName,
      };
      this.tokenService.token = token;
      this.authorized = true;
    } else {
      this.userInfo = {};
      this.authorized = false;
    }
    return this.userInfo;
  }
}
