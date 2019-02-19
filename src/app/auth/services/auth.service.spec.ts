import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { TokenService } from '../../shared/services/token.service';

import { LOGIN_URL, LOGOUT_URL, USER_INFO_URL } from '../../constants/urls';

describe('AuthService', () => {
  let service: AuthService;
  let tokenService: TokenService;
  let http: HttpTestingController;

  const userInfo = {
    firstName: 'Stepa',
    lastName: 'Pupkin',
    userName: 'Some.User',
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ AuthService, TokenService ],
  }));

  beforeEach(() => {
    service = TestBed.get(AuthService);
    tokenService = TestBed.get(TokenService);
    http = TestBed.get(HttpTestingController);
    tokenService.token = 'Some.User';
  });

  afterEach(() => {
    localStorage.clear();
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login should return empty object', () => {
    service.login('', '').then((result) => expect(result).toEqual({}));

    const req = http.expectOne(LOGIN_URL);
    expect(req.request.method).toEqual('POST');
    req.flush({});
  });

  it('login should return object with userInfo', () => {
    service.login(userInfo.userName, 'User.Password')
      .then((result) => expect(result).toEqual(userInfo));

    const req = http.expectOne(LOGIN_URL);
    expect(req.request.method).toEqual('POST');
    req.flush(userInfo);
  });

  describe('should check not authorized functionality', () => {
    it('checkUserInfo should return empty object', () => {
      service.checkUserInfo()
        .then((result) => expect(result).toEqual({}));

      const req = http.expectOne(USER_INFO_URL);
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });

    it('getUserInfo should return null', () => {
      const result = service.getUserInfo();
      expect(result).toBeUndefined();
    });

    it('isAuthorize should return false', () => {
      service.isAuthorized().then((isAuth) => expect(isAuth).toBeFalsy());

      const req = http.expectOne(USER_INFO_URL);
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });

    it('logout should return empty object', () => {
      service.logout().then((result) => expect(result).toEqual({}));

      const req = http.expectOne(LOGOUT_URL);
      expect(req.request.method).toEqual('POST');
      req.flush({});
    });
  });

  describe('should check authorized functionality', () => {
    it('checkUserInfo should return userInfo', () => {
      service.checkUserInfo()
        .then((result) => expect(result).toEqual(userInfo));

      const req = http.expectOne(USER_INFO_URL);
      expect(req.request.method).toEqual('GET');
      req.flush(userInfo);
    });

    it('isAuthorize should return true', () => {
      service.isAuthorized()
        .then((isAuth) => expect(isAuth).toBeTruthy());

      const req = http.expectOne(USER_INFO_URL);
      expect(req.request.method).toEqual('GET');
      req.flush(userInfo);
    });

    it('logout should return empty object', () => {
      service.logout().then((result) => expect(result).toEqual({}));

      const req = http.expectOne(LOGOUT_URL);
      expect(req.request.method).toEqual('POST');
      req.flush({});
    });
  });
});
