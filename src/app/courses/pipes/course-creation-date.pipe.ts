import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseCreationDate'
})
export class CourseCreationDatePipe implements PipeTransform {

  transform(value: Date): string {
    const month = (value.getMonth() + 1).toString().padStart(2, '0');
    const date = value.getDate().toString().padStart(2, '0');
    const year = value.getFullYear();
    return `${month}.${date}.${year}`;
  }

}