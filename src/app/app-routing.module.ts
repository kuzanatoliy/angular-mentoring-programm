import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { CourseItemPageComponent } from './courses/course-item-page/course-item-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';

export const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'courses/:id', component: CourseItemPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
