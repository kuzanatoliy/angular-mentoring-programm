import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';

import { AuthModule } from '../../../auth/auth.module';
import { SearchModule } from '../../../search/search.module';
import { SharedModule } from '../../../shared/shared.module';

import { CourseCreatePageComponent } from '../course-create-page/course-create-page.component';
import { CoursesPageComponent } from '../courses-page/courses-page.component';
import { CourseItemPageComponent } from './course-item-page.component';

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

describe('CourseItemPageComponent', () => {
  let component: CourseItemPageComponent;
  let fixture: ComponentFixture<CourseItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemPageComponent,
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
    fixture = TestBed.createComponent(CourseItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
