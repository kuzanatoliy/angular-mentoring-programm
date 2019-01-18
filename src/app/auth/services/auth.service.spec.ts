import { TestBed, async } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => service = new AuthService());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login should return empty object', () => {
    service.login('', '').then(result => expect(result).toEqual({}));
  });

  it('login should return object with userInfo', () => {
    service.login('user', 'user_password')
      .then(result => expect(result).toEqual({
        userName: 'user'
      }));
  });

  describe('should check not authorized functionality', () => {
    it('getUserInfo should return null', () => {
      const result = service.getUserInfo();
      expect(result).toBeNull();
    });
    
    it('isAuthorize should return false', () => {
      service.isAuthorized().then(isAuth => expect(isAuth).toBeFalsy());
    });

    it('logout should return empty object', () => {
      service.logout().then(result => expect(result).toEqual({}));
    });
  });

  describe('should check authorized functionality', () => {
    beforeEach(async(() => {
      service.login('user', 'user_password');
    }));

    it('getUserInfo should return null', () => {
      const result = service.getUserInfo();
      expect(result).toBe('user');
    });
    
    it('isAuthorize should return false', () => {
      service.isAuthorized().then(isAuth => expect(isAuth).toBeTruthy());
    });

    it('logout should return empty object', () => {
      service.logout().then(result => expect(result).toEqual({}));
    });
  });
});
