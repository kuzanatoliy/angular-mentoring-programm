import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService, LoadingService } from 'src/app/services';

import { ICourse } from 'src/app/interfaces/ICourse';

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
    private cdr: ChangeDetectorRef,
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private router: Router,
  ) { }

  public saveAction: (course: ICourse) => void = (course: ICourse): void => {
    this.loadingService.show();
    this.coursesService.updateCourse(course.id, course)
      .then((): void => {
        this.loadingService.hide();
        this.router.navigate(['courses']);
      });
  }

  public cancelAction: () => void = () => {
    this.router.navigate(['courses']);
  }

  public ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.loadingService.show();
      this.coursesService.getCourse(id)
        .then((course: ICourse): void => {
          this.course = course;
          this.loadingService.hide();
          this.cdr.detectChanges();
        });
    } else {
      this.router.navigate(['courses']);
    }
  }
}
