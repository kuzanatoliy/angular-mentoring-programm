import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchFilterPipe } from '../../pipes/search-filter.pipe';

import { SearchService } from '../../../search/services/search.service';
import { CoursesService } from '../../services/courses.service';

import { ICourse } from '../../../interfaces/ICourse';

@Component({
  selector: 'app-courses',
  styleUrls: [ './courses.component.sass' ],
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  public courses: Array<ICourse>;
  public loading: boolean = false;
  private COURSES: Array<ICourse>;

  private page: number;

  private searchFilter: SearchFilterPipe;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private searchService: SearchService,
  ) {
    this.searchFilter = new SearchFilterPipe(searchService);
    this.COURSES = [];
  }

  public removeCourseHandler: (id: string) => void = (id: string): void => {
    this.coursesService.removeCourse(id)
      .then((): void => {
        this.page = 1;
        this.loading = true;
      })
      .then((): Promise<Array<ICourse>> => this.coursesService.getCourseList())
      .then((courses: Array<ICourse>): void => {
          this.COURSES = courses;
          this.loading = false;
      });
  }

  public updateCourseHandler: (id: string) => void = (id: string) => {
    this.router.navigate([`courses/${ id }`]);
  }

  public ngOnInit() {
    this.loading = true;
    this.page = 1;
    this.coursesService.getCourseList(this.page)
      .then((courses: Array<ICourse>): void => {
        this.COURSES = courses;
        this.loading = false;
      });
  }

  public ngDoCheck() {
    this.courses = this.searchFilter.transform(this.COURSES);
  }

  public loadMoreHandler() {
    this.page++;
    this.loading = true;
    this.coursesService.getCourseList(this.page)
      .then((courses: Array<ICourse>): void => {
        this.COURSES = this.COURSES.concat(courses);
        this.loading = false;
      });
  }
}
