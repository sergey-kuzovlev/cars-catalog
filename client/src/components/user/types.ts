export interface IUser {
  _id: string;
  email: string;
  role: string;
  username: string;
  tokenExpires: string;
  accessToken?: string;
  passwordHash?: string;
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
