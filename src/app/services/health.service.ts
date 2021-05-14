import {HttpClient} from '@angular/common/http';
import {Routes} from './routes';
import {Injectable} from '@angular/core';

class HealthResponse {
    status: string;
}

@Injectable({
    providedIn: 'root'
})
export class HealthService {
    constructor(private httpClient: HttpClient) {
    }

    public isServerUp(): boolean {
        let result = false;

        this.httpClient.get<HealthResponse>(Routes.SERVER_HEALTH)
            .subscribe(health => {
                result = Boolean(health.status);
            });

        return result;
    }
}
