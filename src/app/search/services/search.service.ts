import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchValue: string = '';

  constructor() { }

  public getValue(): string {
    return this.searchValue;
  }

  public setValue(value): void {
    this.searchValue = value;
  }
}
