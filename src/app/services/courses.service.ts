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
    searchStr: string = null,
  ): Observable<Array<ICourse>> {
    let url = `${ COURSES_URL }?page=${ page }&count=${ count }`;
    if (searchStr && searchStr !== '') {
      url += `&searchStr=${ searchStr }`;
    }

    return this.http.get(url).pipe(map(Course.createCourseList));
  }

  public createCourse(course: ICourse): Observable<ICourse> {
    const data = this.prepareCourseData(course);

    return this.http.post(`${ COURSES_URL }`, data)
      .pipe(map(Course.createCourse));
  }

  public getCourse(id: string): Observable<ICourse> {
    return this.http.get(`${ COURSES_URL }/${ id }`)
      .pipe(map(Course.createCourse));
  }

  public updateCourse(id: string, course: ICourse): Observable<Array<object | ICourse>> {
    const data = this.prepareCourseData(course);

    return this.http.post(`${ COURSES_URL }/${ id }`, data)
      .pipe(map(Course.createCourseList));
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
