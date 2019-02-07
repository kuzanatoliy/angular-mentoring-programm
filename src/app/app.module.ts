import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { ErrorsModule } from './errors/errors.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoursesModule,
    ErrorsModule,
    SharedModule,
  ],
  providers: [],
})
export class AppModule { }
