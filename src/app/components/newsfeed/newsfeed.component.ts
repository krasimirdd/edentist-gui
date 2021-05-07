import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NewsfeedService} from '../../services/newsfeed.service';
import {Article} from '../../models/article';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  $newsfeed: Observable<Article[]>;
  showLoader: boolean;
  page = 1;
  pageSize = 12;
  constructor(private newsfeedService: NewsfeedService) {
  }

  ngOnInit(): void {
    this.showLoader = true;
    this.$newsfeed = this.newsfeedService.getArticles();

    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }

  followUrl(url: string): void {
    window.open(url);
  }
}
