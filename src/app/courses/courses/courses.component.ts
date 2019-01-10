import { Component, OnInit } from '@angular/core';

import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { CoursesService } from '../services/courses.service';
import { SearchService } from '../../search/services/search.service';
import { ICourse } from 'src/app/interfaces/ICourse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {
  private searchFilter: SearchFilterPipe;
  
  private COURSES: Array<ICourse>;
  public courses: Array<ICourse>;
  public loading: boolean = false;

  constructor(
    private searchService: SearchService,
    private coursesService: CoursesService
  ) {
    this.courses = [];
    this.searchFilter = new SearchFilterPipe(searchService);
    this.loading = true;
    this.coursesService.getCourseList()
      .then(courses => this.COURSES = courses)
      .then(() => this.loading = false);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    this.courses = this.searchFilter.transform(this.COURSES);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  updateCourseHandler(id) {
    console.log(`updateCourseHandler ${id}`);
  }

  removeCourseHandler(id) {
    console.log(`removeCourseHandler ${id}`);
  }
}
