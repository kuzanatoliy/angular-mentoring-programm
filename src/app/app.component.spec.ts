import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { ErrorsModule } from './errors/errors.module';
import { LoadingModule } from './loading/loading.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';

import { authorListReducer, courseListReducer, courseReducer, userInfoReducer } from './store/reducers';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        StoreModule.forRoot({
          authorList: authorListReducer,
          course: courseReducer,
          courseList: courseListReducer,
          userInfo: userInfoReducer,
        }),
        AuthModule,
        RouterTestingModule,
        CoursesModule,
        ErrorsModule,
        LoadingModule,
        SharedModule,
        SearchModule,
        HttpClientTestingModule,
      ],
      providers: [ { provide: APP_BASE_HREF, useValue : '/' } ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
