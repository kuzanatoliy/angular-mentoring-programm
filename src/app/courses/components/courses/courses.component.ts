import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  private searchFilter: SearchFilterPipe;

  constructor(
    private cdr: ChangeDetectorRef,
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
    this.coursesService.getCourseList()
      .then((courses: Array<ICourse>): void => {
        this.COURSES = courses;
        this.loading = false;
      });
  }

  public ngDoCheck() {
    this.courses = this.searchFilter.transform(this.COURSES);
  }
}
