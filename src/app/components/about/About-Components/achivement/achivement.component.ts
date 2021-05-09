import {Component, OnInit} from '@angular/core';
import {TeamComponent} from '../team/team.component';
import {AppointmentService} from '../../../../services/appointment.service';

@Component({
    selector: 'app-achivement',
    templateUrl: './achivement.component.html',
    styleUrls: ['./achivement.component.css']
})
export class AchivementComponent implements OnInit {

    private defService: AppointmentService;
    doctorsCount: number | string;

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
            fieldCount: ''
        },
        {
            icon: 'sl-icon-trophy',
            field: 'Awards won',
            fieldCount: 20
        }
    ];

    constructor(defService: AppointmentService) {
        this.defService = defService;
    }

    ngOnInit(): void {
        this.defService.getDoctors()
            .subscribe((data) => this.doctorsCount = data.length);
    }

}
