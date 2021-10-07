import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    FooterComponent,
    BackBtnComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, BackBtnComponent, LogoComponent],
})
export class SharedModule { }
