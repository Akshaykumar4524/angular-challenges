import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
})
export class FlattenPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return this.flattenArray(value);
  }

  public flattenArray(arr: any[]): any[] {
    const result: any[] = [];

    arr.forEach((ele) => {
      if (Array.isArray(ele)) {
        this.flattenArray(ele);
      }
      result.push(ele);
    });
    return result;
  }
}
