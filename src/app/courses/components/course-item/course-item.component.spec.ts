import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


import { AuthModule } from '../../../auth/auth.module';
import { SearchModule } from '../../../search/search.module';
import { SharedModule } from '../../../shared/shared.module';

import {
  CourseItemPageComponent,
  CoursesPageComponent
} from '../../pages';

import { CourseItemComponent } from './course-item.component';
import { CoursesComponent } from '../courses/courses.component';

import { FreshCourseDirective } from '../../directives/fresh-course.directive';

import {
  OrderByCreationDatePipe,
  SearchFilterPipe
} from '../../pipes';

import { DatePipe } from '../../../shared/pipes';

import { ICourse } from '../../../interfaces/ICourse';

describe('CourseItemComponent', () => {
  const COURSE_MOCK: ICourse = {
    id: '1',
    title: 'Courses 1',
    duration: 80,
    creationDate: new Date(),
    description: 'Description of courses 1',
    topRated: true
  }

  describe('Testing as component', () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          CourseItemComponent,
          CourseItemPageComponent,
          CoursesPageComponent,
          CourseItemComponent,
          CoursesComponent,
          FreshCourseDirective,
          OrderByCreationDatePipe,
          SearchFilterPipe
        ],
        imports: [
          AuthModule,
          SearchModule,
          SharedModule,
          FontAwesomeModule,
          FormsModule
        ]
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

  /* describe('Testing as class', () => {
    let courseItem: CourseItemComponent;

    beforeEach(() => {
      courseItem = new CourseItemComponent();
      courseItem.course = COURSE_MOCK;
    });

    it('updateHandler should return undefined', () => {
      expect(courseItem.updateAction).toBeUndefined();
      expect(courseItem.updateHandler()).toBeUndefined();
    });

    it('updateHandler should return some value', () => {
      const value = 'updateHandler';
      courseItem.updateAction = () => value;
      expect(courseItem.updateHandler()).toBe(value);
    });

    it('removeHandler should return undefined', () => {
      expect(courseItem.removeAction).toBeUndefined();
      expect(courseItem.removeHandler()).toBeUndefined();
    });
  }); */
});
