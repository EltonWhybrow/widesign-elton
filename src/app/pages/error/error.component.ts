import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  title = 'Opps!! There been a bo bo!  #error';
  constructor() {}

  ngOnInit(): void {}
}
