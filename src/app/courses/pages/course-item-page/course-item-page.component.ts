import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { CoursesService } from '../../services/courses.service';

import { ICourse } from '../../../interfaces/ICourse';

@Component({
  selector: 'app-course-item-page',
  styleUrls: [ './course-item-page.component.sass' ],
  templateUrl: './course-item-page.component.html',
})
export class CourseItemPageComponent implements OnInit {
  public course: ICourse;

  constructor(
    private router: Router,
    private authService: AuthService,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
  ) { }

  public durationChangeHandler: (value: number) => void = (value: number) => {
    this.course.duration = value;
  }

  public dateChangeHandler: (value: Date) => void = (value: Date) => {
    this.course.creationDate = value;
  }

  public ngOnInit(): void {
    this.authService.isAuthorized()
      .then((isAuth: boolean): Promise<ICourse> => {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!isAuth) {
          this.router.navigate(['login']);
        } else if (id) {
          return this.coursesService.getCourse(id);
        } else {
          this.router.navigate(['courses']);
        }
      }).then((course: ICourse): void => {
        this.course = course;
      });
  }

  public saveHandler(): void {
    this.coursesService.updateCourse(this.course.id, this.course)
      .then((): void => {
        this.router.navigate(['courses']);
      });
  }

  public cancelHandler(): void {
    this.router.navigate(['courses']);
  }
}
