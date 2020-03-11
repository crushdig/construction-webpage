import {AfterViewInit, Component, HostBinding, NgZone, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {fromEvent} from 'rxjs';
import {distinctUntilChanged, filter, map, pairwise, share, throttleTime} from 'rxjs/operators';
import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/overlay';


enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  isOnTop = true;

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private zone: NgZone
  ) {}
  // private isVisible = true;
  //
  // @HostBinding('@toggle')
  // get toggle(): VisibilityState {
  //   return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  // }

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

  // ngAfterViewInit() {
  //   const scroll$ = fromEvent(window, 'scroll').pipe(
  //     throttleTime(10),
  //     map(() => window.pageYOffset),
  //     pairwise(),
  //     map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
  //     distinctUntilChanged(),
  //     share()
  //   );
  //
  //   const scrollUp$ = scroll$.pipe(
  //     filter(direction => direction === Direction.Up)
  //   );
  //
  //   const scrollDown = scroll$.pipe(
  //     filter(direction => direction === Direction.Down)
  //   );
  //
  //   scrollUp$.subscribe(() => (this.isVisible = true));
  //   scrollDown.subscribe(() => (this.isVisible = false));
  // }

}
