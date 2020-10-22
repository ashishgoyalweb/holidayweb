import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";
import { RouteConstants } from "../../utilities/constants";
import "./login.scss";
import { handleLoginSuccess } from "./loginAction";

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.LoginReducer.isLoggedIn);

  useEffect(() => {
    dispatch(handleLoginSuccess())
  }, [dispatch])

  const handleLogin = () => {
    dispatch(handleLoginSuccess())
  }
  if (isLoggedIn) {
    return <Redirect to={RouteConstants.admin} />;
  } else {
    return (
      <div className="login">
        <div className="login-container">
          <h2>Sign In</h2>
          <div className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input onClick={handleLogin} type="button" value="log in" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
