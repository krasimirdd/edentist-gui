import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  public isCollapsed = false;
  public showMobileMenu = false;

  constructor() {}

  ngOnInit(): void {}
  handleClick(event: boolean): void {
    this.showMobileMenu = event;
  }
}
