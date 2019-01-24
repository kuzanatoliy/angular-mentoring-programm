import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USER_NAME: string = 'user';
  private PASSWORD: string = 'user_password';
  // TODO Change after fixed course-item-page component
  private authorized: boolean = true;
  // TODO Change after fixed course-item-page component
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
