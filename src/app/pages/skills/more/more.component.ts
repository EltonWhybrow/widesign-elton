import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor() { }

  // @Input() event: any;
  event: string;
  @Output() eventClick = new EventEmitter();

  handleMe(): void {
    this.event = 'generic';
    this.eventClick.emit(this.event);
    // console.log('', this.event);
  }

  ngOnInit(): void {
  }

}
