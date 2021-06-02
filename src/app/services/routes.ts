import {environment} from '../../environments/environment';

export class Routes {

    public static readonly API_USER = environment.serverUrl + '/api/user';
    public static readonly API_DOCTORS = environment.serverUrl + '/api/doctors';
    public static readonly API_SERVICES = environment.serverUrl + '/api/services';

    public static readonly ARTICLES = environment.serverUrl + '/newsfeed/top';
    public static readonly APPOINTMENTS = environment.serverUrl + '/appointments';
    public static readonly SINGLE_APPOINTMENT = environment.serverUrl + '/appointment';
    public static readonly ARCHIVED_APPOINTMENTS = environment.serverUrl + '/appointments/archived';

    public static readonly SERVER_HEALTH = environment.serverUrl + '/actuator/health';

}
