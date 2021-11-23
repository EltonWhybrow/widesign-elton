import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-sm',
  templateUrl: './logo-sm.component.html',
  styleUrls: ['./logo-sm.component.scss']
})
export class LogoSmComponent implements OnInit {

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
