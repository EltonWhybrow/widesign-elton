import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  title = 'Design & Development | Testimonials | WideSign'

  currentTab = 'btroofing';

  constructor(private titleService: Title, private metaService: Meta) {
  }

  handleEventClicked(data): void {
    this.currentTab = data;
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    this.metaService.updateTag(
      { name: 'description', content: 'What others say about our dedication to slick and UI friendly web experiences' }
    )
  }

}
