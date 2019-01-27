import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { SearchModule } from '../search/search.module';
import { SharedModule } from '../shared/shared.module';

import {
  CourseItemPageComponent,
  CoursesPageComponent
} from './pages';

import {
  CourseItemComponent,
  CoursesComponent
} from './components';

import { FreshCourseDirective } from './directives/fresh-course.directive';

import {
  OrderByCreationDatePipe,
  SearchFilterPipe
} from './pipes';

@NgModule({
  declarations: [
    CourseItemPageComponent,
    CoursesPageComponent,
    CourseItemComponent,
    CoursesComponent,
    FreshCourseDirective,
    OrderByCreationDatePipe,
    SearchFilterPipe
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    SearchModule,
    FormsModule
  ],
  exports: [
    CourseItemPageComponent,
    CoursesPageComponent,
    CourseItemComponent,
    CoursesComponent
  ]
})
export class CoursesModule { }
