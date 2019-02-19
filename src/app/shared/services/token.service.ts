import { Injectable } from '@angular/core';

import { IListemable, ListenerCallback } from '../../interfaces/IListenable';

@Injectable({
  providedIn: 'root',
})
export class TokenService implements IListemable {
  private listeners: Array<ListenerCallback> = [];

  public get token(): string {
    return localStorage.getItem('token');
  }

  public set token(token: string) {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    this.listeners.forEach((item: ListenerCallback): void => item(token));
  }

  constructor() { }

  public subscribe(listener: ListenerCallback): void {
    this.listeners.push(listener);
  }

  public unsubscribe(listener: ListenerCallback): void {
    this.listeners = this.listeners.filter((item) => !(item || item === listener));
  }
}
