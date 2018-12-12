import { Component, OnInit, Input } from '@angular/core';

import { ICourse } from '../../interfaces/ICourse';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass']
})
export class CourseItemComponent implements OnInit {
  @Input() course: ICourse;
  @Input() updateAction: Function;
  @Input() removeAction: Function;

  UPDATE_BUTTON_NAME = 'Edit'
  REMOVE_BUTTON_NAME = 'Delete'

  constructor() {}

  ngOnInit() {
  }

  updateHandler() {
    this.updateAction && this.updateAction(this.course.id);
  }

  removeHandler() {
    this.removeAction && this.removeAction(this.course.id);
  }

}
