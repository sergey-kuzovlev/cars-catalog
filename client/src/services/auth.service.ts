import axios from "axios";
import setAuthorizationToken from "./setAuthorizationToken";

const API_URL = 'http://localhost:4000/api/';

const login = async (data) => {
  const { data: { accessToken, error }} = await axios.post(`${API_URL}login`, data)

  localStorage.setItem('jwtToken', accessToken);
  setAuthorizationToken(accessToken);

  return { accessToken, error }
};

const logout = () => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
};

const checkAuthToken = async(token): Promise<boolean> => {
  return axios.get(`${API_URL}checktoken?token=${token}`)
}

export {
  login,
  logout,
  checkAuthToken,
};
