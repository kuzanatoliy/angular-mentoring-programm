import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesComponent } from '../courses/courses.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { FreshCourseDirective } from '../directives/fresh-course.directive';
import { SearchModule } from '../../search/search.module';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../../auth/auth.module';
import {
  CourseDurationPipe,
  CourseCreationDatePipe, 
  OrderByCreationDatePipe,
  SearchFilterPipe
} from '../pipes';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        CoursesComponent,
        CourseItemComponent,
        FreshCourseDirective,
        CourseDurationPipe,
        CourseCreationDatePipe, 
        OrderByCreationDatePipe,
        SearchFilterPipe
      ],
      imports: [
        FontAwesomeModule,
        SearchModule,
        SharedModule,
        AuthModule
      ]
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
