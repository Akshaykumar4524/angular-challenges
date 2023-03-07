import { Component } from '@angular/core';
import { Accordian } from './components/accordion/accordian';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
}
