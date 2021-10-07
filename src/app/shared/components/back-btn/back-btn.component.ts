import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss']
})
export class BackBtnComponent implements OnInit {

  constructor(private router: Router) { }

  backToHome(): any {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
