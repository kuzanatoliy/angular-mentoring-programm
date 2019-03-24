import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICourse } from '../../../interfaces/ICourse';

@Component({
  selector: 'app-course-form',
  styleUrls: [ './course-form.component.sass' ],
  templateUrl: './course-form.component.html',
})
export class CourseFormComponent implements OnInit {
  public courseData = new FormGroup({
    creationDate: new FormControl(new Date(), [Validators.required ]),
    description: new FormControl('', [ Validators.required, Validators.maxLength(500) ]),
    duration: new FormControl(0, [ Validators.required ]),
    title: new FormControl('', [ Validators.required, Validators.maxLength(50) ]),
  });

  get creationDate(): AbstractControl {
    return this.courseData.get('creationDate');
  }

  get description(): AbstractControl {
    return this.courseData.get('description');
  }

  get duration(): AbstractControl {
    return this.courseData.get('duration');
  }

  get title(): AbstractControl {
    return this.courseData.get('title');
  }

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
