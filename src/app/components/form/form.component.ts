import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppointmentService} from '../../services/appointment.service';
import {Doctor} from '../../models/doctor';
import {Service} from '../../models/service';
import {Router} from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {AppointmentRequest} from '../../models/appointmentRequest';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class FormComponent implements OnInit {

  constructor(snack: MatSnackBar, appointmentService: AppointmentService, router: Router) {
    this.snack = snack;
    this.appointmentService = appointmentService;
    this.router = router;
    this.nextAvailable = null;
    const currDay = new Date();
    const currentYear = currDay.getFullYear();
    this.minDate = currDay;
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  public nextAvailable;

  availableServices: Service[];
  availableDoctors: Doctor[];
  minDate: Date;
  maxDate: Date;

  appointmentService: AppointmentService;

  router: Router;
  date: FormGroup;
  name: FormGroup;
  email: FormGroup;
  phone: FormGroup;
  service: FormGroup;
  doctor: FormGroup;
  public defaultTime;
  private snack: MatSnackBar;

  ngOnInit(): void {
    this.nextAvailable = null;

    const defaultMinutes = new Date().getMinutes() > 30 ? 30 : 0;
    this.defaultTime = [new Date().getHours(), defaultMinutes, 0];

    this.appointmentService.getServices()
      .subscribe((data) => this.availableServices = data);

    this.appointmentService.getDoctors()
      .subscribe((data) => this.availableDoctors = data);

    this.date = new FormGroup({
      dateForm: new FormControl('', Validators.required)
    });
    this.name = new FormGroup({
      nameForm: new FormControl('', [Validators.minLength(1), Validators.required])
    });
    this.email = new FormGroup({
      emailForm: new FormControl('', [Validators.email, Validators.required])
    });
    this.phone = new FormGroup({
      phoneForm: new FormControl('', [Validators.minLength(6), Validators.maxLength(10), Validators.required])
    });
    this.service = new FormGroup({
      serviceForm: new FormControl('')
    });
    this.doctor = new FormGroup({
      doctorForm: new FormControl('')
    });
  }

  onSubmit(): void {
    const appointmentRequest = new AppointmentRequest(
      +this.date.controls.dateForm.value,
      this.name.controls.nameForm.value,
      this.email.controls.emailForm.value,
      this.phone.controls.phoneForm.value,
      this.doctor.controls.doctorForm.value,
      this.service.controls.serviceForm.value,
    );

    console.log(appointmentRequest);
    this.appointmentService.postAppointmentRequest(appointmentRequest)
      .subscribe(resp => {
        if (resp.status === 200) {
          this.router.navigate(['/home']);
        } else if (resp.status === 202) {
          console.log(resp.body);
          this.snack.open('The requested day and time is already booked!', null, {duration: 2000});

          this.nextAvailable = resp.body;
        } else {
          alert(resp.statusText);
        }
      });

  }

}
