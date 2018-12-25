import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../../interfaces/ICourse';

@Pipe({
  name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {
  private compareCourses(course1: ICourse, course2: ICourse) {
    return course2.creationDate.valueOf() - course1.creationDate.valueOf();
  }

  transform(courses: Array<ICourse>): Array<ICourse> {
    return courses.sort(this.compareCourses);
  }

}
