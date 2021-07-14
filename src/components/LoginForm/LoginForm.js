import React from 'react';

import './LoginForm.scss';
import Logo from '../Logo';
import AppTitle from '../AppTitle';
import Button from '../Button';
import FormFields from '../FormFields/FormFields';

export default function LoginForm() {
  return (
    <div className="Login-container">
      <AppTitle />
      <div className="Login-page-container">
        <div className="Login-Form-container">
          <Logo />
          <FormFields />
          <Button>Вход</Button>
          <Button>Регистрация</Button>
        </div>
      </div>
    </div>
  );
}
