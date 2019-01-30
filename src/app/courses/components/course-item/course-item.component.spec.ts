import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseItemComponent } from './course-item.component';

import { FreshCourseDirective } from '../../directives/fresh-course.directive';

import {
  DatePipe,
  DurationPipe,
} from '../../../shared/pipes';

import { ModalWindowComponent } from '../../../shared/components';

import { ICourse } from '../../../interfaces/ICourse';

describe('CourseItemComponent', () => {
  const COURSE_MOCK: ICourse = {
    authors: [{
      firstName: 'Igar',
      id: '1',
      lastName: 'Pupkin',
    }],
    creationDate: new Date(),
    description: 'Description of courses 1',
    duration: 80,
    id: '1',
    title: 'Courses 1',
    topRated: true,
  };

  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        ModalWindowComponent,
        FreshCourseDirective,
        DurationPipe,
      ],
      imports: [
        FontAwesomeModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = COURSE_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check course content title', () => {
    const title = fixture.nativeElement.querySelector('.course-content-title');
    expect(title.textContent).toContain(component.course.title.toUpperCase());
  });

  it('check course content duration', () => {
    const duration = fixture.nativeElement.querySelector('.course-content-duration');
    expect(duration.textContent).toContain('1h 20min');
  });

  it('check course content date', () => {
    const pipe = new DatePipe();
    const creationDate = fixture.nativeElement.querySelector('.course-content-date');
    expect(creationDate.textContent).toContain(pipe.transform(new Date()));
  });

  it('check course content description', () => {
    const description = fixture.nativeElement.querySelector('.course-content-description');
    expect(description.textContent).toContain(component.course.description);
  });
});
