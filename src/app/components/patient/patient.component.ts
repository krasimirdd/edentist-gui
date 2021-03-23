import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../models/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @Input() patient: Patient;

  constructor() {
  }

  ngOnInit(): void {
  }

}
