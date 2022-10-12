import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class removeSpaces implements PipeTransform {
  transform(str: string): string {
    const filterStr = str.replace(/ /g,'');
    return filterStr || '';
  }
}
