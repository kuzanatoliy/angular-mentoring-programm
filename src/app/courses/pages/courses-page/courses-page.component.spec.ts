import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthModule } from '../../../auth/auth.module';
import { SearchModule } from '../../../search/search.module';
import { SharedModule } from '../../../shared/shared.module';

import { CourseCreatePageComponent } from '../course-create-page/course-create-page.component';
import { CourseUpdatePageComponent } from '../course-update-page/course-update-page.component';
import { CoursesPageComponent } from './courses-page.component';

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

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        CourseCreatePageComponent,
        CourseUpdatePageComponent,
        CourseFormComponent,
        CourseItemComponent,
        CoursesComponent,
        FreshCourseDirective,
        OrderByCreationDatePipe,
        SearchFilterPipe,
      ],
      imports: [
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
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find app-breadcrumbs component', () => {
    const breadcrupmbsComponent = fixture.nativeElement.querySelector('app-breadcrumbs');
    expect(breadcrupmbsComponent).not.toBeNull();
  });

  it('should find app-search component', () => {
    const searchComponent = fixture.nativeElement.querySelector('app-search');
    expect(searchComponent).not.toBeNull();
  });

  it('should find app-new-course component', () => {
    const newCourseComponent = fixture.nativeElement.querySelector('app-new-course');
    expect(newCourseComponent).not.toBeNull();
  });

  it('should find app-breadcrumbs component', () => {
    const coursesComponent = fixture.nativeElement.querySelector('app-courses');
    expect(coursesComponent).not.toBeNull();
  });
});
