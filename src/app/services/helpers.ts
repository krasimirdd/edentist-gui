import {HttpHeaders} from '@angular/common/http';
import {AuthenticatedUser} from '../models/authenticatedUser';

export class Helpers {
    public static readonly USER = 'currentUser';
    public static readonly AUTHORIZATION = 'authorization';

    static getAuthenticatedUser() {
        return JSON.parse(localStorage.getItem(Helpers.USER));
    }

    static getAuthorization() {
        return localStorage.getItem(Helpers.AUTHORIZATION);
    }

    static stringify(obj: any) {
        return JSON.stringify(obj, null, 2);
    }

    static setAuthorization(authenticatedUser: AuthenticatedUser, headers: HttpHeaders) {
        localStorage.setItem(Helpers.USER, Helpers.stringify(authenticatedUser));
        localStorage.setItem(Helpers.AUTHORIZATION, headers.get(Helpers.AUTHORIZATION));
    }

    static setUser(authenticatedUser: AuthenticatedUser) {
        localStorage.setItem(Helpers.USER, Helpers.stringify(authenticatedUser));
    }

    static doConfirm(): boolean {
        return confirm('Are you sure?');
    }

    static removeTrailing(value: string, toRemove: string) {
        return value.substr(0, value.lastIndexOf(toRemove));
    }
}
