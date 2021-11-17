import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uxui',
  templateUrl: './uxui.component.html',
  styleUrls: ['./uxui.component.scss']
})
export class UxuiComponent implements OnInit {

  constructor() { }

  // @Input() event: any;
  event: string
  @Output() eventClick = new EventEmitter()

  handleMe(): void {
    this.event = 'generic'
    this.eventClick.emit(this.event)
    // console.log('', this.event);
  }

  ngOnInit(): void {
  }

}
