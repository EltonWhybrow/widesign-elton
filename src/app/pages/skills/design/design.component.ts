import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

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
