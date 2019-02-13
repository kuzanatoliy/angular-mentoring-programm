import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  styleUrls: [ './header.component.sass' ],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public userName?: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
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
      this.router.navigate(['login']);
    });
  }

}
