import { IUser } from '@/lib/server/models/user';

export type LoginData = {
  login: string;
  password: string;
};

export type ClientUser = Omit<IUser, 'password'>;
