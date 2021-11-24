import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  title = 'Design & Development | Contact | WideSign'

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    this.metaService.updateTag(
      { name: 'description', content: 'Get in touch about your account or find out how WideSign Development and Design agency can help your business' },
    )
  }

}
