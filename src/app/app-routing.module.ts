import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/login-page/login-page.component';
import {
  CourseCreatePageComponent,
  CoursesPageComponent,
  CourseUpdatePageComponent,
} from './courses/pages';
import { ErrorPageComponent } from './errors/error-page/error-page.component';

import { AuthGuard } from './auth/guards/auth.guard';
import { AuthLoginGuard } from './auth/guards/authLogin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  {
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: CoursesPageComponent, pathMatch: 'full' },
      { path: 'new', component: CourseCreatePageComponent, pathMatch: 'full' },
      { path: ':id', component: CourseUpdatePageComponent, pathMatch: 'full' },
    ],
    path: 'courses',
  },
  { path: 'login', component: LoginPageComponent, canActivate: [ AuthLoginGuard ] },
  { path: '**',   component: ErrorPageComponent, pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
