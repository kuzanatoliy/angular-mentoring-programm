import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { CoursesComponent } from './courses/courses.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    SearchComponent,
    NewCourseComponent,
    CoursesComponent,
    LoadMoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    SearchComponent,
    NewCourseComponent,
    CoursesComponent,
    LoadMoreComponent
  ]
})
export class SharedModule { }
