import { Injectable } from '@angular/core';

export type ISearchListener = (value: string) => void;

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchValue: string = '';
  private listeners: Array<ISearchListener> = [];

  constructor() { }

  public subscribeForListening(listener: ISearchListener): void {
    this.listeners.push(listener);
  }

  public unsubscribeForListening(listener: ISearchListener): void {
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
