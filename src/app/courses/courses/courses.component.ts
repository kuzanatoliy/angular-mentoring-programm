import { Component, OnInit } from '@angular/core';

import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { SearchService } from '../../search/services/search.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {
  private COURSES = [{
    id: 1,
    title: "Courses 1",
    duration: 80,
    creationDate: new Date("12.24.2018"),
    description: "Description of courses 1",
    topRated: true
  }, {
    id: 2,
    title: "Courses 2",
    duration: 80,
    creationDate: new Date("04.25.2018"),
    description: "Description of courses 2",
    topRated: true
  }, {
    id: 3,
    title: "Courses 3",
    duration: 80,
    creationDate: new Date("04.25.2018"),
    description: "Description of courses 3",
    topRated: false
  }, {
    id: 4,
    title: "Courses 4",
    duration: 80,
    creationDate: new Date("04.12.2018"),
    description: "Description of courses 4",
    topRated: false
  }, {
    id: 5,
    title: "Courses 5",
    duration: 80,
    creationDate: new Date("04.12.2018"),
    description: "Description of courses 5",
    topRated: false
  }];
  private searchFilter: SearchFilterPipe;
  
  public courses;

  constructor(private searchService: SearchService) {
    this.courses = [];
    this.searchFilter = new SearchFilterPipe(searchService);
  }

  isCourses() {
    return !!this.courses;
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    this.courses = this.searchFilter.transform(this.COURSES);
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
