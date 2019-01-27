import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  MINUTES_TO_HOUR: number = 60; 

  transform(value: number): string {
    const hours = Math.floor(value / this.MINUTES_TO_HOUR);
    const minutes = value % this.MINUTES_TO_HOUR;
    return hours
      ? `${hours}h ${ minutes }min`
      : `${ minutes }min`;
  }

}
