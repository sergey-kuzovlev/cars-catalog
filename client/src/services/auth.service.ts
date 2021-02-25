import axios from "axios";
import { IUser } from "../components/user/types";
import setAuthorizationToken from "./setAuthorizationToken";

const API_URL = 'http://localhost:4000/api/';

const login = async (data): Promise<{user: IUser, error: string}> => {
  const { data: { user, error }} = await axios.post(`${API_URL}login`, data)

  localStorage.setItem('current_user', JSON.stringify(user));
  setAuthorizationToken(user.accessToken);

  return { user, error }
};

const logout = (): void => {
  localStorage.removeItem('current_user');
  setAuthorizationToken(false);
};

const registration = (data) => {
  return axios.post(`${API_URL}registration`, data)
}

const checkAuthToken = async(token): Promise<boolean> => {
  return axios.get(`${API_URL}checktoken?token=${token}`)
}

const getCurrentUser = () => (JSON.parse(localStorage.getItem("current_user") || '{}'))

export {
  login,
  logout,
  checkAuthToken,
  registration,
  getCurrentUser,
};
