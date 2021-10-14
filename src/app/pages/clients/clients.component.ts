import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  currentTab = 'generic';

  constructor() { }

  handleEventClicked(data): void {
    this.currentTab = data;
  }

  ngOnInit(): void {
  }

}
