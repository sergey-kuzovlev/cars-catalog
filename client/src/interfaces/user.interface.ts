export interface IUser {
  _id: string;
  email: string;
  passwordHash: string;
  role: string;
  username: string;
  accessToken: string;
  tokenExpires: string;
}

export interface IAuth {
  isLoggedIn: boolean;
  token: string;
  user: IUser
}
