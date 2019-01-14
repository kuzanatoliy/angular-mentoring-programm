import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    NewCourseComponent,
    LoadMoreComponent,
    ModalWindowComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    NewCourseComponent,
    LoadMoreComponent,
    ModalWindowComponent
  ]
})
export class SharedModule { }
