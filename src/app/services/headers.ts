import {environment} from '../../environments/environment';
import {HttpHeaders} from '@angular/common/http';
import {Helpers} from './helpers';
// import * as CryptoAES from 'crypto-js/aes';
import * as shajs from 'sha.js';

export class Headers {
    public static readonly SECRET = environment.secret;
    public static readonly AUTHORIZATION = 'Authorization';

    public static withAuthorization(auth: boolean): HttpHeaders {
        const cipherText = shajs('sha256').update(this.SECRET).digest('hex');
        console.log(cipherText);
        return auth
            ? new HttpHeaders().set(Headers.AUTHORIZATION, Helpers.getAuthorization())
            : new HttpHeaders().set(Headers.AUTHORIZATION, cipherText);
    }

}
