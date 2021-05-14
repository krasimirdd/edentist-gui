import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../../models/dialogData';

@Component({
    selector: 'app-archived-appointments',
    templateUrl: './list-archived-appointments.html',
    styleUrls: ['./list-archived-appointments.component.css']
})
export class ListArchivedAppointmentsComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData[]) {
    }

}
