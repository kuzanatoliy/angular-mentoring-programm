import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthToObservable()
      .pipe(map((isAuth: boolean): boolean => {
        if (!isAuth) {
          this.router.navigate(['login']);
        }
        return isAuth;
      }));
  }
}
