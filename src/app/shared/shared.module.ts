import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterComponent } from './footer/footer.component'
import { BackBtnComponent } from './components/back-btn/back-btn.component'
import { LogoComponent } from './components/logo/logo.component'
import { LogoMobileComponent } from './components/logo-mobile/logo-mobile.component'
import { LogoBurgerComponent } from './components/logo-burger/logo-burger.component'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    FooterComponent,
    BackBtnComponent,
    LogoComponent,
    LogoMobileComponent,
    LogoBurgerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent, BackBtnComponent, LogoComponent, LogoMobileComponent, LogoBurgerComponent],
})
export class SharedModule { }
