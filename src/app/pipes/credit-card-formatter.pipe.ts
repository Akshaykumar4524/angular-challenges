import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(cardNumber: string): any {
    if (!this.hasRequiredLength(cardNumber)) {
      return 'invalid Crad Length please check and try again';
    }
    if (!this.hasOnlyNumbers(cardNumber)) {
      return 'not a valid number';
    }
    return this.formatCard(cardNumber);
  }

  public hasRequiredLength(cardNumber: string): boolean {
    const visMasterDiscoverVisaCardLength = 15;
    const AmericanExpressCardLength = 16;

    return (
      cardNumber.length == visMasterDiscoverVisaCardLength ||
      cardNumber.length == AmericanExpressCardLength
    );
  }

  public hasOnlyNumbers(cardNumber: string): boolean {
    let numReg = new RegExp(/^[0-9]/);
    const totalNumbersLength = cardNumber
      .split('')
      .filter((char) => numReg.test(char)).length;
    return totalNumbersLength == cardNumber.length;
  }

  public formatCard(cardNumber: string): any {
    return cardNumber.match(/[\s\S]{1,4}/g)?.join('-');
  }
}
