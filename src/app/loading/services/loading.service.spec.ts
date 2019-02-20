import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;
  let isShow: boolean;

  const nextHandler = (val: boolean): void => {
    isShow = val;
  };

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(LoadingService);
    service.subscribe(nextHandler);
  });

  it('should be created', () => {
    service = TestBed.get(LoadingService);
    expect(service).toBeTruthy();
  });

  it('should check show functionality', () => {
    service.show();
    expect(service.showed()).toBeTruthy();
    expect(isShow).toBeTruthy();
  });

  it('should check hide functionality', () => {
    service.hide();
    expect(service.showed()).toBeFalsy();
    expect(isShow).toBeFalsy();
  });
});
