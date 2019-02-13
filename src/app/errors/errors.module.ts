import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorMessageComponent } from './error-message/error-message.component';

import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    ErrorPageComponent,
  ],
  exports: [
    ErrorMessageComponent,
    ErrorPageComponent,
  ],
  imports: [ CommonModule ],
})
export class ErrorsModule { }
