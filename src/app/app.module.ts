import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { SkillsComponent } from './pages/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ErrorComponent,
    FooterComponent,
    TestimonialsComponent,
    SkillsComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
