import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { ICourse } from '../../../interfaces/ICourse';

@Component({
  selector: 'app-course-item',
  styleUrls: [ './course-item.component.sass' ],
  templateUrl: './course-item.component.html',
})
export class CourseItemComponent implements OnInit {
  @Input() public course: ICourse;
  @Input() public updateAction: (id: string) => void;
  @Input() public removeAction: (id: string) => void;

  public STAR_ICON: object = faStar;

  public isActiveRemoveWindow: boolean = false;

  constructor() { }

  public ngOnInit(): void { }

  public cancelRemoveHandler: () => void = () => {
    this.isActiveRemoveWindow = false;
  }

  public removeHandler: () => void = () => {
    this.removeAction && this.removeAction(this.course.id);
    this.cancelRemoveHandler();
  }

  public showRemoveWindow(): void {
    this.isActiveRemoveWindow = true;
  }

  public updateHandler(): void {
    this.updateAction && this.updateAction(this.course.id);
  }
}
