import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.css'],
})
export class TopOfPageComponent implements OnInit {
  constructor(private viewPortScroller: ViewportScroller) {}
  public isShown = false;

  ngOnInit(): void {}

  @HostListener('window:scroll') onWindowScroll() {
    const yCoOrdinate = this.viewPortScroller.getScrollPosition()[1];

    this.isShown = yCoOrdinate > 400;
  }

  public goUp() {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}
