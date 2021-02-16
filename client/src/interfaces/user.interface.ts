export interface IUser {
  _id: string;
  email: string;
  passwordHash: string;
  role: string;
  username: string;
}

export interface IAuth {
  isLoggedIn: boolean;
  token: string;
  user: IUser
}
