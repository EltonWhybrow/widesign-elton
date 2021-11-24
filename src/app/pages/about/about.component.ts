import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'Design & Development | About | WideSign'

  currentTab = 'generic'
  currentUrl = ''

  constructor(private router: Router, private titleService: Title, private metaService: Meta) {
    this.router.events.subscribe((event) => { event instanceof NavigationEnd ? this.currentUrl = event.url : null })
  }

  handleEventClicked(data): void {
    this.currentTab = data;
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    this.metaService.updateTag(
      { name: 'description', content: 'About WideSign Development and Design agency in the Redhill and Reigate Surrey' }
    )
  }
}

