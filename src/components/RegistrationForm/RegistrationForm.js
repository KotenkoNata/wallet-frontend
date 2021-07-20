import React from 'react';

import styles from './RegistrationForm.module.scss';

import Logo from '../Logo';
import Button from '../Button';
import logo from '../../assets/images/Logo.svg';

export default function RegistrationForm() {
  return (
    <>
      <div className={styles.RegistrationFormContainer}>
        <div className={styles.RegistrationAppNameContainer}>
          <div className={styles.RegistrationLoginFrame}>
            <picture className={styles.LoginImage}>
              <source
                srcset="/static/FrameFrameDesktopRegistration_1.png 1x, /static/FrameFrameDesktopRegistration_2.png 2x"
                media="(min-width: 1280px)"
              />
              <source
                srcset="/static/RegistrationFormBGTablet.png 1x, /static/RegistrationFormBGTablet-2.png 2x"
                media="(min-width: 768px)"
              />
              <img
                src="/static/FrameFrameDesktopRegistration_1.png"
                alt="Frame Finance App login"
              />
            </picture>
          </div>
          <div className={styles.textRegistrationAppContainer}>
            <h1 className={styles.RegistrationAppName}>Finance App</h1>
          </div>
        </div>
        <div className={styles.RegistrationFormPageContainer}>
          <div className={styles.RegistrationFormFormContainer}>
            <Logo />
            <form autoComplete="off" className={styles.RegistrationForm}>
              <div className={styles.RegistrationFormFiled}>
                <label></label>
                <span>
                  <svg className={styles.RegistrationFormEmailFieldIcon}>
                    <use href={logo + '#email-field-icon'}></use>
                  </svg>
                </span>
                <input
                  type="email"
                  className={styles.RegistrationFormField}
                  name="email"
                  placeholder={'E-mail'}
                />
              </div>

              <div className={styles.RegistrationFormFiled}>
                <label></label>
                <span>
                  <svg className={styles.RegistrationFormPasswordFieldIcon}>
                    <use href={logo + '#password-field-icon'}></use>
                  </svg>
                </span>
                <input
                  type="password"
                  className={styles.RegistrationFormField}
                  name="Пароль"
                  placeholder={'Пароль'}
                />
              </div>

              <div className={styles.RegistrationFormFiled}>
                <label></label>
                <span>
                  <svg className={styles.RegistrationFormPasswordFieldIcon}>
                    <use href={logo + '#password-field-icon'}></use>
                  </svg>
                </span>
                <input
                  type="password"
                  className={styles.RegistrationFormField}
                  name="Подтвердите пароль"
                  placeholder={'Подтвердите пароль'}
                />
              </div>
              <div className={styles.RegistrationFormFiled}>
                <label></label>
                <span>
                  <svg className={styles.RegistrationFormPasswordFieldIcon}>
                    <use href={logo + '#name-field-icon'}></use>
                  </svg>
                </span>
                <input
                  type="password"
                  className={styles.RegistrationFormField}
                  name="Ваше имя"
                  placeholder={'Ваше имя'}
                />
              </div>
            </form>
            <Button name="Регистрация" />
            <Button name="Вход" />
          </div>
        </div>
      </div>
    </>
  );
}
