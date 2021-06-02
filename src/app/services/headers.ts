import {environment} from '../../environments/environment';
import {HttpHeaders} from '@angular/common/http';
import {Helpers} from './helpers';
import {CryptoJS} from 'node_modules/crypto-js/crypto-js.js';
import 'crypto-js';

export class Headers {
    public static readonly SECRET = environment.secret;
    public static readonly AUTHORIZATION = 'Authorization';

    public static withAuthorization(auth: boolean): HttpHeaders {
        return auth
            ? new HttpHeaders().set(Headers.AUTHORIZATION, Helpers.getAuthorization())
            : new HttpHeaders().set(Headers.AUTHORIZATION, CryptoJS.AES.encrypt(Headers.SECRET, Headers.SECRET, {
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC
            }));
    }

}
