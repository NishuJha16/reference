import React, { useState } from "react";
import "./index.style.scss";
import LoginSideImage from "../../icons/login-left.svg";
import HexawareLogo from "../../icons/logo.svg";
import { Button, TextField, Typography } from "@mui/material";
import { userMetaData } from "../../dummy-data/login";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const isValidUser = userMetaData.filter(
      (user) =>
        (user.email === userName || user.employeeId === userName) &&
        user.password === password
    );
    console.log(isValidUser);
    if (isValidUser.length) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(isValidUser[0]));
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-form">
      <div className="section">
        <img src={LoginSideImage} alt="login" className="avatar" />
      </div>
      <div className="section right">
        <img
          src={HexawareLogo}
          width={70}
          height={70}
          alt="logo"
          className="logo"
        />
        <div className="sub-section">
          <Typography variant="h4">Login</Typography>
          <Typography variant="h7">Login with your credentials</Typography>
        </div>
        <div className="sub-section">
          <TextField
            id="filled-hidden-label-small"
            onChange={(event) => setUserName(event.target.value)}
            value={userName}
            label="Employee ID/ Email"
            variant="outlined"
            size="small"
          />
          <TextField
            id="filled-hidden-label-small"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            label="Password"
            type="password"
            variant="outlined"
            size="small"
          />
          {error && (
            <Typography variant="caption" className="error-text">
              Invalid Credentials
            </Typography>
          )}
        </div>
        <Button variant="contained" onClick={handleLogin}>
          LOG IN
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
