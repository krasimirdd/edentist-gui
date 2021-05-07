import {Component, Input, OnInit} from '@angular/core';
import {AppointmentService} from '../../services/appointment.service';
import {Appointment} from '../../models/appointment';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthenticatedUser} from '../../models/authenticatedUser';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EditAppointmentComponent} from '../edit-appointment/edit-appointment.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css'],
})
export class ListAppointmentComponent implements OnInit {
  constructor(public snack: MatSnackBar, private appointmentService: AppointmentService, public dialog: MatDialog) {
    this.sort = new FormBuilder().group({
      showApproved: new FormControl(false),
      showDeclined: new FormControl(false),
      showPending: new FormControl(false)
    });
  }

  appointments: Appointment[] = [];

  @Input() authenticatedUser: AuthenticatedUser;
  isDoctor = false;
  isAdmin = false;
  sort: FormGroup;

  private static doConfirm(): boolean {
    return confirm('Are you sure?');
  }

  ngOnInit(): void {
    console.log(this.authenticatedUser);
    console.log(this.authenticatedUser.role);

    this.isAdmin = this.authenticatedUser.role === 'admin';
    if (!this.isAdmin) {
      this.isDoctor = this.authenticatedUser.role === 'doctor';
    }
    this.appointmentService.getAppointments(this.authenticatedUser, this.isAdmin)
      .subscribe(
        data => this.appointments = data
      );
  }

  sortByStatus(): void {

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

    console.log(values);

    if (values.length === 0) {
      console.log(values);

      this.appointmentService.getAppointments(this.authenticatedUser, this.isAdmin)
        .subscribe(
          data => this.appointments = data
        );
    } else {
      values = values.substr(0, values.lastIndexOf(','));

      console.log(values);

      this.appointmentService.getAppointmentsWithFilter(this.authenticatedUser, 'status:' + values)
        .subscribe(
          data => this.appointments = data
        );
    }
  }

  onApprove(a: Appointment): void {
    const confirm = ListAppointmentComponent.doConfirm();
    if (confirm) {
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

  onDecline(a: Appointment): void {
    const confirm = ListAppointmentComponent.doConfirm();
    if (confirm) {
      const newAppointment = new Appointment(a, 'Declined');
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

  onCancel(a: Appointment): void {
    const confirm = ListAppointmentComponent.doConfirm();
    if (confirm) {
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

  onEdit({date, doctor, id, medicalHistory, patient, prescription, service, status}: Appointment): void {

    const dialogRef = this.dialog.open(EditAppointmentComponent, {
      width: '850px', height: '700px',
      data: {id, patient, service, medicalHistory, prescription, doctor, status, date: date.toString()}
    });

    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }
}
