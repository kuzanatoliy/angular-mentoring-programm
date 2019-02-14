import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchModule } from '../search/search.module';
import { SharedModule } from '../shared/shared.module';

import {
  CourseCreatePageComponent,
  CoursesPageComponent,
  CourseUpdatePageComponent,
} from './pages';

import {
  CourseFormComponent,
  CourseItemComponent,
  CoursesComponent,
} from './components';

import { FreshCourseDirective } from './directives/fresh-course.directive';

import { OrderByCreationDatePipe } from './pipes';

@NgModule({
  declarations: [
    CourseCreatePageComponent,
    CourseUpdatePageComponent,
    CoursesPageComponent,
    CourseFormComponent,
    CourseItemComponent,
    CoursesComponent,
    FreshCourseDirective,
    OrderByCreationDatePipe,
  ],
  exports: [
    CourseCreatePageComponent,
    CourseUpdatePageComponent,
    CoursesPageComponent,
    CourseFormComponent,
    CourseItemComponent,
    CoursesComponent,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    SearchModule,
    FormsModule,
  ],
})
export class CoursesModule { }
