import jwtDecode from "jwt-decode";
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../../actions/authActions";
import { login } from "../../services/auth.service";
import Notification from "./Notification";
import { useTranslation } from "react-i18next";
import { FormFields } from "../navbar/types";

const initialMessage = "";
const initialFormData = {
  email: "",
  password: ""
};

export const Login: React.FC<any> = ({dispatch, history}) => {
  const { t } = useTranslation();

  const [formData, updateFormData] = React.useState(initialFormData);
  const [message, updateMessage] = React.useState(initialMessage);

  const handleChange = (fieldName: FormFields) => (e) => {
    updateFormData({
      ...formData,

      [fieldName]: e.target.value.trim()
    });
  };

  const handleSubmit = async (): Promise<void> => {
    const { user: { accessToken }, error} = await login(formData);

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
      <h4 className="login-title">{t("login")}</h4>
      {
        message ? <Notification text={message}/> : ''
      }
      <div className="row">
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="email" className="validate" name={FormFields.Email} onChange={handleChange(FormFields.Email)}/>
            <label htmlFor="email">{t(FormFields.Email)}</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="password" type="password" className="validate" name={FormFields.Password} onChange={handleChange(FormFields.Password)}/>
            <label htmlFor="password">{t(FormFields.Password)}</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleSubmit}>{t("submit")}</button>
      </div>
    </div>
  )
}

export default connect()(Login)
