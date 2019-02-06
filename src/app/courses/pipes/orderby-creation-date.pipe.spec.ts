import { OrderByCreationDatePipe } from './orderby-creation-date.pipe';

import { Course } from '../../models/Course';

const SORTED_COURSES = Course.createCourseList([{
  authors: [{
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  }],
  creationDate: new Date('12.24.2018'),
  description: 'Description of courses 1',
  duration: 80,
  id: '1',
  title: 'Courses 1',
  topRated: true,
}, {
  authors: [{
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  }],
  creationDate: new Date('04.25.2018'),
  description: 'Description of courses 2',
  duration: 80,
  id: '2',
  title: 'Courses 2',
  topRated: true,
}, {
  authors: [{
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  }],
  creationDate: new Date('04.25.2018'),
  description: 'Description of courses 3',
  duration: 80,
  id: '3',
  title: 'Courses 3',
  topRated: false,
}, {
  authors: [{
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  }],
  creationDate: new Date('04.12.2018'),
  description: 'Description of courses 4',
  duration: 80,
  id: '4',
  title: 'Courses 4',
  topRated: false,
}, {
  authors: [{
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  }],
  creationDate: new Date('04.12.2018'),
  description: 'Description of courses 5',
  duration: 80,
  id: '5',
  title: 'Courses 5',
  topRated: false,
}]);

const COURSES = Course.createCourseList([{
  authors: [{
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  }],
  creationDate: new Date('12.24.2018'),
  description: 'Description of courses 1',
  duration: 80,
  id: '1',
  title: 'Courses 1',
  topRated: true,
}, {
  authors: [{
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  }],
  creationDate: new Date('04.12.2018'),
  description: 'Description of courses 4',
  duration: 80,
  id: '4',
  title: 'Courses 4',
  topRated: false,
}, {
  authors: [{
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  }],
  creationDate: new Date('04.12.2018'),
  description: 'Description of courses 5',
  duration: 80,
  id: '5',
  title: 'Courses 5',
  topRated: false,
}, {
  authors: [{
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  }],
  creationDate: new Date('04.25.2018'),
  description: 'Description of courses 2',
  duration: 80,
  id: '2',
  title: 'Courses 2',
  topRated: true,
}, {
  authors: [{
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  }],
  creationDate: new Date('04.25.2018'),
  description: 'Description of courses 3',
  duration: 80,
  id: '3',
  title: 'Courses 3',
  topRated: false,
}]);

describe('OrderByCreationDatePipe', () => {
  let pipe: OrderByCreationDatePipe;

  beforeEach(() => {
    pipe = new OrderByCreationDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should check courses sorting', () => {
    expect(pipe.transform(COURSES)).toEqual(SORTED_COURSES);
  });
});
