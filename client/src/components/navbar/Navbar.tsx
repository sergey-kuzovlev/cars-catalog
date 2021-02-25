import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkAuthToken, logout } from '../../services/auth.service';
import logo from '../../logo.png';
import { IAuthState } from '../user/types';
import { getCurrentUser } from '../../services/auth.service';

export const Navbar: React.FC<any> = () => {
  const { auth } = useSelector((state: IAuthState) => state);

  React.useEffect(() => {
    const getAuthToken = async () => {
      const { accessToken } = getCurrentUser();
      if(accessToken && !await checkAuthToken(accessToken)) {
        logout()
      }
    };

    getAuthToken()
  }, []);

  return (
		<nav className="blue-grey">
      <div className="nav-wrapper blue-grey container">
        <a href="/#" className="brand-logo"><img src={logo} alt="logo"/></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        {
          auth.isLoggedIn && auth.user ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {auth.user.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={() => logout()}>
                  Log Out
                </a>
              </li>
            </div>
          ) : 
          (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/registration"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>            
          )}
          </ul>
      </div>
    </nav>
  );
};

export default connect()(Navbar)