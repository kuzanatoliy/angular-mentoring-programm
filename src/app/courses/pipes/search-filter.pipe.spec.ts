import { SearchFilterPipe } from './search-filter.pipe';
import { SearchService } from '../../search/services/search.service';

const COURSES = [{
  id: 1,
  title: "Courses 1",
  duration: 80,
  creationDate: new Date("12.24.2018"),
  description: "Description of courses 1",
  topRated: true
}, {
  id: 2,
  title: "Courses 2",
  duration: 80,
  creationDate: new Date("04.25.2018"),
  description: "Description of courses 2",
  topRated: true
}, {
  id: 3,
  title: "Courses 3",
  duration: 80,
  creationDate: new Date("04.25.2018"),
  description: "Description of courses 3",
  topRated: false
}, {
  id: 4,
  title: "Courses 4",
  duration: 80,
  creationDate: new Date("04.12.2018"),
  description: "Description of courses 4",
  topRated: false
}, {
  id: 5,
  title: "Courses 5",
  duration: 80,
  creationDate: new Date("04.12.2018"),
  description: "Description of courses 5",
  topRated: false
}];

const FILTERED_COURSES = [{
  id: 1,
  title: "Courses 1",
  duration: 80,
  creationDate: new Date("12.24.2018"),
  description: "Description of courses 1",
  topRated: true
}];

describe('SearchFilterPipe', () => {
  let pipe: SearchFilterPipe;
  let searchService: SearchService;

  beforeEach(() => {
    searchService = new SearchService();
    pipe = new SearchFilterPipe(searchService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should check filtering for courses', () => {
    expect(searchService.getValue()).toBe('');
    searchService.setValue('Courses 1');
    expect(searchService.getValue()).toBe('Courses 1');
    expect(pipe.transform(COURSES)).toEqual(FILTERED_COURSES);
  });
});
