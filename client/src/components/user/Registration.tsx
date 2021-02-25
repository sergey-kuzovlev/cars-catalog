import React from "react";
import { connect } from "react-redux";
import { ILogin } from "./types";
import Notification from "./Notification";
import { email } from "./reg.exp";

const initialMessage: string = "";
const initialFormData: ILogin = {
  email: "",
  password: ""
};

export const Registration: React.FC<any> = ({dispatch, history}) => {
  const [formData, updateFormData] = React.useState(initialFormData);
  const [message, updateMessage] = React.useState(initialMessage);

  const handleChange = (e): void => {
    validate(e.target)
    updateFormData({
      ...formData,
  
      [e.target.name]: e.target.value.trim()
    });
  };

  const validate = (element): void => {
    switch (element.name) {
      case "email":
        const reg = email;
        if(!reg.test(String(element.value).toLowerCase())) updateMessage('Please insert a valid email address')
        else updateMessage('')
        break;
      case "username":
        if(element.value.length < 3) updateMessage('The Usename must be at least 3 characters')
        else updateMessage('')
        break;
      case "password":
        if(element.value.length < 3) updateMessage('The Password must be at least 3 characters')
        else updateMessage('')
        break;
      case "confirm":
        if(element.value !== formData.password) updateMessage('Confirm password does not match')
        else updateMessage('')
        break;
      default:
        break;
    }
  }

  const handleSubmit = async () => {
    // const result = await registration(formData);
  }

  return (
    <div className="container">
      <h4>Registration</h4>
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
            <input id="username" type="text" className="validate" name="username" onChange={handleChange}/>
            <label htmlFor="username">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="password" type="password" className="validate" name="password" onChange={handleChange}/>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="confirm" type="password" className="validate" name="confirm" onChange={handleChange}/>
            <label htmlFor="confirm">Confirm Pasword</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default connect()(Registration)
