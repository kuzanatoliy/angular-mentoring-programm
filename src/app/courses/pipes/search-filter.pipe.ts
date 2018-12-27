import { Pipe, PipeTransform } from '@angular/core';

import { SearchService } from '../../search/services/search.service';
import { ICourse } from '../../interfaces/ICourse';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  
  constructor(private searchService: SearchService) {}

  private checkCourseTitle(course: ICourse, subString: string) {
    return !(course.title.toLowerCase().indexOf(subString) < 0);
  }

  transform(courses: Array<ICourse>): Array<ICourse> {
    const searchString = this.searchService.getValue().toLowerCase();
    return searchString
      ? courses.filter(item => this.checkCourseTitle(item, searchString))
      : courses;
  }

}
