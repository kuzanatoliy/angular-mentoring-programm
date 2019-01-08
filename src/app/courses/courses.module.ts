import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../search/search.module';

import { CoursesComponent } from './courses/courses.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';

import { FreshCourseDirective } from './directives/fresh-course.directive';

import {
  CourseDurationPipe,
  CourseCreationDatePipe, 
  OrderByCreationDatePipe,
  SearchFilterPipe
} from './pipes';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    CoursesPageComponent,
    FreshCourseDirective,
    CourseDurationPipe,
    CourseCreationDatePipe,
    OrderByCreationDatePipe,
    SearchFilterPipe
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    SearchModule
  ],
  exports: [
    CoursesComponent,
    CourseItemComponent,
    CoursesPageComponent
  ]
})
export class CoursesModule { }
