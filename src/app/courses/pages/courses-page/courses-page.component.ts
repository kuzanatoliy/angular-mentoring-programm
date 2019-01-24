import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.sass']
})
export class CoursesPageComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.isAuthorized()
      .then((isAuth: boolean) => {
        if(!isAuth) {
          this.router.navigate(['login']);
        }
      });
  }

}
