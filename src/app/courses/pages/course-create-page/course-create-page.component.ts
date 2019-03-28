import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadingService } from 'src/app/services';

import { ICourse } from 'src/app/interfaces/ICourse';

import { CourseCreateAction, CourseInitAction } from 'src/app/store/actions/course.actions';
import { ICourseState } from 'src/app/store/reducers/course.reducer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-course-create-page',
  styleUrls: [ './course-create-page.component.sass' ],
  templateUrl: './course-create-page.component.html',
})
export class CourseCreatePageComponent implements OnInit {
  public course: ICourse;
  private course$: Observable<ICourseState>;

  constructor(
    private loadingService: LoadingService,
    private router: Router,
    private store: Store<{ course: ICourseState }>,
  ) { }

  public saveAction: (course: ICourse) => void = (course: ICourse): void => {
    this.loadingService.show();
    this.store.dispatch(new CourseCreateAction({ course }));
    this.router.navigate(['courses']);
  }

  public cancelAction: () => void = () => {
    this.router.navigate(['courses']);
  }

  public ngOnInit(): void {
    this.store.dispatch(new CourseInitAction());
    this.course$ = this.store.pipe(select('course'));
    this.course$.subscribe((state: ICourseState) => {
      const { course, loading } = state;
      this.course = course;
      loading || this.loadingService.hide();
    });
  }
}
