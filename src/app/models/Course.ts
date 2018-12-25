import { ICourse } from '../interfaces/ICourse';

export class Course implements ICourse {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
}
