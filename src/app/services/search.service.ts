import { Injectable } from '@angular/core';

import { IListemable, ListenerCallback } from 'src/app/interfaces/IListenable';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements IListemable {
  private listeners: Array<ListenerCallback> = [];

  private searchValue: string = '';

  public get value(): string {
    return this.searchValue;
  }

  public set value(value) {
    this.searchValue = value;
    this.listeners.forEach((item) => item(this.searchValue));
  }

  constructor() { }

  public subscribe(listener: ListenerCallback): void {
    this.listeners.push(listener);
  }

  public unsubscribe(listener: ListenerCallback): void {
    this.listeners = this.listeners.filter((item) => !(item || item === listener));
  }

  public getValue(): string {
    return this.searchValue;
  }

  public setValue(value): void {
    this.searchValue = value;
    this.listeners.forEach((item) => item(this.searchValue));
  }
}
