import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {Appointment} from '../models/appointment';
import {AppointmentRequest} from '../models/appointmentRequest';
import {Service} from '../models/service';
import {Doctor} from '../models/doctor';
import {AuthenticatedUser} from '../models/authenticatedUser';
import {AppointmentEdit} from '../models/appointmentEdit';
import {environment} from '../../environments/environment';
import {Routes} from './routes';
import {Headers} from './headers';

class AppointmentResponse {
}

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    constructor(private  httpClient: HttpClient) {
    }

    getAppointments(currentUser: AuthenticatedUser): Observable<Appointment[]> {
        const headers = Headers.withAuthorization(true);

        return this.httpClient
            .get<Appointment[]>(`${Routes.APPOINTMENTS}/`, {params: {user: `${currentUser.email}`}, headers})
            .pipe(
                delay(500)
            );
    }

    getAppointment(email: string, code: string): Observable<Appointment> {
        const headers = new HttpHeaders().set('Code', code);

        return this.httpClient
            .get<Appointment>(`${Routes.SINGLE_APPOINTMENT}/`, {params: {user: `${email}`}, headers})
            .pipe(
                delay(500)
            );
    }

    getAppointmentsWithFilter(currentUser: AuthenticatedUser, filter: string): Observable<Appointment[]> {
        const headers = Headers.withAuthorization(true).set('Filter', filter);
        console.log(filter);

        return this.httpClient
            .get<Appointment[]>(`${Routes.APPOINTMENTS}/`, {headers, params: {user: `${currentUser.email}`}})
            .pipe(delay(500));
    }

    postAppointmentRequest(appointment: AppointmentRequest): Observable<HttpResponse<AppointmentResponse>> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.httpClient
            .post<AppointmentRequest>(Routes.APPOINTMENTS, JSON.stringify(appointment), {headers, observe: 'response'});
    }

    updateAppointment(updated: AppointmentEdit): Observable<HttpResponse<AppointmentResponse>> {
        const headers = Headers.withAuthorization(true).set('Content-Type', 'application/json');
        console.log(updated);

        return this.httpClient
            .post<AppointmentEdit>(`${Routes.APPOINTMENTS}/${updated.id}`, JSON.stringify(updated), {headers, observe: 'response'});
    }

    getServices(): Observable<Service[]> {
        const headers = Headers.withAuthorization(false);

        return this.httpClient
            .get<Service[]>(Routes.API_SERVICES, {headers})
            .pipe(
                map(response => response)
            );
    }

    getDoctors(): Observable<Doctor[]> {
        const headers = Headers.withAuthorization(false);

        return this.httpClient
            .get<Doctor[]>(Routes.API_DOCTORS, {headers})
            .pipe(
                map(response => response)
            );
    }

    postStatus(appointment: Appointment): Observable<Appointment> {
        const headers = Headers.withAuthorization(true).set('Content-Type', 'application/json');
        console.log(appointment);

        return this.httpClient
            .post<Appointment>(`${Routes.APPOINTMENTS}/${appointment.id}`, JSON.stringify(appointment), {headers})
            .pipe(
                map(response => response)
            );
    }

    postCancel(appointment: Appointment): Observable<HttpResponse<Appointment>> {
        const headers = Headers.withAuthorization(true).set('Content-Type', 'application/json');
        console.log('Canceling -> ' + appointment);

        return this.httpClient
            .delete<Appointment>(`${Routes.APPOINTMENTS}/${appointment.id}`, {headers, observe: 'response'});
    }
}
