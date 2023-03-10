import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.css'],
})
export class CreditCardInputComponent implements OnInit {
  public inputDiv = document.getElementById('input-div');
  constructor() {}
  private readOnly = false;

  @Input()
  public creditcardNumbers = '';

  public get isReadOnly() {
    return this.readOnly;
  }

  @Input()
  public set isReadOnly(value: boolean) {
    this.readOnly = value;
    this.creditcardNumbers = this.formatReadOnlyCCNum(this.creditcardNumbers);
  }

  public formatReadOnlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((part, index) => {
      if (this.readOnly) {
        if (index == parts.length - 1) {
          return part;
        }
        return 'XXXX';
      } else {
        return part;
      }
    });
    return onlyLast4Shown.join('-');
  }

  onChange(event: any) {
    this.creditcardNumbers = this.formatReadOnlyCCNum(this.creditcardNumbers);
  }
  ngOnInit(): void {}
}
