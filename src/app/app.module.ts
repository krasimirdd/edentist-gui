import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ListAppointmentComponent} from './components/list-appointment/list-appointment.component';
import {DoctorComponent} from './components/doctor/doctor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddAppointmentComponent} from './components/add-appointment/add-appointment.component';
import {FormComponent} from './components/form/form.component';
import {MaterialModule} from './MaterialModule';
import {FormsModule} from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {PatientComponent} from './components/patient/patient.component';
import {PatientPageComponent} from './components/patient-page/patient-page.component';
import {AuthModule} from '@auth0/auth0-angular';
import {environment as env} from '../environments/environment';
import {LoginButtonComponent} from './components/login-button/login-button.component';
import {AuthenticationButtonComponent} from './components/authentication-button/authentication-button.component';
import {LogoutButtonComponent} from './components/logout-button/logout-button.component';
import {LoadingComponent} from './components/loading/loading.component';
import {ProfileComponent} from './components/profile/profile.component';
import {DoctorPageComponent} from './components/doctor-page/doctor-page.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginCallbackComponent} from './components/login-callback/login-callback.component';

import {EditAppointmentComponent} from './components/edit-appointment/edit-appointment.component';
import {ChatModule} from './chat/chat.module';

const routers: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'patient/appointments', component: PatientPageComponent},
  {path: 'doctor/appointments', component: DoctorPageComponent},
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ListAppointmentComponent,
    DoctorComponent,
    AddAppointmentComponent,
    FormComponent,
    PatientComponent,
    PatientPageComponent,
    LoginButtonComponent,
    AuthenticationButtonComponent,
    LogoutButtonComponent,
    LoadingComponent,
    ProfileComponent,
    DoctorPageComponent,
    LoginCallbackComponent,
    EditAppointmentComponent,
    EditAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routers),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ChatModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
