import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string = '', maxLength: number = 100): string {
    let returnValue: string = value.slice(0, maxLength);
    if (value.length > maxLength) {
      returnValue += '...';
    }
    return returnValue;
  }
}
