import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CoursesPageComponent } from '../courses-page/courses-page.component';
import { FreshCourseDirective } from '../directives/fresh-course.directive';
import {
  CourseDurationPipe,
  CourseCreationDatePipe, 
  OrderByCreationDatePipe
} from '../pipes';
import { SearchModule } from '../../search/search.module';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../../auth/auth.module';
import { ICourse } from 'src/app/interfaces/ICourse';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  const COURSES_MOCK: Array<ICourse> = [{
    id: '1',
    title: 'Courses 1',
    duration: 80,
    creationDate: new Date('12.24.2018'),
    description: 'Description of courses 1',
    topRated: true
  }, {
    id: '2',
    title: 'Courses 2',
    duration: 80,
    creationDate: new Date('04.25.2018'),
    description: 'Description of courses 2',
    topRated: true
  }, {
    id: '3',
    title: 'Courses 3',
    duration: 80,
    creationDate: new Date('04.25.2018'),
    description: 'Description of courses 3',
    topRated: false
  }, {
    id: '4',
    title: 'Courses 4',
    duration: 80,
    creationDate: new Date('04.12.2018'),
    description: 'Description of courses 4',
    topRated: false
  }, {
    id: '5',
    title: 'Courses 5',
    duration: 80,
    creationDate: new Date('04.12.2018'),
    description: 'Description of courses 5',
    topRated: false
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        CourseItemComponent,
        CoursesPageComponent,
        FreshCourseDirective,
        CourseDurationPipe,
        CourseCreationDatePipe, 
        OrderByCreationDatePipe
      ], imports: [
        FontAwesomeModule,
        SharedModule,
        SearchModule,
        AuthModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
