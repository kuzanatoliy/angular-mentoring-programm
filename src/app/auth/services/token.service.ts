import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private currToken: string;

  get token() {
    return this.currToken;
  }

  set token(token) {
    this.currToken = token;
  }

  constructor() { }
}
