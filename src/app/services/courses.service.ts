import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICourse } from 'src/app/interfaces/ICourse';
import { Course } from 'src/app/models/Course';

import { COURSES_URL } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(
    private http: HttpClient,
  ) {}

  public getCourseList(
    page: number = 1,
    count: number = 10,
    searchStr: string = null
  ): Observable<Array<ICourse>> {
    let url = `${ COURSES_URL }?page=${ page }&count=${ count }`;
    if (searchStr && searchStr !== '') {
      url += `&searchStr=${ searchStr }`;
    }
    
    return this.http.get(url).pipe(map(Course.createCourseList));
  }

  public createCourse(course: ICourse): Promise<ICourse> {
    const data = this.prepareCourseData(course);
    return this.http.post(`${ COURSES_URL }`, data)
      .toPromise()
      .then(Course.createCourse);
  }

  public getCourse(id: string): Promise<ICourse> {
    return this.http.get(`${ COURSES_URL }/${ id }`)
      .toPromise()
      .then(Course.createCourse);
  }

  public updateCourse(id: string, course: ICourse): Promise<Array<object | ICourse>> {
    const data = this.prepareCourseData(course);
    return this.http.post(`${ COURSES_URL }/${ id }`, data)
      .toPromise()
      .then(Course.createCourseList);
  }

  public removeCourse(id: string): Observable<object | ICourse> {
    return this.http.delete(`${ COURSES_URL }/${ id }`);
  }

  private prepareCourseData(course) {
    const {
      authors,
      creationDate,
      description,
      duration,
      title,
    } = course;
    return {
      authors,
      creationDate,
      description,
      duration,
      title,
    };
  }
}
