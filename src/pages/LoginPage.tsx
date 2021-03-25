import React, {useEffect, useState} from 'react';
import LoginForm from "../components/LoginForm";
import '../styles/components/LoginPage.scss';
import ErrorToast from "../components/shared/ErrorToast";

const LoginPage = () => {
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log('error', error);
  }, [error])
  return (
    <div className='login-page'>
      <div className='login-form m-5'><LoginForm/></div>
    </div>
  );
};

export default LoginPage;
