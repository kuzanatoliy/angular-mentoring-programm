import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/login-page/login-page.component';
import {
  CourseCreatePageComponent,
  CoursesPageComponent,
  CourseUpdatePageComponent,
} from './courses/pages';
import { ErrorPageComponent } from './errors/error-page/error-page.component';

import { AuthGuard } from './auth/guards/auth.guard';
import { AuthLoginGuard } from './auth/guards/authLogin.guard';

export const homeRoute: Route = { path: '', redirectTo: 'courses', pathMatch: 'full' };

export const coursesRoute: Route = {
  canActivate: [ AuthGuard ],
  children: [
    { path: '', component: CoursesPageComponent, pathMatch: 'full' },
    { path: 'new', component: CourseCreatePageComponent, pathMatch: 'full', data: { title: 'New' } },
    { path: ':id', component: CourseUpdatePageComponent, pathMatch: 'full' },
  ],
  data: { title: 'Courses' },
  path: 'courses',
};

export const loginRoute: Route = { path: 'login', component: LoginPageComponent, canActivate: [ AuthLoginGuard ] };

export const errorRoute: Route = { path: '**',   component: ErrorPageComponent, pathMatch: 'full' };

export const routes: Routes = [ coursesRoute, errorRoute, loginRoute, homeRoute ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
