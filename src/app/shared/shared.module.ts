import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';



@NgModule({
  declarations: [
    FooterComponent,
    BackBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, BackBtnComponent],
})
export class SharedModule { }
