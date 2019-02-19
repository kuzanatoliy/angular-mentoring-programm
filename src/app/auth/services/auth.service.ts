import { Injectable } from '@angular/core';

import { IUser } from '../../interfaces/IUser';

import { LOGIN_URL, LOGOUT_URL, USER_INFO_URL } from '../../constants/urls';

import { RequestService } from '../../shared/services/request.service';
import { TokenService } from '../../shared/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userInfo: IUser = {};
  private authorized: boolean = false;

  constructor(
    private request: RequestService,
    private tokenService: TokenService,
  ) { }

  public login(userName: string, password: string): Promise<IUser> {
    return this.request.post(LOGIN_URL, { userName, password })
      .then(this.auth);
  }

  public logout(): Promise<IUser> {
    return this.request.post(LOGOUT_URL)
      .then(() => this.tokenService.token = null)
      .then(this.auth);
  }

  public checkUserInfo(): Promise<IUser> {
    return this.request.get(USER_INFO_URL)
      .then(this.auth);
  }

  public isAuthorized(): Promise<boolean> {
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
  }

  public getUserInfo(): string {
    return this.userInfo.userName;
  }

  public auth: (user: IUser) => IUser = (user: IUser): IUser => {
    const { userName, firstName, lastName, token } = user;

    if (token) {
      this.tokenService.token = token;
    }

    if (userName) {
      this.userInfo = {
        firstName,
        lastName,
        userName,
      };
      this.authorized = true;
    } else {
      this.tokenService.token = null;
      this.userInfo = {};
      this.authorized = false;
    }

    return this.userInfo;
  }
}
