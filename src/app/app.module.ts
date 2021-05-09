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
import {ProfileComponent} from './components/profile/profile.component';
import {TrackAppointmentComponent} from './components/track-appointment/track-appointment.component';
import {HttpClientModule} from '@angular/common/http';
import {IsLoadingModule} from '@service-work/is-loading';
import {EditAppointmentComponent} from './components/edit-appointment/edit-appointment.component';
import {ChatModule} from './chat/chat.module';
import {NewsfeedComponent} from './components/newsfeed/newsfeed.component';
import {FullComponent} from './layout/full/full.component';
import {BannerComponent} from './shared/banner/banner.component';
import {FooterComponent} from './shared/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BannerNavigationComponent} from './shared/banner-navigation/banner-navigation.component';
import {AboutComponent} from './components/about/about.component';
import {TeamComponent} from './components/about/About-Components/team/team.component';
import {AchivementComponent} from './components/about/About-Components/achivement/achivement.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ListSingleAppointmentComponent } from './components/list-single-appointment/list-single-appointment.component';

const routers: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {path: '', component: ProfileComponent},
      {path: 'home', component: ProfileComponent},
      {path: 'appointments', component: PatientPageComponent},
      {path: 'appointments/patient/track', component: TrackAppointmentComponent},
      {path: 'about', component: AboutComponent}
    ],
  }
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ListAppointmentComponent,
    ListSingleAppointmentComponent,
    DoctorComponent,
    AddAppointmentComponent,
    TrackAppointmentComponent,
    FormComponent,
    PatientComponent,
    PatientPageComponent,
    ProfileComponent,
    EditAppointmentComponent,
    EditAppointmentComponent,
    NewsfeedComponent,
    FooterComponent,
    FullComponent,
    BannerComponent,
    BannerNavigationComponent,
    AboutComponent,
    TeamComponent,
    AchivementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IsLoadingModule,
    RouterModule,
    RouterModule.forRoot(routers),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ChatModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    NgbModule,
    ProgressSpinnerModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
