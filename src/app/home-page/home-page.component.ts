import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ContentService} from '../shared/services/content.service';
import {ActivatedRoute} from '@angular/router';
import {fromEvent} from 'rxjs';
import {distinctUntilChanged, filter, map, pairwise, share, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // page = {
  //   title: 'Home',
  //   subtitle: 'Welcome Home',
  //   content: 'Insert Content Here',
  //   image: 'assets/downtown-city-skyline.jpg'
  // }

  private page: { image: string; subtitle: string; title: string; content: string };

  constructor(private contentService: ContentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const pageData = this.route.snapshot.data.page;
    this.page = this.contentService.pageObjects.home;
  }


}
