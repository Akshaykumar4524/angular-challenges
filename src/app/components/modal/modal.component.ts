import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  @Input()
  public title = '';

  public isOn = true;

  public close() {
    this.isOn = true;
  }

  public open() {
    this.isOn = false;
  }

  ngOnInit(): void {}
}
