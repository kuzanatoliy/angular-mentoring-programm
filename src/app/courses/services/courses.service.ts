import { Injectable } from '@angular/core';
import { ICourse } from 'src/app/interfaces/ICourse';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private COURSES: Array<ICourse> = [{
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

  constructor() { }

  getCourses() {
    return Promise.resolve(this.COURSES);
  }
}
