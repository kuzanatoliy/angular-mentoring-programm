import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/login-page/login-page.component';
import {
  CourseItemPageComponent,
  CoursesPageComponent,
} from './courses/pages';

export const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'courses/:id', component: CourseItemPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
