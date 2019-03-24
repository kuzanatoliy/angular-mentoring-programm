import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICourse } from '../../../interfaces/ICourse';

@Component({
  selector: 'app-course-form',
  styleUrls: [ './course-form.component.sass' ],
  templateUrl: './course-form.component.html',
})
export class CourseFormComponent implements OnInit {
  public courseData = new FormGroup({
    creationDate: new FormControl(new Date(), [ Validators.required ]),
    description: new FormControl('', [ Validators.required, Validators.minLength(500) ]),
    duration: new FormControl(0, [ Validators.required ]),
    title: new FormControl('', [ Validators.required, Validators.minLength(50) ]),
  });

  @Input() public set newCourse(course) {
    this.course = course || {};
    if (course) {
      const { creationDate, description, duration, title } = course;
      this.courseData.setValue({
        creationDate,
        description,
        duration,
        title,
      });
    }
  }

  @Input() public saveAction?: (course: ICourse) => void;
  @Input() public cancelAction?: () => void;

  private course: ICourse | {} = {};

  constructor() {}

  public ngOnInit(): void {}

  public saveHandler(): void {
    this.saveAction && this.saveAction({
      ...this.course,
      ...this.courseData.value,
    });
  }

  public cancelHandler(): void {
    this.cancelAction && this.cancelAction();
  }
}
