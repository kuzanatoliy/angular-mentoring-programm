import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USER_NAME = 'user';
  private PASSWORD = 'user_password'
  private authorized = false;

  constructor() { }

  isAuthorized() {
    return Promise.resolve({
      authorized: this.authorized,
      userName: this.USER_NAME
    });
  }

  authorize(userName, password) {
    if(userName === this.USER_NAME && password === this.PASSWORD) {
      this.authorized = true;

      return Promise.resolve({
        authorized: this.authorized  
      })
    }

    return Promise.resolve({
      authorized: this.authorized,
      userName: this.USER_NAME
    });
  }
}
