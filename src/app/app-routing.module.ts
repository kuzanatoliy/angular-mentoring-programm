import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';

export const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
