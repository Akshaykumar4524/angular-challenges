import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  constructor() {}
  @Input()
  public quote = '';

  @Input()
  public author = '';

  @Input()
  public occupation = '';

  ngOnInit(): void {}
}
