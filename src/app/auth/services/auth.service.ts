import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USER_NAME = 'user';
  private PASSWORD = 'user_password';
  private authorized = true;

  private userName?: string = 'user';

  login(userName, password) {
    if(this.USER_NAME === userName && this.PASSWORD === password) {
      this.authorized = true;
    }

    if(this.authorized) {
      this.userName = this.USER_NAME;
      return Promise.resolve({
        userName: this.USER_NAME
      });
    }

    return Promise.resolve({});
  }

  logout() {
    this.authorized = false;
    this.userName = null;

    return Promise.resolve({});
  }

  isAuthorized() {
    return Promise.resolve(this.authorized);
  }

  getUserInfo() {
    return this.userName;
  }

  constructor() { }
}
