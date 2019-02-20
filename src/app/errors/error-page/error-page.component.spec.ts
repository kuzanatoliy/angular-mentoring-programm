import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ErrorPageComponent } from './error-page.component';

import { AuthModule } from '../../auth/auth.module';
import { CoursesModule } from '../../courses/courses.module';
import { SearchModule } from '../../search/search.module';
import { SharedModule } from '../../shared/shared.module';

import { ErrorMessageComponent } from '../error-message/error-message.component';

import { routes } from '../../app-routing.module';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorPageComponent,
        ErrorMessageComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        AuthModule,
        CoursesModule,
        SearchModule,
        SharedModule,
        FormsModule,
      ],
      providers: [ { provide: APP_BASE_HREF, useValue : '/' } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
