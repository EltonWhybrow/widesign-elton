import { Component } from '@angular/core'
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader],
})
export class AppComponent {
  title = 'widesign-elton'

  loading = false

  constructor(private router: Router) {
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

}
