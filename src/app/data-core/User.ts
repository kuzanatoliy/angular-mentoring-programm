import { IUser } from './IUser';

export class User implements IUser {
  id: number;
  firstName: string;
  lastName: string;
}