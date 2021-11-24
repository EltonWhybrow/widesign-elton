import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Web Design & Development | Home | WideSign'
  routerUrl: any

  constructor(private router: Router, private titleService: Title, private metaService: Meta) {
    console.log(this.router.url)
    this.routerUrl = this.router.url
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    this.metaService.updateTag(
      { name: 'description', content: 'Welcome to WideSign providing Web Development & Design in Redhill and Reigate Surrey' }
    )
  }
}
