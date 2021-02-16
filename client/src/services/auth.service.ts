import axios from "axios";
import setAuthorizationToken from "./setAuthorizationToken";

const API_URL = 'http://localhost:4000/api/auth/';

const login = async (data) => {
  const { data: { accessToken }} = await axios.post(API_URL, data)

  localStorage.setItem('jwtToken', accessToken);
  setAuthorizationToken(accessToken);

  return accessToken
};

const logout = () => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
};

export {
  login,
  logout,
};
