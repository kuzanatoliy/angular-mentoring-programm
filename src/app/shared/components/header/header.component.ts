import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
    private router: Router,
    private store: Store<{ userInfo: IUserInfoState }>,
  ) { }

  public ngOnInit(): void {
    this.userInfo$ = this.store.pipe(select('userInfo'));
    this.userInfo$.subscribe((state: IUserInfoState) => {
      const { user: { userName }, loading, error } = state;
      this.userName = userName;
      if (!userName && !loading && !error) {
        this.router.navigate(['login']);
      }
    });
  }

  public logoutHandler(): void {
    this.store.dispatch(new LogoutAction());
  }
}
