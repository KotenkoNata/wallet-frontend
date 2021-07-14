import React from 'react';

import './RegistrationForm.scss';

import Logo from '../Logo';
import Button from '../Button';
import logo from '../../assets/images/Logo.svg';

export default function RegistrationForm() {
  return (
    <>
      <div className="RegistrationForm-container">
        <div className="Registration-App-name-container">
          <div className="Registration-Login-frame">
            <picture className="Login-image">
              <source
                srcset="/static/FrameFrameDesktopRegistration_1.png 1x, /static/FrameFrameDesktopRegistration_2.png 2x"
                media="(min-width: 1280px)"
              />
              <img
                src="/static/FrameFrameDesktopRegistration_1.png"
                alt="Frame Finance App login"
              />
            </picture>
          </div>
          <h1 className="Registration-App-name">Finance App</h1>
        </div>
        <div className="RegistrationForm-page-container">
          <div className="RegistrationForm-Form-container">
            <Logo />
            <form autoComplete="off" className="RegistrationForm-form">
              <div className="RegistrationForm-filed">
                <label></label>
                <span>
                  <svg className="RegistrationForm-email-field-icon">
                    <use href={logo + '#email-field-icon'}></use>
                  </svg>
                </span>
                <input
                  type="email"
                  className="RegistrationForm-field"
                  name="email"
                  placeholder={'E-mail'}
                />
              </div>

              <div className="RegistrationForm-filed">
                <label></label>
                <span>
                  <svg className="RegistrationForm-password-field-icon">
                    <use href={logo + '#password-field-icon'}></use>
                  </svg>
                </span>
                <input
                  type="password"
                  className="RegistrationForm-field"
                  name="Пароль"
                  placeholder={'Пароль'}
                />
              </div>

              <div className="RegistrationForm-filed">
                <label></label>
                <span>
                  <svg className="RegistrationForm-password-field-icon">
                    <use href={logo + '#password-field-icon'}></use>
                  </svg>
                </span>
                <input
                  type="password"
                  className="RegistrationForm-field"
                  name="Подтвердите пароль"
                  placeholder={'Подтвердите пароль'}
                />
              </div>
              <div className="RegistrationForm-filed">
                <label></label>
                <span>
                  <svg className="RegistrationForm-password-field-icon">
                    <use href={logo + '#name-field-icon'}></use>
                  </svg>
                </span>
                <input
                  type="password"
                  className="RegistrationForm-field"
                  name="Ваше имя"
                  placeholder={'Ваше имя'}
                />
              </div>
            </form>
            <Button>Регистрация</Button>
            <Button>Вход</Button>
          </div>
        </div>
      </div>
    </>
  );
}
