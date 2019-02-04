import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { CoursesService } from '../../services/courses.service';

import { ICourse } from '../../../interfaces/ICourse';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-course-create-page',
  styleUrls: [ './course-create-page.component.sass' ],
  templateUrl: './course-create-page.component.html',
})
export class CourseCreatePageComponent implements OnInit {
  public course: ICourse;

  constructor(
    private authService: AuthService,
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  public saveAction: (course: ICourse) => void = (course: ICourse): void => {
    this.coursesService.createCourse(course)
      .then((): void => {
        this.router.navigate(['courses']);
      });
  }

  public cancelAction: () => void = () => {
    this.router.navigate(['courses']);
  }

  public ngOnInit(): void { }

}
