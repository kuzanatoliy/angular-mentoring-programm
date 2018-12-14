import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../search/search.module';
import { CoursesComponent } from './courses/courses.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    CoursesPageComponent
  ],
  imports: [
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
