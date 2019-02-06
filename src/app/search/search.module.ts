import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  exports: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class SearchModule { }
