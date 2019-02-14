import { Injectable } from '@angular/core';

import { ICourse } from '../../interfaces/ICourse';
import { Course } from '../../models/Course';

import { RequestService } from '../../shared/services/request.service';

import { COURSES_URL } from '../../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private COURSES: Array<ICourse> = [{
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

  private nextId = 6;

  constructor(
    private request: RequestService,
  ) {}

  public getCourseList(page: number = 1, count: number = 10, searchStr: string = null): Promise<Array<ICourse>> {
    return this.request.get(COURSES_URL, { page, count, searchStr })
      .then((data: Array<ICourse>) => Course.createCourseList(data));
  }

  public createCourse(course: ICourse): Promise<ICourse> {
    const {
      authors,
      creationDate,
      description,
      duration,
      title,
    } = course;
    const data = {
      authors,
      creationDate,
      description,
      duration,
      title,
    };
    return this.request.post(`${ COURSES_URL }`, data)
      .then((newCourse: ICourse): ICourse => Course.createCourse(newCourse));
  }

  public getCourse(id: string): Promise<ICourse> {
    return this.request.get(`${ COURSES_URL }/${ id }`)
      .then((course: ICourse): ICourse => Course.createCourse(course));
  }

  public updateCourse(id: string, course: ICourse): Promise<Array<object | ICourse>> {
    const {
      authors,
      creationDate,
      description,
      duration,
      title,
    } = course;
    const upData = {
      authors,
      creationDate,
      description,
      duration,
      title,
    };
    return this.request.post(`${ COURSES_URL }/${ id }`, upData)
      .then((data: Array<ICourse>) => Course.createCourseList(data));
  }

  public removeCourse(id: string): Promise<object | ICourse> {
    return this.request.delete(`${ COURSES_URL }/${ id }`);
  }
}
