import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { LoginPageComponent } from './login-page.component';

import { CoursesModule } from 'src/app/courses/courses.module';
import { ErrorsModule } from 'src/app/errors/errors.module';

import { routes } from 'src/app/app-routing.module';

import { userInfoReducer } from 'src/app/store/reducers/user-info.reducer';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [
        StoreModule.forRoot({
          userInfo: userInfoReducer,
        }),
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        CoursesModule,
        ErrorsModule,
        HttpClientTestingModule,
      ],
      providers: [ { provide: APP_BASE_HREF, useValue : '/' } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
