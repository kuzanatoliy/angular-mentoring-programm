import { Injectable } from '@angular/core';

import { IUser } from '../../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private USER_NAME: string = 'user';
  private PASSWORD: string = 'user_password';
  // TODO Change after fixed course-item-page component
  private authorized: boolean = true;
  // TODO Change after fixed course-item-page component
  private userName?: string = 'user';

  constructor() { }

  public login(userName: string, password: string): Promise<IUser | object> {
    if (this.USER_NAME === userName && this.PASSWORD === password) {
      this.authorized = true;
    }

    if (this.authorized) {
      this.userName = this.USER_NAME;
      return Promise.resolve({
        userName: this.USER_NAME,
      });
    }

    return Promise.resolve({});
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
