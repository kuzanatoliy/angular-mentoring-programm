import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { ErrorsModule } from './errors/errors.module';
import { LoadingModule } from './loading/loading.module';
import { SharedModule } from './shared/shared.module';

import { TokenInterceptor } from './shared/interceptors/token.interseptor';

import { AuthorListEffects, CourseEffects, CourseListEffects, UserInfoEffects } from './store/effects';
import { authorListReducer, courseListReducer, courseReducer, userInfoReducer } from './store/reducers';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    AuthModule,
    BrowserModule,
    EffectsModule.forRoot([
      AuthorListEffects,
      CourseListEffects,
      CourseEffects,
      UserInfoEffects,
    ]),
    StoreModule.forRoot({
      authorList: authorListReducer,
      course: courseReducer,
      courseList: courseListReducer,
      userInfo: userInfoReducer,
    }),
    HttpClientModule,
    AppRoutingModule,
    CoursesModule,
    ErrorsModule,
    LoadingModule,
    SharedModule,
  ],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
    },
  ],
})
export class AppModule { }
