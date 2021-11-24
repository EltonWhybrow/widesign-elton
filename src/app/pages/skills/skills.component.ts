import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title = 'Design & Development | Services | WideSign'

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
      { name: 'description', content: 'Information on services WideSign offer and help getting started on the web' }
    )
  }


}
