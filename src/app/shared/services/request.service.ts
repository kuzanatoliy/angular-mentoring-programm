import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IListener, ListenerCallback } from '../../interfaces/IListenable';
import { IUser } from '../../interfaces/IUser';

import { TokenService } from './token.service';

interface IRequestData {
  [key: string]: number | string | Date | Array<IUser>;
}

@Injectable({
  providedIn: 'root',
})
export class RequestService implements IListener {
  private headers: HttpHeaders = new HttpHeaders({});

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {
    const token = this.tokenService.token;
    token && (this.headers = new HttpHeaders({ token }));
    tokenService.subscribe(this.listenCallback);
  }

  public auth(url, userName, password) {
    return this.http.post(url, { userName, password })
      .toPromise()
      .then((user: IUser) => {
        const { token } = user;
        if (token) {
          this.tokenService.token = token;
        }
        return user;
      });
  }

  public post(url, data: IRequestData = {}) {
    return this.http.post(url, data, { headers: this.headers }).toPromise();
  }

  public get(url, data: IRequestData = {}) {
    const paramsStr: string = Object.entries(data)
      .map((item) => `${item[0]}=${item[1]}`).join('&');
    const urlStr: string = paramsStr ? `${ url }?${ paramsStr }` : url;
    return this.http.get(urlStr, { headers: this.headers }).toPromise();
  }

  public delete(url) {
    return this.http.delete(url, { headers: this.headers }).toPromise();
  }

  public listenCallback = (token: string): void => {
    this.headers = token
      ? new HttpHeaders({ token })
      : new HttpHeaders();
  }
}
