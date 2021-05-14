import {Component, Input} from '@angular/core';
import {Doctor} from '../../models/doctor';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

    @Input() doctor: Doctor;

    constructor() {
    }
}
