import { ICourse } from '../interfaces/ICourse';
import { IUser } from '../interfaces/IUser';

export class Course implements ICourse {

  public static createCourse(data: ICourse): ICourse {
    const {
      id,
      title,
      authors,
      creationDate,
      duration,
      description,
      topRated = false,
    } = data;

    return new Course(id, title, authors, creationDate, duration, description, topRated);
  }

  public static createCourseList(courseList: Array<ICourse> = []) {
    return courseList.map(Course.createCourse);
  }

  constructor(
    public id: string,
    public title: string,
    public authors: Array<IUser> = [],
    public creationDate: Date = new Date(),
    public duration: number,
    public description: string,
    public topRated: boolean,
  ) {
    this.creationDate = new Date(creationDate);
  }

}
