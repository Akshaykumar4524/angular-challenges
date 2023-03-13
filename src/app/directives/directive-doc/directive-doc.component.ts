import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-doc',
  templateUrl: './directive-doc.component.html',
  styleUrls: ['./directive-doc.component.css'],
})
export class DirectiveDocComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public log() {
    console.log('Hi World');
  }
}
