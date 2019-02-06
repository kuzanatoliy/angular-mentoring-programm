import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  public id: string;
  public firstName: string;
  public lastName: string;
}
