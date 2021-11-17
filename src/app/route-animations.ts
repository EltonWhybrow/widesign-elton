import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations'

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({
        // left: '-100%',
        opacity: 0
      })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('.4s ease-out', style({
          // left: '100%',
          opacity: 0
        }))]),
        query(':enter', [animate('.4s ease-out', style({
          // left: '0%',
          opacity: 1
        }))])
      ]),
      query(':enter', animateChild())
    ])
  ])
