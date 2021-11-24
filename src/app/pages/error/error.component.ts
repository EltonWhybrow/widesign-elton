import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  title = 'Opps! Wheres my ice-cream gone';
  constructor() { }

  ngOnInit(): void { }
}
