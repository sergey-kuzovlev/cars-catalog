import axios from "axios";
import setAuthorizationToken from "./setAuthorizationToken";

const API_URL = 'http://localhost:4000/api/';

const login = async (data): Promise<{accessToken: string, error: string}> => {
  const { data: { accessToken, error }} = await axios.post(`${API_URL}login`, data)

  localStorage.setItem('jwtToken', accessToken);
  setAuthorizationToken(accessToken);

  return { accessToken, error }
};

const logout = (): void => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
};

const registration = (data) => {
  return axios.post(`${API_URL}registration`, data)
}

const checkAuthToken = async(token): Promise<boolean> => {
  return axios.get(`${API_URL}checktoken?token=${token}`)
}

const getToken = () => {
  return localStorage.getItem("jwtToken");
}

export {
  login,
  logout,
  checkAuthToken,
  registration,
  getToken,
};
