import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createPath'
})
export class CreatePathPipe implements PipeTransform {

  transform(iconName: string): string {
    const path = `./../../../../assets/${iconName}`
    
    return path;
  }
}
