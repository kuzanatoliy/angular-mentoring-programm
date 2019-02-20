import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService, LoadingService } from 'src/app/services';

import { ICourse } from 'src/app/interfaces/ICourse';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-course-create-page',
  styleUrls: [ './course-create-page.component.sass' ],
  templateUrl: './course-create-page.component.html',
})
export class CourseCreatePageComponent implements OnInit {
  public course: ICourse;

  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private router: Router,
  ) { }

  public saveAction: (course: ICourse) => void = (course: ICourse): void => {
    this.loadingService.show();
    this.coursesService.createCourse(course)
      .then((): void => {
        this.loadingService.hide();
        this.router.navigate(['courses']);
      });
  }

  public cancelAction: () => void = () => {
    this.router.navigate(['courses']);
  }

  public ngOnInit(): void { }

}
