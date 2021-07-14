import React from 'react';

import styles from './LoginForm.module.scss';
import Logo from '../Logo';
import AppTitle from '../AppTitle';
import Button from '../Button';
import FormFields from '../FormFields/FormFields';

export default function LoginForm() {
  return (
    <div className={styles.LoginContainer}>
      <AppTitle />
      <div className={styles.LoginPageContainer}>
        <div className={styles.LoginFormContainer}>
          <Logo />
          <FormFields />
          <Button name="Вход" />
          <Button name="Регистрация" />
        </div>
      </div>
    </div>
  );
}
