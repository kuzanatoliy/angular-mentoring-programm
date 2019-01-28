import { Pipe, PipeTransform } from '@angular/core';

import { SearchService } from '../../search/services/search.service';

import { ICourse } from '../../interfaces/ICourse';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {

  constructor(private searchService: SearchService) {}

  public transform(courses: Array<ICourse>): Array<ICourse> {
    const searchString: string = this.searchService.getValue().toLowerCase();

    return searchString
      ? courses.filter((item: ICourse): boolean => this.checkCourseTitle(item, searchString))
      : courses;
  }

  private checkCourseTitle(course: ICourse, subString: string): boolean {
    return !(course.title.toLowerCase().indexOf(subString) < 0);
  }

}
