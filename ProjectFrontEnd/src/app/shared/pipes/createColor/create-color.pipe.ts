import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createColor'
})
export class CreateColorPipe implements PipeTransform {

  transform(length: number): string {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    
    return "#" + (`${length}000` + color).slice(-3);
  }
}
