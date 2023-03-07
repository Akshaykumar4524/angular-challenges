import { Component, Input, OnInit } from '@angular/core';
import { Accordian } from '../accordion/accordian';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  constructor() {}
  @Input()
  public accordianItems: Accordian[] = [];
  ngOnInit(): void {}

  public toggle(item: Accordian) {
    item.isExpanded = !item.isExpanded;
  }
}
