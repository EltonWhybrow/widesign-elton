import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { SharedModule } from './shared/shared.module';
import { DesignComponent } from './pages/about/design/design.component';
import { DevComponent } from './pages/about/dev/dev.component';
import { UxuiComponent } from './pages/about/uxui/uxui.component';
import { MoreComponent } from './pages/about/more/more.component';
import { MeComponent } from './pages/about/me/me.component';
import { BudlandscapesComponent } from './pages/testimonial/budlandscapes/budlandscapes.component';
import { BtroofingComponent } from './pages/testimonial/btroofing/btroofing.component';

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
    BtroofingComponent
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
