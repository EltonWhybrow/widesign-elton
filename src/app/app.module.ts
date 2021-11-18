import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LocationStrategy, PathLocationStrategy } from '@angular/common'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { ErrorComponent } from './pages/error/error.component'
import { SkillsComponent } from './pages/skills/skills.component'
import { ClientsComponent } from './pages/clients/clients.component'
import { TestimonialComponent } from './pages/testimonial/testimonial.component'
import { SharedModule } from './shared/shared.module'
import { DesignComponent } from './pages/skills/design/design.component'
import { DevComponent } from './pages/skills/dev/dev.component'
import { UxuiComponent } from './pages/skills/uxui/uxui.component'
import { MoreComponent } from './pages/skills/more/more.component'
import { MeComponent } from './pages/skills/me/me.component'
import { BudlandscapesComponent } from './pages/testimonial/budlandscapes/budlandscapes.component'
import { BtroofingComponent } from './pages/testimonial/btroofing/btroofing.component'
import { Spares4mowersComponent } from './pages/testimonial/spares4mowers/spares4mowers.component'
import { FlashlightComponent } from './pages/testimonial/flashlight/flashlight.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    SkillsComponent,
    ClientsComponent,
    TestimonialComponent,
    DesignComponent,
    DevComponent,
    UxuiComponent,
    MoreComponent,
    MeComponent,
    BudlandscapesComponent,
    BtroofingComponent,
    Spares4mowersComponent,
    FlashlightComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
