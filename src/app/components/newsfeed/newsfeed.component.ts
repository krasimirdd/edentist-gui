import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NewsfeedService} from '../../services/newsfeed.service';
import {Article} from '../../models/article';
import {HealthService} from '../../services/health.service';

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

    constructor(private newsfeedService: NewsfeedService, private healthService: HealthService) {
    }

    ngOnInit() {
        this.showLoader = true;
        this.$newsfeed = this.newsfeedService.getArticles();

        if (!this.healthService.isServerUp()) {
            this.showLoader = false;
        }
        setTimeout(() => {
            this.showLoader = false;
        }, 2000);
    }


    followUrl(url: string) {
        window.open(url);
    }
}
