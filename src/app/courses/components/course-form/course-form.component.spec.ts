import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CourseFormComponent } from './course-form.component';

import {
  AuthorListControlComponent,
  DateInputComponent,
  DurationInputComponent,
  UserControlComponent,
} from '../../../shared/components';

import {
  DatePipe,
  DurationPipe,
} from '../../../shared/pipes';

import { ICourse } from '../../../interfaces/ICourse';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  const COURSE_MOCK_DATA: ICourse = {
    authors: [{
      firstName: 'Igar',
      id: '1',
      lastName: 'Pupkin',
    }],
    creationDate: new Date('12.24.2018'),
    description: 'Description of courses 1',
    duration: 80,
    id: '1',
    title: 'Courses 1',
    topRated: true,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseFormComponent,
        AuthorListControlComponent,
        DateInputComponent,
        DurationInputComponent,
        UserControlComponent,
        DurationPipe,
      ],
      imports: [
        FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should check default initial state', () => {
    it('should check title field', () => {
      const titleValue = fixture.nativeElement
        .querySelector('.course-form-title input')
        .getAttribute('ng-reflect-model');
      expect(titleValue).toBe('');
    });

    it('should check description field', () => {
      const descriptionValue = fixture.nativeElement
        .querySelector('.course-form-description textarea')
        .getAttribute('ng-reflect-model');
      expect(descriptionValue).toBe('');
    });

    it('should check duration field', () => {
      const durationValue = fixture.nativeElement
        .querySelector('.course-form-duration input')
        .getAttribute('ng-reflect-model');
      expect(durationValue).toBe('0');
    });

    it('should check date field', () => {
      const dateValue = fixture.nativeElement
        .querySelector('.course-form-date input')
        .getAttribute('ng-reflect-model');
      expect(dateValue).toBe(new DatePipe().transform(new Date()));
    });
  });

  describe('should check initial state', () => {
    let testCourseValue: ICourse;
    let testFlag: boolean;

    const testSaveAction: (course: ICourse) => void = (course) => {
      testCourseValue = course;
    };

    const testCancelAction: () => void = () => {
      testFlag = true;
    };

    beforeEach(() => {
      fixture = TestBed.createComponent(CourseFormComponent);
      component = fixture.componentInstance;
      component.newCourse = COURSE_MOCK_DATA;
      component.saveAction = testSaveAction;
      component.cancelAction = testCancelAction;
      fixture.detectChanges();
    });

    it('should check title field', () => {
      const titleValue = fixture.nativeElement
        .querySelector('.course-form-title input')
        .getAttribute('ng-reflect-model');
      expect(titleValue).toBe(COURSE_MOCK_DATA.title);
    });

    it('should check description field', () => {
      const descriptionValue = fixture.nativeElement
        .querySelector('.course-form-description textarea')
        .getAttribute('ng-reflect-model');
      expect(descriptionValue).toBe(COURSE_MOCK_DATA.description);
    });

    it('should check duration field', () => {
      const durationValue = fixture.nativeElement
        .querySelector('.course-form-duration input')
        .getAttribute('ng-reflect-model');
      expect(durationValue).toBe('' + COURSE_MOCK_DATA.duration);
    });

    it('should check date field', () => {
      const dateValue = fixture.nativeElement
        .querySelector('.course-form-date input')
        .getAttribute('ng-reflect-model');
      expect(dateValue).toBe(new DatePipe().transform(new Date(COURSE_MOCK_DATA.creationDate)));
    });

    it('should check save functionality', () => {
      component.saveHandler();
      expect(testCourseValue).toEqual(COURSE_MOCK_DATA);
    });

    it('should check cancel functionality', () => {
      component.cancelHandler();
      expect(testFlag).toBeTruthy();
    });
  });
});
