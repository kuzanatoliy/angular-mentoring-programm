import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import {
  AuthorListControlComponent,
  BreadcrumbsComponent,
  DateInputComponent,
  DurationInputComponent,
  FooterComponent,
  HeaderComponent,
  LoadMoreComponent,
  LogoComponent,
  ModalWindowComponent,
  NewCourseComponent,
  UserControlComponent
} from './components';

@NgModule({
  declarations: [
    AuthorListControlComponent,
    BreadcrumbsComponent,
    DateInputComponent,
    DurationInputComponent,
    FooterComponent,
    HeaderComponent,
    LoadMoreComponent,
    LogoComponent,
    ModalWindowComponent,
    NewCourseComponent,
    UserControlComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthorListControlComponent,
    BreadcrumbsComponent,
    DateInputComponent,
    DurationInputComponent,
    FooterComponent,
    HeaderComponent,
    LoadMoreComponent,
    LogoComponent,
    ModalWindowComponent,
    NewCourseComponent,
    UserControlComponent
  ]
})
export class SharedModule { }
