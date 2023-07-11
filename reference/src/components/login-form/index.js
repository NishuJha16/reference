import React from 'react'
import "./index.styles.scss";
import LoginSideImage from "../../icons/login-left.svg";
import HexawareLogo from "../../icons/logo.svg";
import { Button, TextField, Typography } from '@mui/material';


const LoginForm
 = () => {
  return (
    <div className='login-form'>
        <div className='section'>
            <img src={LoginSideImage} alt="login"/>
        </div>
         <div className='section'>
            <img src={HexawareLogo} width={70} height={70} alt="logo" className="logo"/>

            <div className='sub-section'>
              <Typography variant='h3'>Login</Typography>
              <Typography variant='h4'>Login with your credentials</Typography>
            </div>
             <div className='sub-section'>
            <TextField id="filled-hidden-label-small" defaultValue="Small" label="Employee ID/ Email" variant="outlined" size="small"/>
            <TextField id="filled-hidden-label-small" defaultValue="Small" label="password" type='password' variant="outlined" size="small"/>
            </div>
            <Button variant='contained'>LOG IN</Button>
        </div>
    </div>
  )
}

export default LoginForm
