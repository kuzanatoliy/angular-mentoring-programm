import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemPageComponent } from './course-item-page.component';

describe('CourseItemPageComponent', () => {
  let component: CourseItemPageComponent;
  let fixture: ComponentFixture<CourseItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemPageComponent ]
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
