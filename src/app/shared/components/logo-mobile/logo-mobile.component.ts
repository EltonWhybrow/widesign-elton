import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-mobile',
  templateUrl: './logo-mobile.component.html',
  styleUrls: ['./logo-mobile.component.scss']
})
export class LogoMobileComponent implements OnInit {

  constructor(private router: Router) { }

  // goToUrl(url: string): any {
  //   this.router.navigate(['/' + url])
  // }

  ngOnInit(): void {
  }

}
