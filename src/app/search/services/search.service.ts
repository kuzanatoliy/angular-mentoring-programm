import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchValue: string = '';

  getValue() {
    return this.searchValue;
  }

  setValue(value) {
    this.searchValue = value;
  }

  constructor() { }
}
