import { IUser } from './IUser';
export interface ICourse {
  authors: Array<IUser>;
  creationDate: Date;
  description: string;
  duration: number;
  id?: string;
  title: string;
  topRated: boolean;
}
