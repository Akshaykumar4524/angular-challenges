import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm',
})
export class FilterTermPipe implements PipeTransform {
  transform(items: string[], searchTerm: string=''): string[] {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }
}
