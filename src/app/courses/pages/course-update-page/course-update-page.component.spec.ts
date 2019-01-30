import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';

import { AuthModule } from '../../../auth/auth.module';
import { SearchModule } from '../../../search/search.module';
import { SharedModule } from '../../../shared/shared.module';

import { CourseCreatePageComponent } from '../course-create-page/course-create-page.component';
import { CoursesPageComponent } from '../courses-page/courses-page.component';
import { CourseUpdatePageComponent } from './course-update-page.component';

import {
  CourseFormComponent,
  CourseItemComponent,
  CoursesComponent,
} from '../../components';

import { FreshCourseDirective } from '../../directives/fresh-course.directive';

import {
  OrderByCreationDatePipe,
  SearchFilterPipe,
} from '../../pipes';

import { routes } from '../../../app-routing.module';

describe('CourseUpdatePageComponent', () => {
  let component: CourseUpdatePageComponent;
  let fixture: ComponentFixture<CourseUpdatePageComponent>;

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
        SearchFilterPipe,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        AuthModule,
        SearchModule,
        SharedModule,
        FontAwesomeModule,
        FormsModule,
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
