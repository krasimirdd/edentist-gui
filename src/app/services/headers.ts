import {environment} from '../../environments/environment';
import {HttpHeaders} from '@angular/common/http';
import {Helpers} from './helpers';

export class Headers {
    public static readonly SECRET = environment.secret;
    public static readonly AUTHORIZATION = 'Authorization';

    public static withAuthorization(auth: boolean): HttpHeaders {
        return auth
            ? new HttpHeaders().set(Headers.AUTHORIZATION, Helpers.getAuthorization())
            : new HttpHeaders().set(Headers.AUTHORIZATION, Headers.SECRET);
    }

}
