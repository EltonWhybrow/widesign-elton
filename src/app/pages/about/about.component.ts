import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  currentTab = 'generic'
  currentUrl = ''

  constructor(private router: Router) {
    this.router.events.subscribe((event) => { event instanceof NavigationEnd ? this.currentUrl = event.url : null })
  }

  handleEventClicked(data): void {
    this.currentTab = data;
  }

  ngOnInit(): void {
  }
}

