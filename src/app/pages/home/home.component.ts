import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home'
  routerUrl: any

  constructor(private router: Router) {
    console.log(this.router.url)
    this.routerUrl = this.router.url
  }

  ngOnInit(): void { }
}
