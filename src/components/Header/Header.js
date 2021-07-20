import React from 'react';

import styles from './Header.module.scss';

import Logo from '../Logo';

import logo from '../../assets/images/Logo.svg';

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <Logo />
        <ul className={styles.list}>
          <li className={styles.item}>Имя</li>
          <li className={styles.item}>
            <a href="//#region " className={styles.logout}>
              <svg className={styles.LogoutIcon}>
                <use href={logo + '#logout-icon'}></use>
              </svg>

              <div className={styles.textLogout}>Выйти</div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
