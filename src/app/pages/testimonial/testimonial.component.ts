import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  currentTab = 'generic';

  constructor() {
  }

  handleEventClicked(data): void {
    this.currentTab = data;
  }

  ngOnInit(): void {
  }

}
