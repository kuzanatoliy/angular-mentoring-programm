import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CourseCreatePageComponent } from './course-create-page.component';

import { CourseFormComponent } from '../../components';

import {
  AuthorListControlComponent,
  DateInputComponent,
  DurationInputComponent,
  UserControlComponent,
} from '../../../shared/components';

import { DurationPipe } from '../../../shared/pipes';

describe('CourseCreatePageComponent', () => {
  let component: CourseCreatePageComponent;
  let fixture: ComponentFixture<CourseCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseCreatePageComponent,
        AuthorListControlComponent,
        DateInputComponent,
        DurationInputComponent,
        CourseFormComponent,
        UserControlComponent,
        DurationPipe,
      ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
