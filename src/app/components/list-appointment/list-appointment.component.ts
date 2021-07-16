import {Component, OnInit} from '@angular/core';
import {AppointmentService} from '../../services/appointment.service';
import {Appointment} from '../../models/appointment';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthenticatedUser} from '../../models/authenticatedUser';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EditAppointmentComponent} from '../edit-appointment/edit-appointment.component';
import {MatDialog} from '@angular/material/dialog';
import {ListArchivedAppointmentsComponent} from '../list-archived-appointments/list-archived-appointments';
import {Helpers} from '../../services/helpers';

@Component({
    selector: 'app-list-appointment',
    templateUrl: './list-appointment.component.html',
    styleUrls: ['./list-appointment.component.css'],
})
export class ListAppointmentComponent implements OnInit {
    constructor(private snack: MatSnackBar, private appointmentService: AppointmentService, private dialog: MatDialog) {
        this.sort = new FormBuilder().group({
            showApproved: new FormControl(false),
            showDeclined: new FormControl(false),
            showPending: new FormControl(false)
        });
    }

    appointments: Appointment[] = [];
    archivedAppointments: Appointment[] = [];

    authenticatedUser: AuthenticatedUser;
    isDoctor = false;
    sort: FormGroup;

    ngOnInit() {
        this.authenticatedUser = Helpers.getAuthenticatedUser();

        if (this.authenticatedUser !== null) {
            this.isDoctor = this.authenticatedUser.role === 'doctor';
            this.appointmentService.getAppointments(this.authenticatedUser)
                .subscribe(data => this.appointments = data);
        }
    }

    sortByStatus() {

        let values = '';
        if (this.sort.get('showApproved').value === true) {
            values += 'approved,';
        }
        if (this.sort.get('showDeclined').value === true) {
            values += 'declined,';
        }
        if (this.sort.get('showPending').value === true) {
            values += 'pending,';
        }

        if (values.length === 0) {
            this.appointmentService.getAppointments(this.authenticatedUser)
                .subscribe(data => this.appointments = data);
        } else {
            values = Helpers.removeTrailing(values, ',');

            this.appointmentService.getAppointmentsWithFilter(this.authenticatedUser, 'status:' + values)
                .subscribe(data => this.appointments = data);
        }
    }

    onApprove(a: Appointment) {
        if (Helpers.doConfirm()) {
            const newAppointment = new Appointment(a, 'Approved');
            this.appointmentService.postStatus(newAppointment)
                .subscribe(
                    data => {
                        console.log(data);
                        if (data.status === newAppointment.status) {
                            a.status = newAppointment.status;
                            this.snack.open(`Status changed to ${a.status}`, null, {duration: 2000});
                        }
                    }
                );
        }
    }

    onDecline(a: Appointment) {
        if (Helpers.doConfirm()) {
            const newAppointment = new Appointment(a, 'Declined');
            this.appointmentService.postStatus(newAppointment)
                .subscribe(data => {
                        if (data.status === newAppointment.status) {
                            a.status = newAppointment.status;
                            this.snack.open(`Status changed to ${a.status}`, null, {duration: 2000});
                        }
                    }
                );
        }
    }

    onCancel(a: Appointment) {
        if (Helpers.doConfirm()) {
            this.appointmentService.postCancel(a)
                .subscribe(resp => {
                        if (resp.status === 200) {
                        }
                        this.appointments = this.appointments.filter(it => it.id === a.id);
                        this.ngOnInit();
                    }
                );
        }
    }

    onEdit({date, doctor, id, medicalHistory, patient, prescription, service, status}: Appointment) {

        const dialogRef = this.dialog.open(EditAppointmentComponent, {
            width: '850px', height: '800px',
            data: {id, patient, service, medicalHistory, prescription, doctor, status, date: date.toString()}
        });

        dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
    }

    getArchived(value: string) {
        this.appointmentService.getArchivedAppointments(value)
            .subscribe(data => {
                this.archivedAppointments = data;
                this.dialog.open(ListArchivedAppointmentsComponent, {
                    width: '950px', height: '800px',
                    data: this.archivedAppointments
                });
            });
    }
}
