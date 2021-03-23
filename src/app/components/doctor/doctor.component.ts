import {Component, Input, OnInit} from '@angular/core';
import {Doctor} from '../../models/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  @Input() doctor: Doctor;

  constructor() {
  }

  ngOnInit(): void {
  }

}
