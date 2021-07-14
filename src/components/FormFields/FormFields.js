import React from 'react';

import logo from '../../assets/images/Logo.svg';
import './FormFields.scss';

export default function FormFields() {
  return (
    <>
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
      </form>
    </>
  );
}
