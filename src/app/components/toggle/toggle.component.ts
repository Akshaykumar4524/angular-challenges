import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  constructor() {}
  @Input()
  public isOn = false;

  ngOnInit(): void {}

  public toggle() {
    this.isOn = !this.isOn;
  }
}
