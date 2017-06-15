import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercase1'
})
export class Lowercase1Pipe implements PipeTransform {

  transform(value: string): string {
  	if(!value) return value;
  	if(typeof value !== 'string') {
 // 		throw new Error('Invalid pipe value: ', value);
  	}
    return value.toLowerCase();
  }

}
