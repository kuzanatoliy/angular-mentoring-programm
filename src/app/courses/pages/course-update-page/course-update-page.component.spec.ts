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

import { CourseCreatePageComponent } from '../course-create-page/course-create-page.component';
import { CoursesPageComponent } from '../courses-page/courses-page.component';
import { CourseUpdatePageComponent } from './course-update-page.component';

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

describe('CourseUpdatePageComponent', () => {
  let component: CourseUpdatePageComponent;
  let fixture: ComponentFixture<CourseUpdatePageComponent>;

  const initialState: ICourseState = {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseUpdatePageComponent,
        CourseCreatePageComponent,
        CoursesPageComponent,
        CourseFormComponent,
        CourseItemComponent,
        CoursesComponent,
        FreshCourseDirective,
        OrderByCreationDatePipe,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
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
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
