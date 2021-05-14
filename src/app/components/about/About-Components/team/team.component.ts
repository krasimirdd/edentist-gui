import {Component, OnInit} from '@angular/core';
import {AppointmentService} from '../../../../services/appointment.service';
import {Doctor} from '../../../../models/doctor';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {

    doctors: Doctor[];

    constructor(private service: AppointmentService) {
    }

    ngOnInit() {
        this.service.getDoctors()
            .subscribe((data) => this.doctors = data);
    }
}
