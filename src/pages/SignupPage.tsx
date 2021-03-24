import React, { useEffect, useState } from 'react';
import '../styles/components/LoginPage.scss';
import AddUserForm from '../components/UserForms/AddUserForm';
import '../styles/components/LoginPage.scss';

const SignupPage = () => {
  return (
    <div className='login-form m-5'>
        <AddUserForm/>
    </div>
  );
}
export default SignupPage;