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

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud have five components of app-course-item component', () => {
    const itemsCount = fixture.nativeElement.querySelectorAll('app-course-item').length;
    expect(itemsCount).toBe(5);
  });
});
