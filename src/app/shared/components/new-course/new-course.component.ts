import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course',
  styleUrls: [ './new-course.component.sass' ],
  templateUrl: './new-course.component.html',
})
export class NewCourseComponent implements OnInit {

  constructor() { }

  public addCourse(): void {
    console.log('Click add course');
  }

  public ngOnInit(): void { }

}
