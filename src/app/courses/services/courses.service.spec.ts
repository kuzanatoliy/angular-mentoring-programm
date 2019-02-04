import { CoursesService } from './courses.service';

import { ICourse } from '../../interfaces/ICourse';

import { Course } from '../../models/Course';

describe('CoursesService', () => {
  const COURSES: Array<ICourse> = Course.createCourseList([{
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

  let service: CoursesService;

  beforeEach(() => service = new CoursesService());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCourseList should return list of courses', async () => {
    const courses: Array<ICourse> = await service.getCourseList();
    expect(courses).toEqual(COURSES);
  });

  it('createCourse should return new course', async () => {
    const course: ICourse = {
      authors: [],
      creationDate: new Date('04.12.2018'),
      description: 'Description of courses 5',
      duration: 80,
      id: '6',
      title: 'Courses 5',
      topRated: false,
    };
    const newCourse: ICourse = await service.createCourse(course);
    expect(course).toEqual(newCourse);
  });

  it('getCourse should return undefined', async () => {
    const course = await service.getCourse('10');
    expect(course).toBeUndefined();
  });

  it('getCourse should return course item', async () => {
    const course = await service.getCourse(COURSES[0].id);
    expect(course).toEqual(COURSES[0]);
  });

  it('updateCourse should return updated courses list', async () => {
    const courseList = await service.updateCourse(COURSES[0].id, { ...COURSES[0], duration: 100 });
    expect(courseList.length).toBe(1);
    expect(courseList[0].duration).toEqual(100);
  });

  it('removeCourse should return null', async () => {
    const course = await service.removeCourse('10');
    expect(course).toBeNull();
  });

  it('removeCourse should return id', async () => {
    const course = await service.removeCourse(COURSES[0].id);
    expect(course).toEqual(COURSES[0].id);
  });
});
