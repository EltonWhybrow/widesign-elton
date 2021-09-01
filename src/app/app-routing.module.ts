import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
