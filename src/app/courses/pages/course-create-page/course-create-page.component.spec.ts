import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthModule } from 'src/app/auth/auth.module';
import { ErrorsModule } from 'src/app/errors/errors.module';
import { SearchModule } from 'src/app/search/search.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CourseUpdatePageComponent } from '../course-update-page/course-update-page.component';
import { CoursesPageComponent } from '../courses-page/courses-page.component';
import { CourseCreatePageComponent } from './course-create-page.component';

import {
  CourseFormComponent,
  CourseItemComponent,
  CoursesComponent,
} from '../../components';

import { FreshCourseDirective } from '../../directives/fresh-course.directive';

import { OrderByCreationDatePipe } from '../../pipes';

import { routes } from 'src/app/app-routing.module';

import { Course } from 'src/app/models/Course';
import { ICourseState } from 'src/app/store/reducers/course.reducer';

describe('CourseCreatePageComponent', () => {
  let component: CourseCreatePageComponent;
  let fixture: ComponentFixture<CourseCreatePageComponent>;

  const initialState = {
    course: {
      course: Course.createCourse({
        authors: [],
        creationDate: new Date(),
        description: '',
        duration: 0,
        title: '',
        topRated: false,
      }),
      loading: false,
      error: false,
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseCreatePageComponent,
        CoursesPageComponent,
        CourseUpdatePageComponent,
        CourseFormComponent,
        CourseItemComponent,
        CoursesComponent,
        FreshCourseDirective,
        OrderByCreationDatePipe,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        FontAwesomeModule,
        FormsModule,
        AuthModule,
        ErrorsModule,
        SearchModule,
        SharedModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCreatePageComponent);
    component = fixture.componentInstance;
    component.course = CourseFormComponent.DEFAULT_COURSE;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
