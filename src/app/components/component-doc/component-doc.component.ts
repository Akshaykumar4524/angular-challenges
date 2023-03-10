import { Component, OnInit } from '@angular/core';
import { Accordian } from '../accordion/accordian';
import { LoaderType } from '../loader/models/loader-type';

@Component({
  selector: 'app-component-doc',
  templateUrl: './component-doc.component.html',
  styleUrls: ['./component-doc.component.css'],
})
export class ComponentDocComponent implements OnInit {
  title = 'angular-challenges';
  public accordionItems: Accordian[] = [
    {
      title: 'Example 1',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exampled Content 2',
      isExpanded: false,
    },
  ];
  public progressValue = 25;
  public loaderType: LoaderType = LoaderType.Circular;
  constructor() {}

  ngOnInit(): void {}
}
