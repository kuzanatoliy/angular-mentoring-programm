import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LogoComponent
  ]
})
export class SharedModule { }
