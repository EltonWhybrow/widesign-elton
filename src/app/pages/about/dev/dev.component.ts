import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

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
