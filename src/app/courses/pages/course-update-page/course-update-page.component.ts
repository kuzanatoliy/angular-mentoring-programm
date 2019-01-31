import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { CoursesService } from '../../services/courses.service';

import { ICourse } from '../../../interfaces/ICourse';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-course-update-page',
  styleUrls: [ './course-update-page.component.sass' ],
  templateUrl: './course-update-page.component.html',
})
export class CourseUpdatePageComponent implements OnInit {
  public course: ICourse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  public saveAction: (course: ICourse) => void = (course: ICourse): void => {
    this.coursesService.updateCourse(course.id, course)
      .then((): void => {
        this.router.navigate(['courses']);
      });
  }

  public cancelAction: () => void = () => {
    this.router.navigate(['courses']);
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
        this.cdr.detectChanges();
      });
  }
}
