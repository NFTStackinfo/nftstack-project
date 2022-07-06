import React from 'react';
import {LoginStyle} from './Login.style';
import { Button, Footer, HeaderLogo } from "components/UIKit"


const Login = () => {
  return (
    <LoginStyle>
      <img src="assets/Auth/pattern-1.png" className="pattern pattern-1" alt=""/>
      <img src="assets/Auth/pattern-2.png" className="pattern pattern-2" alt=""/>
      <div className="header-inner">
        <HeaderLogo />
        <div className="main-section">
          <div className="login-box">
            <h3 className='font-semibold'>CREATE AN ACCOUNT WITH METAMASK</h3>
            <p className='text'>Connect a wallet to continue</p>
            <Button
              prefixIcon="metamask"
              variant="secondary"
              iconColored
              width="100%"
              onClick={() => console.log('asd')}
            >
              Connect metamask
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </LoginStyle>
  );
};

export default Login;
