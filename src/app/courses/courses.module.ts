import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchModule } from '../search/search.module';
import { SharedModule } from '../shared/shared.module';

import {
  CourseCreatePageComponent,
  CourseItemPageComponent,
  CoursesPageComponent,
} from './pages';

import {
  CourseFormComponent,
  CourseItemComponent,
  CoursesComponent,
} from './components';

import { FreshCourseDirective } from './directives/fresh-course.directive';

import {
  OrderByCreationDatePipe,
  SearchFilterPipe,
} from './pipes';

@NgModule({
  declarations: [
    CourseCreatePageComponent,
    CourseItemPageComponent,
    CoursesPageComponent,
    CourseFormComponent,
    CourseItemComponent,
    CoursesComponent,
    FreshCourseDirective,
    OrderByCreationDatePipe,
    SearchFilterPipe,
  ],
  exports: [
    CourseCreatePageComponent,
    CourseItemPageComponent,
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
