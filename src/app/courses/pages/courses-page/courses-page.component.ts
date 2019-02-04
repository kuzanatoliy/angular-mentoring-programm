import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-courses-page',
  styleUrls: [ './courses-page.component.sass' ],
  templateUrl: './courses-page.component.html',
})
export class CoursesPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void { }

  public createCourseHandler(): void {
    this.router.navigate(['courses/new']);
  }

}
