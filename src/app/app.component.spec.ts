import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { ErrorsModule } from './errors/errors.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        AuthModule,
        RouterTestingModule,
        CoursesModule,
        ErrorsModule,
        SharedModule,
        SearchModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
