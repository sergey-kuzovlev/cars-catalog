import jwtDecode from "jwt-decode";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";
import { IUser } from "../interfaces/user.interface";

const token = localStorage.getItem("jwtToken");

const initialState = token && token !== "undefined"
  ? { isLoggedIn: true, token, user: jwtDecode(token) }
  : { isLoggedIn: false, token: null };

const auth = (state = initialState, action: {type: string, payload: {user: IUser}}) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}

export default auth;