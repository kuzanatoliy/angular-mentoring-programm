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
  private userInfo: IUser = {};
  private authorized: boolean = false;
  private observable: Observable<IUser>;
  private observer: Observer<IUser>;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
  ) {
    this.observable = new Observable(this.observerHandler);
  }

  public login(userName: string, password: string): Promise<IUser> {
    return this.http.post(LOGIN_URL, { userName, password })
      .toPromise()
      .then(this.auth);
  }

  public logout(): Observable<IUser> {
    return this.http.post(LOGOUT_URL, {})
      .pipe(map(this.auth));
  }

  public checkUserInfo(): Promise<IUser> {
    return this.http.get(USER_INFO_URL)
      .toPromise()
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

  public isAuthToObservable(): Observable<boolean> {
    return from(this.isAuthorized());
  }

  public getUserInfo(): string {
    return this.userInfo.userName;
  }

  public subscribe(
    next: (val: IUser) => void,
    error?: (err: any) => void,
    complete?: () => void,
  ): Subscription {
    return this.observable.subscribe({ next, error, complete });
  }

  private auth: (user: IUser) => IUser = (user: IUser): IUser => {
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

    this.observer.next(this.userInfo);

    return this.userInfo;
  }

  private observerHandler = (observer: Observer<IUser>): void => {
    this.observer = observer;
  }
}
