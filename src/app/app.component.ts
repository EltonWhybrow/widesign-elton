import { Component, OnInit } from '@angular/core'
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet
} from '@angular/router'
import { fader } from './route-animations'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader],
})
export class AppComponent implements OnInit {
  title = 'Home - Design & Development - WideSign'

  loading = false

  constructor(private router: Router, private titleService: Title, private metaService: Meta) {
    // this.router.events.subscribe((event: Event) => {
    //   console.log(event)
    //   switch (true) {
    //     case event instanceof NavigationStart: {
    //       this.loading = true
    //       break
    //     }

    //     case event instanceof NavigationEnd:
    //     case event instanceof NavigationCancel:
    //     case event instanceof NavigationError: {
    //       setTimeout(() => {
    //         console.log('Hello from setTimeout')
    //         this.loading = false;
    //       }, 1500)
    //       break
    //     }
    //     default: {
    //       break
    //     }
    //   }
    // })
  }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Development, Desgin, Web Design, Hosting' },
      { name: 'description', content: 'Custom Development and Design in the Redhill and Reigate Surrey' },
      { name: 'robots', content: 'index, follow' }
    ])
  }

}
