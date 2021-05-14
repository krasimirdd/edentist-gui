import {Component, OnInit} from '@angular/core';
import {AppointmentService} from '../../../../services/appointment.service';

@Component({
    selector: 'app-achivement',
    templateUrl: './achivement.component.html',
    styleUrls: ['./achivement.component.css']
})
export class AchivementComponent implements OnInit {

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

    constructor(private service: AppointmentService) {
    }

    ngOnInit() {
        this.service.getDoctors()
            .subscribe((data) => this.doctorsCount = data.length);
    }

}
