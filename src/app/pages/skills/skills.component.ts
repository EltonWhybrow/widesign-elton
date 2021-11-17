import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

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
