import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterComponent } from './footer/footer.component'
import { BackBtnComponent } from './components/back-btn/back-btn.component'
import { LogoComponent } from './components/logo/logo.component'
import { LogoMobileComponent } from './components/logo-mobile/logo-mobile.component'
import { LogoSmComponent } from './components/logo-sm/logo-sm.component'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    FooterComponent,
    BackBtnComponent,
    LogoComponent,
    LogoMobileComponent,
    LogoSmComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent, BackBtnComponent, LogoComponent, LogoMobileComponent, LogoSmComponent],
})
export class SharedModule { }
