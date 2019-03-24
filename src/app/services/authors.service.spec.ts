import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthorsService } from './authors.service';

describe('CoursesService', () => {
  let service: AuthorsService;
  let http: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ AuthorsService ],
  }));

  beforeEach(() => {
    service = TestBed.get(AuthorsService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
