import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: []
})
export class HomeButtonComponent implements OnInit {
  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  home(): void {
    this.router.navigate(['']);
  }
}
