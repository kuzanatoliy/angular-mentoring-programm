import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthModule } from 'src/app/auth/auth.module';
import { ErrorsModule } from 'src/app/errors/errors.module';
import { SearchModule } from 'src/app/search/search.module';
import { SharedModule } from 'src/app/shared/shared.module';

import {
  CourseCreatePageComponent,
  CoursesPageComponent,
  CourseUpdatePageComponent,
} from '../../pages';

import { CourseFormComponent } from '../course-form/course-form.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CoursesComponent } from './courses.component';

import { FreshCourseDirective } from '../../directives/fresh-course.directive';

import { OrderByCreationDatePipe } from '../../pipes';

import { ICourse } from 'src/app/interfaces/ICourse';
import { Course } from 'src/app/models/Course';

import { LoadingService } from 'src/app/services/loading.service';

import { ICoursListState } from 'src/app/store/reducers/course-list.reducer';

class MockLoadingService {

  constructor() { }

  public show(): void { }

  public hide(): void { }

}

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  const initialState: ICoursListState = {
    items: [],
    loading: false,
    error: false,
  }

  const COURSES_MOCK: Array<ICourse> = Course.createCourseList([{
    authors: [{
      firstName: 'Igar',
      id: '1',
      lastName: 'Pupkin',
    }],
    creationDate: new Date('12.24.2018'),
    description: 'Description of courses 1',
    duration: 80,
    id: '1',
    title: 'Courses 1',
    topRated: true,
  }, {
    authors: [{
      firstName: 'Igar',
      id: '1',
      lastName: 'Pupkin',
    }],
    creationDate: new Date('04.25.2018'),
    description: 'Description of courses 2',
    duration: 80,
    id: '2',
    title: 'Courses 2',
    topRated: true,
  }, {
    authors: [{
      firstName: 'Igar',
      id: '1',
      lastName: 'Pupkin',
    }],
    creationDate: new Date('04.25.2018'),
    description: 'Description of courses 3',
    duration: 80,
    id: '3',
    title: 'Courses 3',
    topRated: false,
  }, {
    authors: [{
      firstName: 'Igar',
      id: '1',
      lastName: 'Pupkin',
    }],
    creationDate: new Date('04.12.2018'),
    description: 'Description of courses 4',
    duration: 80,
    id: '4',
    title: 'Courses 4',
    topRated: false,
  }, {
    authors: [{
      firstName: 'Igar',
      id: '1',
      lastName: 'Pupkin',
    }],
    creationDate: new Date('04.12.2018'),
    description: 'Description of courses 5',
    duration: 80,
    id: '5',
    title: 'Courses 5',
    topRated: false,
  }]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        CourseCreatePageComponent,
        CourseUpdatePageComponent,
        CoursesPageComponent,
        CourseFormComponent,
        CourseItemComponent,
        FreshCourseDirective,
        OrderByCreationDatePipe,
      ],
      imports: [
        AuthModule,
        ErrorsModule,
        SearchModule,
        SharedModule,
        FontAwesomeModule,
        FormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: LoadingService, useClass: MockLoadingService },
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check course content description', () => {
    component.courses = COURSES_MOCK;
    fixture.detectChanges();
    const count = fixture.nativeElement.querySelectorAll('app-course-item').length;
    expect(count).toBe(COURSES_MOCK.length);
  });
});
