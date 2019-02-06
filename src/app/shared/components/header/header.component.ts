import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/services/auth.service';
// TODO Change after course item page component fixing
// import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: [ './header.component.sass' ],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public userName?: string = null;

  constructor(
    private authService: AuthService,
    // TODO Change after course item page component fixing
    // private router: Router
  ) { }

  public ngOnInit(): void {
    this.userName = this.authService.getUserInfo();
  }

  public ngDoCheck(): void {
    this.userName = this.authService.getUserInfo();
  }

  public logoutHandler(): void {
    this.authService.logout().then(() => {
      this.userName = null;
      // TODO Chnage after course item page component fixing
      // this.router.navigate(['login']);
    });
  }

}
