import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from '../../../interfaces/ICourse';

@Component({
  selector: 'app-course-form',
  styleUrls: [ './course-form.component.sass' ],
  templateUrl: './course-form.component.html',
})
export class CourseFormComponent implements OnInit {
  private static DEFAULT_COURSE: ICourse = {
    authors: [],
    creationDate: new Date(),
    description: '',
    duration: 0,
    id: '1',
    title: '',
    topRated: false,
  };

  @Input() public course: ICourse = CourseFormComponent.DEFAULT_COURSE;
  @Input() public saveAction?: (course: ICourse) => void;
  @Input() public cancelAction?: () => void;

  constructor() { }

  public durationChangeHandler: (value: number) => void = (value: number) => {
    this.course.duration = value;
  }

  public dateChangeHandler: (value: Date) => void = (value: Date) => {
    this.course.creationDate = value;
  }

  public ngOnInit(): void {}

  public saveHandler(): void {
    this.saveAction && this.saveAction(this.course);
  }

  public cancelHandler(): void {
    this.cancelAction && this.cancelAction();
  }

}
