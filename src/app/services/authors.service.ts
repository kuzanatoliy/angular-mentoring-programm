import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AUTHORS_URL } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(
    private http: HttpClient,
  ) {}

  public getAuthorList() {
    return this.http.get(AUTHORS_URL);
  }
}
