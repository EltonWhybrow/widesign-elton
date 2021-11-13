import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { ErrorComponent } from './pages/error/error.component'
import { SkillsComponent } from './pages/skills/skills.component'
import { ClientsComponent } from './pages/clients/clients.component'
import { TestimonialComponent } from './pages/testimonial/testimonial.component'
import { DevComponent } from './pages/about/dev/dev.component'
import { DesignComponent } from './pages/about/design/design.component'
import { MeComponent } from './pages/about/me/me.component'
import { UxuiComponent } from './pages/about/uxui/uxui.component'
import { MoreComponent } from './pages/about/more/more.component'



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'skills', component: SkillsComponent },
  {
    path: 'about-us',
    component: AboutComponent,
    children: [
      { path: 'me', component: MeComponent },
      { path: '', pathMatch: 'full', redirectTo: 'me' },
      { path: 'development', component: DevComponent },
      { path: 'design', component: DesignComponent },
      { path: 'ux-ui', component: UxuiComponent },
      { path: 'more', component: MoreComponent },
    ]
  },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'clients', component: ClientsComponent },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
