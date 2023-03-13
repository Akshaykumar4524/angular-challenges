import {
  Directive,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Output()
  public debounceClick = new EventEmitter();

  public clicks = new Subject();
  public subscription: Subscription = new Subscription();

  constructor() {}

  public ngOnInit(): void {
    const maxDebounceinMs = 500;
    this.subscription = this.clicks
      .pipe(debounceTime(maxDebounceinMs))
      .subscribe((e: any) => {
        this.debounceClick.emit(e);
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
