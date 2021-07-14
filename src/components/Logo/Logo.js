import React from 'react';

import styles from './Logo.module.scss';
import logo from '../../assets/images/Logo.svg';

export default function Logo() {
  return (
    <div className={styles.LogoContainer}>
      <svg className={styles.LogoIcon}>
        <use href={logo + '#wallet-icon'}></use>
      </svg>
      <h2 className={styles.LogoTitle}>Wallet</h2>
    </div>
  );
}
