import { LOGIN, LOGIN_SUCCESS, LOGOUT } from './types';

export function setCurrentUser(user) {
  delete user.passwordHash
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user
    },
  };
}

export const logout = () => {
  return {
    type: LOGOUT,
    payload: {
      user: {}
    },
  };
}

export const login = (data) => ({
  type: LOGIN,
  payload: data,
});