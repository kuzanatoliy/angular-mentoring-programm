import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import {
  AuthorListControlComponent,
  BreadcrumbsComponent,
  DateInputComponent,
  DurationInputComponent,
  FooterComponent,
  HeaderComponent,
  LogoComponent,
  ModalWindowComponent,
  UserControlComponent,
} from './components';

import {
  DatePipe,
  DurationPipe,
} from './pipes';

@NgModule({
  declarations: [
    AuthorListControlComponent,
    BreadcrumbsComponent,
    DateInputComponent,
    DurationInputComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    ModalWindowComponent,
    UserControlComponent,
    DatePipe,
    DurationPipe,
  ],
  exports: [
    AuthorListControlComponent,
    BreadcrumbsComponent,
    DateInputComponent,
    DurationInputComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    ModalWindowComponent,
    UserControlComponent,
    DatePipe,
    DurationPipe,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule { }
