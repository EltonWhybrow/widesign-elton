import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { ErrorComponent } from './pages/error/error.component'
import { SkillsComponent } from './pages/skills/skills.component'
import { ClientsComponent } from './pages/clients/clients.component'
import { TestimonialComponent } from './pages/testimonial/testimonial.component'
import { DevComponent } from './pages/skills/dev/dev.component'
import { DesignComponent } from './pages/skills/design/design.component'
import { MeComponent } from './pages/skills/me/me.component'
import { UxuiComponent } from './pages/skills/uxui/uxui.component'
import { MoreComponent } from './pages/skills/more/more.component'



const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animationState: 'home' } },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animationState: 'skills' },
    children: [
      { path: 'me', component: MeComponent, data: { animationState: 'me' } },
      { path: '', pathMatch: 'full', redirectTo: 'me' },
      { path: 'development', component: DevComponent, data: { animationState: 'development' } },
      { path: 'design', component: DesignComponent, data: { animationState: 'design' } },
      { path: 'ux-ui', component: UxuiComponent, data: { animationState: 'ux-ui' } },
      { path: 'more', component: MoreComponent, data: { animationState: 'more' } },
    ]
  },
  {
    path: 'about-us',
    component: AboutComponent,
    data: { animationState: 'about-us' }
  },
  { path: 'testimonials', component: TestimonialComponent, data: { animationState: 'testimonials' } },
  { path: 'clients', component: ClientsComponent, data: { animationState: 'clients' } },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      useHash: false,
    })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
