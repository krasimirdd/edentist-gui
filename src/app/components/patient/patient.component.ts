import {Component, Input} from '@angular/core';
import {Patient} from '../../models/patient';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})
export class PatientComponent {

    @Input() patient: Patient;

    constructor() {
    }

}
