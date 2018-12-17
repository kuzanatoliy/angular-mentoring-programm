import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { ICourse } from '../../interfaces/ICourse';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  const COURSE_MOCK: ICourse = {
    id: 1,
    title: "Courses 1",
    duration: 80,
    creationDate: new Date(),
    description: "Description of courses 1"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
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
    expect(title.textContent).toContain(component.course.title);
  });

  it('check course content duration', () => {
    const duration = fixture.nativeElement.querySelector('.course-content-duration');
    expect(duration.textContent).toContain(component.course.duration);
  });

  it('check course content date', () => {
    const creationDate = fixture.nativeElement.querySelector('.course-content-date');
    expect(creationDate.textContent).toContain(component.course.creationDate);
  });

  it('check course content description', () => {
    const description = fixture.nativeElement.querySelector('.course-content-description');
    expect(description.textContent).toContain(component.course.description);
  });
});
