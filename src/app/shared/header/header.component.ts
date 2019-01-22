import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public userName?: string = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userName = this.authService.getUserInfo();
  }

  ngDoCheck() {
    this.userName = this.authService.getUserInfo();
  }

  logoutHandler() {
    this.authService.logout().then(() => {
      this.userName = null;
      this.router.navigate(['login']);
    });
  }

}
