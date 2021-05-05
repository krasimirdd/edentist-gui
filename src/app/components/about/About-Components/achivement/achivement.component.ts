import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achivement',
  templateUrl: './achivement.component.html',
  styleUrls: ['./achivement.component.css']
})
export class AchivementComponent implements OnInit {

  achivement = [
    {
      icon: 'sl-icon-emotsmile',
      field: 'Healthy Clients',
      fieldCount: '1000+'
    },
    {
      icon: 'sl-icon-support',
      field: 'Years of experience',
      fieldCount: 10
    },
    {
      icon: 'sl-icon-people',
      field: 'Dedicated Professionals',
      fieldCount: '4 '
    },
    {
      icon: 'sl-icon-trophy',
      field: 'Awards won',
      fieldCount: 20
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
