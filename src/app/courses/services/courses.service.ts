import { Injectable } from '@angular/core';
import { ICourse } from '../../interfaces/ICourse';
import { Course } from '../../models/Course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private COURSES: Array<ICourse> = Course.createCourseList([{
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

  private nextId = 6;

  constructor() {}

  public getCourseList(): Promise<Array<ICourse>> {
    return Promise.resolve(this.COURSES);
  }

  public createCourse(data: ICourse): Promise<ICourse> {
    data.id = '' + this.nextId;
    this.nextId++;
    const course = data;
    this.COURSES.push(course);

    return Promise.resolve(course);
  }

  public getCourse(id: string): Promise<ICourse> {
    return Promise.resolve(this.COURSES.find((item: ICourse): boolean => item.id === id));
  }

  public updateCourse(id: string, data: ICourse): Promise<Array<ICourse>> {
    const courses: Array<ICourse> = [];
    this.COURSES.forEach((item: ICourse): void => {
      if (item.id === id) {
        item = { ...item, ...data };
        courses.push(item);
      }
    });

    return Promise.resolve(courses);
  }

  public removeCourse(id: string): Promise<string | null> {
    const course: ICourse = this.COURSES.find((item: ICourse): boolean => item.id === id);
    if (course) {
      this.COURSES = this.COURSES.filter((item: ICourse): boolean => item.id !== course.id);
      return Promise.resolve(id);
    }
    return Promise.resolve(null);
  }
}
