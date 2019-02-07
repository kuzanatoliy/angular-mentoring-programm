import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthorized()
      .then((isAuth: boolean): boolean => {
        console.log(isAuth);
        if (!isAuth) {
          this.router.navigate(['login']);
        }
        return !isAuth;
      });
  }
}
