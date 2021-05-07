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

class AppointmentResponse {
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  // private getUrl = 'http://api.tvmaze.com/search/shows?q=Vikings';
  private getUrl = 'http://localhost:8080/appointments';
  private getSingleUrl = 'http://localhost:8080/appointment';
  private postUrl = 'http://localhost:8080/appointments';
  private updateUrl = 'http://localhost:8080/appointments/';
  private getServicesUrl = 'http://localhost:8080/api/services';
  private getDoctorsUrl = 'http://localhost:8080/api/doctors';

  constructor(private  httpClient: HttpClient) {
  }

  getAppointments(currentUser: AuthenticatedUser, isAdmin: boolean): Observable<Appointment[]> {
    const headers = new HttpHeaders().set('IsAdmin', isAdmin ? 'true' : 'false');

    return this.httpClient
      .get<Appointment[]>(`${this.getUrl}/`, {params: {user: `${currentUser.email}`}, headers})
      .pipe(
        delay(500)
      );
  }

  getAppointment(email: string, code: string): Observable<Appointment> {
    const headers = new HttpHeaders().set('Code', code);

    return this.httpClient
      .get<Appointment>(`${this.getSingleUrl}/`, {params: {user: `${email}`}, headers})
      .pipe(
        delay(500)
      );
  }

  getAppointmentsWithFilter(currentUser: AuthenticatedUser, filter: string): Observable<Appointment[]> {
    const headers = new HttpHeaders().set('Filter', filter);
    console.log(filter);

    return this.httpClient
      .get<Appointment[]>(`${this.getUrl}/`, {headers, params: {user: `${currentUser.email}`}})
      .pipe(delay(500));
  }

  postAppointmentRequest(appointment: AppointmentRequest): Observable<HttpResponse<AppointmentResponse>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .post<AppointmentRequest>(this.postUrl, JSON.stringify(appointment), {headers, observe: 'response'});
  }

  updateAppointment(updated: AppointmentEdit): Observable<HttpResponse<AppointmentResponse>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    console.log(updated);

    return this.httpClient
      .post<AppointmentEdit>(`${this.updateUrl}${updated.id}`, JSON.stringify(updated), {headers, observe: 'response'});
  }

  getServices(): Observable<Service[]> {
    return this.httpClient
      .get<Service[]>(this.getServicesUrl)
      .pipe(
        map(response => response)
      );
  }

  getDoctors(): Observable<Doctor[]> {
    return this.httpClient
      .get<Doctor[]>(this.getDoctorsUrl)
      .pipe(
        map(response => response)
      );
  }

  postStatus(a: Appointment): Observable<Appointment> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(a);

    return this.httpClient
      .post<Appointment>(this.updateUrl + a.id, JSON.stringify(a), {headers})
      .pipe(
        map(response => response)
      );
  }

  postCancel(a: Appointment): Observable<HttpResponse<Appointment>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    console.log('Canceling -> ' + a);

    return this.httpClient
      .delete<Appointment>(this.updateUrl + a.id, {headers, observe: 'response'});
  }
}
