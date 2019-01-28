import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  private MINUTES_TO_HOUR: number = 60;

  public transform(value: number): string {
    const hours = Math.floor(value / this.MINUTES_TO_HOUR);
    const minutes = value % this.MINUTES_TO_HOUR;
    return hours
      ? `${hours}h ${ minutes }min`
      : `${ minutes }min`;
  }

}
