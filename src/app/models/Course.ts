import { ICourse } from '../interfaces/ICourse';

export class Course implements ICourse {

  public static createCourse(data: ICourse): ICourse {
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

  public static createCourseList(courseList: Array<ICourse> = []) {
    return courseList.map(Course.createCourse);
  }

  constructor(
    public id: string,
    public title: string,
    public creationDate: Date,
    public duration: number,
    public description: string,
    public topRated: boolean,
  ) {}

}
