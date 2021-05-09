import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Article} from '../models/article';
import {Routes} from './routes';

@Injectable({
    providedIn: 'root'
})
export class NewsfeedService {

    constructor(private httpClient: HttpClient) {
    }

    getArticles(): Observable<Article[]> {
        return this.httpClient.get<Article[]>(Routes.ARTICLES)
            .pipe(
                source => source
            );
    }


}
