import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/login-page/login-page.component';
import {
  CourseCreatePageComponent,
  CoursesPageComponent,
  CourseUpdatePageComponent,
} from './courses/pages';
import { ErrorPageComponent } from './errors/error-page/error-page.component';

export const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'courses/new', component: CourseCreatePageComponent },
  { path: 'courses/:id', component: CourseUpdatePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**',   component: ErrorPageComponent, pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
