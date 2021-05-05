import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Article} from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  private getArticlesUrl = 'http://localhost:8080/api/newsfeed/top';

  constructor(private httpClient: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.getArticlesUrl)
      .pipe(
        source => source
      );
  }


}
