import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ICourse } from '../../../interfaces/ICourse';

@Component({
  selector: 'app-course-item-page',
  templateUrl: './course-item-page.component.html',
  styleUrls: ['./course-item-page.component.sass']
})
export class CourseItemPageComponent implements OnInit {
  public course: ICourse;

  public durationChangeHandler: Function = (value: number) => {
    this.course.duration = value;
  }

  public dateChangeHandler: Function = (value: Date) => {
    this.course.creationDate = value;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authService.isAuthorized()
      .then((isAuth: boolean) => {
        if(!isAuth) {
          this.router.navigate(['login']);
        } else {
          const id = this.activatedRoute.snapshot.paramMap.get('id');

          return this.coursesService.getCourse(id);
        }
      }).then((course: ICourse) => {
        this.course = course;
      });
  }

  saveHandler() {
    this.coursesService.updateCourse(this.course.id, this.course)
      .then(() => this.router.navigate(['courses']));
  }

  cancelHandler() {
    this.router.navigate(['courses']);
  }
}
