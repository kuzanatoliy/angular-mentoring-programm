import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';

import { CoursesService } from './courses.service';

import { ICourse } from 'src/app/interfaces/ICourse';

import { Course } from 'src/app/models/Course';

import { COURSES_URL } from 'src/app/constants/urls';

describe('CoursesService', () => {
  const COURSES: Array<ICourse> = [{
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
  }];

  let service: CoursesService;
  let http: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ CoursesService ],
  }));

  beforeEach(() => {
    service = TestBed.get(CoursesService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCourseList should return list of courses', () => {
    service.getCourseList(1, 5)
      .subscribe({
        next: (courses) => expect(courses).toEqual(Course.createCourseList(COURSES)),
      });
    
    const req = http.expectOne(`${ COURSES_URL }?page=1&count=5`);
    expect(req.request.method).toEqual('GET');
    req.flush(COURSES);
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

    service.createCourse(course)
      .subscribe({
        next: (createdCourse) => expect(createdCourse).toEqual(Course.createCourse(course)),
      });

    const req = http.expectOne(`${ COURSES_URL }`);
    expect(req.request.method).toEqual('POST');
    req.flush(course);  
  });

  it('getCourse should return course item', async () => {
    service.getCourse(COURSES[0].id)
      .then((course) => expect(course).toEqual(Course.createCourse(COURSES[0])));

    const req = http.expectOne(`${ COURSES_URL }/${ COURSES[0].id }`);
    expect(req.request.method).toEqual('GET');
    req.flush(COURSES[0]);
  });

  it('removeCourse should return empty object', async () => {
    service.removeCourse(COURSES[0].id)
      .subscribe({
        next: (course) => expect(course).toEqual({}),
      });

    const req = http.expectOne(`${ COURSES_URL }/${ COURSES[0].id }`);
    expect(req.request.method).toEqual('DELETE');
    req.flush({});
  })
});
