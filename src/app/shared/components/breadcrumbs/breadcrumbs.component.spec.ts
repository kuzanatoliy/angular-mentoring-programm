import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BreadcrumbsComponent } from './breadcrumbs.component';

import {
  CourseCreatePageComponent,
  CoursesPageComponent,
  CourseUpdatePageComponent,
} from '../../../courses/pages';

import {
  CourseFormComponent,
  CourseItemComponent,
  CoursesComponent,
} from '../../../courses/components';

import { FreshCourseDirective } from '../../../courses/directives/fresh-course.directive';

import { OrderByCreationDatePipe } from '../../../courses/pipes';

import { SearchComponent } from '../../../search/search/search.component';

import { AuthorListControlComponent } from '../author-list-control/author-list-control.component';
import { DateInputComponent } from '../date-input/date-input.component';
import { DurationInputComponent } from '../duration-input/duration-input.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { UserControlComponent } from '../user-control/user-control.component';

import { DatePipe, DurationPipe } from '../../pipes';

import { coursesRoute } from '../../../app-routing.module';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BreadcrumbsComponent,
        CourseCreatePageComponent,
        CoursesPageComponent,
        CourseUpdatePageComponent,
        CourseFormComponent,
        CourseItemComponent,
        CoursesComponent,
        FreshCourseDirective,
        OrderByCreationDatePipe,
        SearchComponent,
        AuthorListControlComponent,
        DateInputComponent,
        DurationInputComponent,
        ModalWindowComponent,
        UserControlComponent,
        DatePipe,
        DurationPipe,
      ],
      imports: [
        RouterTestingModule.withRoutes([ coursesRoute ]),
        FormsModule,
        FontAwesomeModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
