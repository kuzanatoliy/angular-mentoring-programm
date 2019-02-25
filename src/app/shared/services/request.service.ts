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
export class RequestService {
  private headers: HttpHeaders = new HttpHeaders({});

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  public post(url, data: IRequestData = {}) {
    return this.http.post(url, data).toPromise();
  }

  public get(url, data: IRequestData = {}) {
    const paramsStr: string = Object.entries(data)
      .map((item) => `${item[0]}=${item[1]}`).join('&');
    const urlStr: string = paramsStr ? `${ url }?${ paramsStr }` : url;
    return this.http.get(urlStr).toPromise();
  }

  public delete(url) {
    return this.http.delete(url).toPromise();
  }
}
