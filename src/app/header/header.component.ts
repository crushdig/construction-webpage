import {Component, NgZone, OnInit} from '@angular/core';

import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/overlay';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOnTop = true;

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.scrollDispatcher.scrolled().subscribe((event: CdkScrollable) => {
      const scroll = event.measureScrollOffset('top');
      let newIsOnTop = this.isOnTop;

      if (scroll > 0) {
        newIsOnTop = false;
      } else {
        newIsOnTop = true;
      }

      if (newIsOnTop !== this.isOnTop) {
        this.zone.run(() => {
          this.isOnTop = newIsOnTop;
        });
      }
    });
  }
}
