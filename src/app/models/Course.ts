import { ICourse } from '../interfaces/ICourse';

export class Course implements ICourse {
  constructor(
    public id: number,
    public title: string,
    public creationDate: Date,
    public duration: number,
    public description: string,
    public topRated: boolean,
  ) {}
  
  static createCourse (data: ICourse) {
    const {
      id,
      title,
      creationDate,
      duration,
      description,
      topRated = false,
    } = data;

    return new Course(id, title, creationDate, duration, description, topRated);
  }

  static createCourseList(courseList: Array<ICourse> = []) {
    return courseList.map(Course.createCourse);
  }
}
