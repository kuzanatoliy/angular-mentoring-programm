import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { LoadingService } from 'src/app/services';

import { ICourse } from 'src/app/interfaces/ICourse';
import { ICourseState } from 'src/app/store/reducers/course.reducer';

import { CourseLoadAction, CourseUpdateAction } from 'src/app/store/actions/course.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-course-update-page',
  styleUrls: [ './course-update-page.component.sass' ],
  templateUrl: './course-update-page.component.html',
})
export class CourseUpdatePageComponent implements OnInit {
  public course: ICourse;
  private course$: Observable<ICourseState>;
  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private loadingService: LoadingService,
    private router: Router,
    private store: Store<{ course: ICourseState }>,
  ) { }

  public saveAction: (course: ICourse) => void = (course: ICourse): void => {
    this.loadingService.show();
    this.store.dispatch(new CourseUpdateAction({ course }));
    this.router.navigate(['courses']);
  }

  public cancelAction: () => void = () => {
    this.router.navigate(['courses']);
  }

  public ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.loadingService.show();
      this.store.dispatch(new CourseLoadAction({ id }));
      this.course$ = this.store.pipe(select('course'));
      this.subscription = this.course$.subscribe((state: ICourseState) => {
        const { course, loading } = state;
        this.course = course;
        loading || this.loadingService.hide();
        this.cdr.detectChanges();
      });
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
