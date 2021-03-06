import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CoursesService, LoadingService, SearchService } from 'src/app/services';

import { ICourse } from 'src/app/interfaces/ICourse';
import { IListener, ListenerCallback } from 'src/app/interfaces/IListenable';
import { ICourseListState } from 'src/app/store/reducers/course-list.reducer';

import {
  CourseListLoadingStartAction,
  CourseListLoadMoreAction,
} from 'src/app/store/actions/course-list.actions';

@Component({
  selector: 'app-courses',
  styleUrls: [ './courses.component.sass' ],
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit, IListener {
  public courses: Array<ICourse>;
  private courseList$: Observable<ICourseListState>;

  private page: number;
  private count: number = 10;

  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private router: Router,
    private searchService: SearchService,
    private store: Store<{ courseList: ICourseListState }>,
  ) {
    this.courseList$ = this.store.pipe(select('courseList'));
    this.courseList$.subscribe((courseList: ICourseListState) => {
      const { items, loading } = courseList;
      this.courses = items;
      loading || this.loadingService.hide();
    });
  }

  public removeCourseHandler: (id: string) => void = (id: string): void => {
    this.loadingService.show();
    this.coursesService.removeCourse(id).toPromise()
      .then((): void => {
        this.page = 1;
        this.loadingFacade(this.searchService.value);
      });
  }

  public updateCourseHandler: (id: string) => void = (id: string) => {
    this.router.navigate([`courses/${ id }`]);
  }

  public ngOnInit(): void {
    this.searchService.subscribe(this.listenCallback);
    this.loadingFacade(this.searchService.value);
  }

  public loadMoreHandler(): void {
    this.loadMoreFacade();
  }

  public ngOnDestroy() {
    this.searchService.unsubscribe(this.listenCallback);
  }

  public listenCallback: ListenerCallback = (str: string): void => {
    this.loadingFacade(str);
  }

  private loadingFacade(query: string): void {
    this.page = 1;
    this.loadingService.show();
    this.store.dispatch(new CourseListLoadingStartAction({
      count: this.count,
      page: this.page,
      query,
    }));
  }

  private loadMoreFacade(): void {
    this.page++;
    this.loadingService.show();
    this.store.dispatch(new CourseListLoadMoreAction({
      count: this.count,
      page: this.page,
      query: this.searchService.value,
    }));
  }
}
