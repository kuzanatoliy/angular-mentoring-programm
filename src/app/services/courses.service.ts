import { Injectable } from '@angular/core';

import { ICourse } from 'src/app/interfaces/ICourse';
import { Course } from 'src/app/models/Course';

import { RequestService } from './request.service';

import { COURSES_URL } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
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
