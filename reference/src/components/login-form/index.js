import React, { useState } from 'react';
import "./index.style.scss";
import LoginSideImage from "../../icons/login-left.svg";
import HexawareLogo from "../../icons/logo.svg";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { userMetaData } from "../../dummy-data/login";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
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
            onChange={(event) => setUserName(event.target.value)}
            value={userName}
            // label="Employee ID/ Email"
            variant="outlined"
            size="small"
          />
          <TextField
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            label="password"
            variant="outlined"
            size="small"
            type={showPassword ? "text" : "password"}
            shrink={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
