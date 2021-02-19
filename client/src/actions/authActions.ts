import { ILogin, IUser } from '../components/user/types';
import { actionTypes } from './types';

export function setCurrentUser(user): { type: actionTypes, payload: { user: IUser } } {
  delete user.passwordHash
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      user
    },
  };
}

export const logout = (): { type: actionTypes, payload: { user: object } } => {
  return {
    type: actionTypes.LOGOUT,
    payload: {
      user: {}
    },
  };
}

export const login = (data: ILogin): { type: actionTypes, payload: ILogin } => ({
  type: actionTypes.LOGIN,
  payload: data,
});