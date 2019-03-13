import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

import { IUser } from 'src/app/interfaces/IUser';
import { IUserInfoState } from 'src/app/store/reducers/user-info.reducer';

import { LogoutAction } from 'src/app/store/actions/user-info.actions';

@Component({
  selector: 'app-header',
  styleUrls: [ './header.component.sass' ],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public userName?: string = null;
  private userInfo$: Observable<IUserInfoState>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<{ userInfo: IUserInfoState }>
  ) { }

  public ngOnInit(): void {
    this.userInfo$ = this.store.pipe(select('userInfo'));
    this.userInfo$.subscribe((userInfo: IUserInfoState) => {
      this.userName = userInfo.user.userName;
    });
  }

  public logoutHandler(): void {
    this.store.dispatch(new LogoutAction())
    /*this.authService.logout().then(() => {
      this.userName = null;
      this.router.navigate(['login']);
    });*/
  }
}
