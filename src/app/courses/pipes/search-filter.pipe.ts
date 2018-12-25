import { Pipe, PipeTransform } from '@angular/core';

import { SearchService } from '../../search/services/search.service';
import { ICourse } from '../../interfaces/ICourse';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  
  constructor(private searchService: SearchService) {}

  transform(courses: Array<ICourse>): Array<ICourse> {
    const searchString = this.searchService.getValue();
    return searchString
      ? courses.filter(item => item.title === searchString)
      : courses;
  }

}
