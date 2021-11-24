import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  title = 'Design & Development | Clients | WideSign'

  currentTab = 'generic';

  constructor(private titleService: Title, private metaService: Meta) { }

  handleEventClicked(data): void {
    this.currentTab = data;
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    this.metaService.updateTag(
      { name: 'description', content: 'Manage your hosting account or email as a client with WideSign' }
    )
  }

}
