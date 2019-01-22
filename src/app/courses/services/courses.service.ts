import { Injectable } from '@angular/core';
import { ICourse } from '../../interfaces/ICourse';
import { Course } from '../../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private COURSES: Array<ICourse> = Course.createCourseList([{
    id: '1',
    title: 'Courses 1',
    duration: 80,
    creationDate: new Date('12.24.2018'),
    description: 'Description of courses 1',
    topRated: true
  }, {
    id: '2',
    title: 'Courses 2',
    duration: 80,
    creationDate: new Date('04.25.2018'),
    description: 'Description of courses 2',
    topRated: true
  }, {
    id: '3',
    title: 'Courses 3',
    duration: 80,
    creationDate: new Date('04.25.2018'),
    description: 'Description of courses 3',
    topRated: false
  }, {
    id: '4',
    title: 'Courses 4',
    duration: 80,
    creationDate: new Date('04.12.2018'),
    description: 'Description of courses 4',
    topRated: false
  }, {
    id: '5',
    title: 'Courses 5',
    duration: 80,
    creationDate: new Date('04.12.2018'),
    description: 'Description of courses 5',
    topRated: false
  }]);

  private nextId = 6;

  constructor() {}

  getCourseList() {
    return Promise.resolve(this.COURSES);
  }

  createCourse(data: ICourse) {
    data.id = '' + this.nextId;
    this.nextId++;
    const course = data;
    this.COURSES.push(course);
    
    return Promise.resolve(course);
  }

  getCourse(id: string) {
    return Promise.resolve(this.COURSES.find(item => item.id === id));
  }

  updateCourse(id: string, data: ICourse) {
    const courses: Array<ICourse> = []
    this.COURSES.forEach(item => {
      if(item.id === id) {
        item = { ...item, ...data };
        courses.push(item);
      }
    });

    return Promise.resolve(courses);
  }

  removeCourse(id: string) {
    const course = this.COURSES.find(item => item.id === id);
    if(course) {
      this.COURSES = this.COURSES.filter(item => item.id !== course.id);
      return Promise.resolve(id);
    }
    return Promise.resolve(null);
  }
}
