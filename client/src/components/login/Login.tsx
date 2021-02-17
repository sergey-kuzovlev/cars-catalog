import jwtDecode from "jwt-decode";
import React from "react";
import { connect } from "react-redux";
import { logout, setCurrentUser } from "../../actions/authActions";
import { login } from "../../services/auth.service";
import Notification from "./Notification";

const initialMessage = "";
const initialFormData = {
  email: "",
  password: ""
};

export const Login: React.FC<any> = ({dispatch, history}) => {
  const [formData, updateFormData] = React.useState(initialFormData);
  const [message, updateMessage] = React.useState(initialMessage);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
  
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = async () => {
    const { accessToken, error} = await login(formData);

    if(accessToken) {
      updateMessage("")
      dispatch(setCurrentUser(jwtDecode(accessToken)));
      history.push("/")
    } else {
      updateMessage(error)
    }
  }

  return (
    <div className="container">
      <h4>Login</h4>
      {
        message ? <Notification text={message}/> : ''
      }
      <div className="row">
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="email" className="validate" name="email" onChange={handleChange}/>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="password" type="password" className="validate" name="password" onChange={handleChange}/>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default connect()(Login)
