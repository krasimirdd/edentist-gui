import {Component, OnInit} from '@angular/core';
import {AppointmentService} from '../../../../services/appointment.service';
import {Doctor} from '../../../../models/doctor';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {

    public defService: AppointmentService;
    doctors: Doctor[];

    constructor(defService: AppointmentService) {
        this.defService = defService;
    }

    ngOnInit(): void {
        this.defService.getDoctors()
            .subscribe((data) => this.doctors = data);
    }
}
