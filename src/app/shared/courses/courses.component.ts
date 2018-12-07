import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {
  public courses;

  constructor() {
    this.courses = [];
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.courses = [{
      "title": "Courses 1",
      "duration": 80,
      "date": "04.12.2018",
      "description": "Description of courses 1"
    }, {
      "title": "Courses 2",
      "duration": 80,
      "date": "04.12.2018",
      "description": "Description of courses 2"
    }, {
      "title": "Courses 3",
      "duration": 80,
      "date": "04.12.2018",
      "description": "Description of courses 3"
    }, {
      "title": "Courses 4",
      "duration": 80,
      "date": "04.12.2018",
      "description": "Description of courses 4"
    }, {
      "title": "Courses 5",
      "duration": 80,
      "date": "04.12.2018",
      "description": "Description of courses 5"
    }];
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

  updateCourseHandler(index) {
    console.log(`updateCourseHandler ${index}`);
  }

  removeCourseHandler(index) {
    console.log(`removeCourseHandler ${index}`);
  }
}
