import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

  public STAR_ICON: Object = faStar;

  constructor() {}

  ngOnInit() {
  }

  updateHandler() {
    return this.updateAction && this.updateAction(this.course.id);
  }

  removeHandler() {
    return this.removeAction && this.removeAction(this.course.id);
  }

}
