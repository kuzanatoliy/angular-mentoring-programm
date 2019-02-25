import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../../search/services/search.service';
import { CoursesService } from '../../services/courses.service';

import { ICourse } from '../../../interfaces/ICourse';
import { IListener, ListenerCallback } from '../../../interfaces/IListenable';

@Component({
  selector: 'app-courses',
  styleUrls: [ './courses.component.sass' ],
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit, IListener {
  public courses: Array<ICourse>;
  public loading: boolean = false;

  private page: number;
  private count: number = 10;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private searchService: SearchService,
  ) { }

  public removeCourseHandler: (id: string) => void = (id: string): void => {
    this.coursesService.removeCourse(id)
      .then((): void => {
        this.page = 1;
        this.loading = true;
      })
      .then((): Promise<Array<ICourse>> => this.coursesService.getCourseList())
      .then((courses: Array<ICourse>): void => {
          this.courses = courses;
          this.loading = false;
      });
  }

  public updateCourseHandler: (id: string) => void = (id: string) => {
    this.router.navigate([`courses/${ id }`]);
  }

  public ngOnInit(): void {
    this.searchService.subscribe(this.listenCallback);
    this.loading = true;
    this.page = 1;
    this.coursesService.getCourseList(this.page, this.count, this.searchService.getValue())
      .then((courses: Array<ICourse>): void => {
        this.courses = courses;
        this.loading = false;
      });
  }

  public loadMoreHandler(): void {
    this.page++;
    this.loading = true;
    this.coursesService.getCourseList(this.page, this.count, this.searchService.getValue())
      .then((courses: Array<ICourse>): void => {
        this.courses = this.courses.concat(courses);
        this.loading = false;
      });
  }

  public ngOnDestroy() {
    this.searchService.unsubscribe(this.listenCallback);
  }

  public listenCallback: ListenerCallback = (str: string): void => {
    this.page = 1;
    this.loading = true;
    this.coursesService.getCourseList(this.page, this.count, str)
      .then((courses: Array<ICourse>): void => {
        this.courses = courses;
        this.loading = false;
      });
  }
}
