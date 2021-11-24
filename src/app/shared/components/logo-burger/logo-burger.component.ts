import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-burger',
  templateUrl: './logo-burger.component.html',
  styleUrls: ['./logo-burger.component.scss']
})
export class LogoBurgerComponent implements OnInit {

  routerUrl: any

  constructor(private router: Router) {
    console.log(this.router.url)
    this.routerUrl = this.router.url
  }

  ngOnInit(): void {
  }

  // takeMeHome(): any {
  //   this.router.navigate(['/'])
  // }


}
