import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FreshCourseDirective } from './fresh-course.directive';
import { CoursesPageComponent } from '../courses-page/courses-page.component';
import { CoursesComponent } from '../courses/courses.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import {
  CourseDurationPipe,
  CourseCreationDatePipe,
  OrderByCreationDatePipe,
  SearchFilterPipe
} from '../pipes';
import { SearchModule } from '../../search/search.module';
import { AuthModule } from '../../auth/auth.module';
import { SharedModule } from '../../shared/shared.module';
import { ICourse } from '../../interfaces/ICourse';

describe('FreshCourseDirective', () => {
  const COURSE_MOCK: ICourse = {
    id: 1,
    title: "Courses 1",
    duration: 80,
    creationDate: new Date("04.04.2015"),
    description: "Description of courses 1",
    topRated: true
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        CoursesPageComponent,
        CoursesComponent,
        FreshCourseDirective,
        CourseDurationPipe,
        CourseCreationDatePipe,
        OrderByCreationDatePipe,
        SearchFilterPipe
      ],
      imports: [
        FontAwesomeModule,
        SharedModule,
        AuthModule,
        SearchModule
      ]
    })
    .compileComponents();
  }));
  
  it('should check style for new date', () => {
    const fixture: ComponentFixture<CourseItemComponent> = TestBed.createComponent(CourseItemComponent);
    let component: CourseItemComponent = fixture.componentInstance;
    component.course = {
      ...COURSE_MOCK,
      creationDate: new Date()
    }
    fixture.detectChanges();
    const directiveComponent = fixture.debugElement.query(By.directive(FreshCourseDirective));
    const classList = directiveComponent.nativeElement.classList;
    expect(classList.contains('new')).toBe(true);
  });

  it('should check style for date', () => {
    const fixture: ComponentFixture<CourseItemComponent> = TestBed.createComponent(CourseItemComponent);
    let component: CourseItemComponent = fixture.componentInstance;
    component.course = { ...COURSE_MOCK };
    fixture.detectChanges();
    const directiveComponent = fixture.debugElement.query(By.directive(FreshCourseDirective));
    const classList = directiveComponent.nativeElement.classList;
    expect(classList.contains('new')).toBe(false);
  });
});
