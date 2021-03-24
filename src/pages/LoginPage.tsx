import React from 'react';
import LoginForm from "../components/LoginForm";
import '../styles/components/LoginPage.scss';
import LoadingModal from "../components/shared/LoadingModal";

const LoginPage = () => {
  return (
    <div className='login-page'>
      <div className='login-form m-5'><LoginForm/></div>
      <LoadingModal/>
    </div>
  );
}

export default LoginPage;
