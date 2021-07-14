import React from 'react';

import logo from '../../assets/images/Logo.svg';
import styles from './FormFields.module.scss';

export default function FormFields() {
  return (
    <>
      <form autoComplete="off" className={styles.LoginForm}>
        <div className={styles.LoginFormFiled}>
          <label></label>
          <span>
            <svg className={styles.EmailFieldIcon}>
              <use href={logo + '#email-field-icon'}></use>
            </svg>
          </span>
          <input
            type="email"
            className={styles.LoginFormField}
            name="email"
            placeholder={'E-mail'}
          />
        </div>

        <div className={styles.LoginFormFiled}>
          <label></label>
          <span>
            <svg className={styles.PasswordFieldIcon}>
              <use href={logo + '#password-field-icon'}></use>
            </svg>
          </span>
          <input
            type="password"
            className={styles.LoginFormField}
            name="Пароль"
            placeholder={'Пароль'}
          />
        </div>
      </form>
    </>
  );
}
