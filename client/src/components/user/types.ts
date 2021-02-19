export interface IUser {
  _id: string;
  email: string;
  passwordHash: string;
  role: string;
  username: string;
  accessToken: string;
  tokenExpires: string;
}

export interface IAuthState
{
  auth: {
    isLoggedIn: boolean;
    token: string;
    user: IUser
  }
} 

export interface ILogin {
  email: string;
  password: string;
}
