import React from 'react';

import './LoginForm.scss';
import logo from '../../assets/images/Logo.svg';
import Logo from '../Logo';
import Title from '../Title';

export default function LoginForm() {
  return (
    <div className="Login-container">
      <Title />
      <div className="Login-page-container">
        <div className="Login-Form-container">
          <Logo />
          <form autoComplete="off" className="LoginForm-form">
            <div className="Login-form-filed">
              <label></label>
              <span>
                <svg className="Login-email-field-icon">
                  <use href={logo + '#email-field-icon'}></use>
                </svg>
              </span>
              <input
                type="email"
                className="LoginForm-field"
                name="email"
                placeholder={'E-mail'}
              />
            </div>

            <div className="Login-form-filed">
              <label></label>
              <span>
                <svg className="Login-password-field-icon">
                  <use href={logo + '#password-field-icon'}></use>
                </svg>
              </span>
              <input
                type="password"
                className="LoginForm-field"
                name="Пароль"
                placeholder={'Пароль'}
              />
            </div>
            <button className="Button" type="submit">
              Вход
            </button>
            <button className="Button" type="submit">
              Регистрация
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
