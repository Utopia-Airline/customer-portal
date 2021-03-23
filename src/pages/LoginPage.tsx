import React from 'react';
import LoginForm from "../components/LoginForm";
import '../styles/components/LoginPage.scss';

const LoginPage = () => {
  return (
    <div className='login-page'>
      <div className='login-form m-5'><LoginForm/></div>
    </div>

  );
}

export default LoginPage;
