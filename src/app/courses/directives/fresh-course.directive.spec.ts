import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FreshCourseDirective } from './fresh-course.directive';

import { CourseItemComponent } from '../components';

import {
  DurationPipe,
} from 'src/app/shared/pipes';

import { ModalWindowComponent } from 'src/app/shared/components';

import { ICourse } from 'src/app/interfaces/ICourse';

describe('FreshCourseDirective', () => {
  const COURSE_MOCK: ICourse = {
    authors: [{
      firstName: 'Igar',
      id: '1',
      lastName: 'Pupkin',
    }],
    creationDate: new Date('04.04.2015'),
    description: 'Description of courses 1',
    duration: 80,
    id: '1',
    title: 'Courses 1',
    topRated: true,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        ModalWindowComponent,
        FreshCourseDirective,
        DurationPipe,
      ],
      imports: [ FontAwesomeModule ],
    })
    .compileComponents();
  }));

  it('should check style for new date', () => {
    const fixture: ComponentFixture<CourseItemComponent> = TestBed.createComponent(CourseItemComponent);
    const component: CourseItemComponent = fixture.componentInstance;
    component.course = {
      ...COURSE_MOCK,
      creationDate: new Date(),
    };
    fixture.detectChanges();
    const directiveComponent = fixture.debugElement.query(By.directive(FreshCourseDirective));
    const classList = directiveComponent.nativeElement.classList;
    expect(classList.contains('new')).toBe(true);
  });

  it('should check style for date', () => {
    const fixture: ComponentFixture<CourseItemComponent> = TestBed.createComponent(CourseItemComponent);
    const component: CourseItemComponent = fixture.componentInstance;
    component.course = { ...COURSE_MOCK };
    fixture.detectChanges();
    const directiveComponent = fixture.debugElement.query(By.directive(FreshCourseDirective));
    const classList = directiveComponent.nativeElement.classList;
    expect(classList.contains('new')).toBe(false);
  });
});
