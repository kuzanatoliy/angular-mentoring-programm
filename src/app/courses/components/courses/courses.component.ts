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
  public courses: Array<ICourse> = [];
  public loading: boolean = false;
  private COURSES: Array<ICourse>;

  private searchFilter: SearchFilterPipe;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private searchService: SearchService,
  ) {
    this.searchFilter = new SearchFilterPipe(searchService);
  }

  public removeCourseHandler: (id: string) => void = (id: string): void => {
    this.coursesService.removeCourse(id)
      .then((): boolean => this.loading = true)
      .then((): Promise<Array<ICourse>> => this.coursesService.getCourseList())
      .then((courses: Array<ICourse>): Array<ICourse> => this.COURSES = courses)
      .then((): boolean => this.loading = false);
  }

  public ngOnInit() {
    this.loading = true;
    this.coursesService.getCourseList()
      .then((courses: Array<ICourse>): Array<ICourse> => this.COURSES = courses)
      .then((): boolean => this.loading = false);
  }

  public ngDoCheck() {
    this.courses = this.searchFilter.transform(this.COURSES);
  }

  public updateCourseHandler(id: number) {
    this.router.navigate([`courses/${ id }`]);    
  }
}
