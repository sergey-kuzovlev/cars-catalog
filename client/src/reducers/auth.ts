import jwtDecode from "jwt-decode";
import { actionTypes } from "../actions/types";
import { IUser } from "../components/user/types";
import { getToken } from "../services/auth.service";

const token = getToken();

const initialState = token && token !== "undefined"
  ? { isLoggedIn: true, token, user: jwtDecode(token) }
  : { isLoggedIn: false, token: null };

const auth = (state = initialState, action: {type: actionTypes, payload: {user: IUser}}) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.LOGOUT:
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