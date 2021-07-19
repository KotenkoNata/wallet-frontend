import React from 'react';

import styles from './Navigation.module.scss';

import logo from '../../assets/images/Logo.svg';

export default function Navigation() {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="//#region " className={(styles.main, styles.animation)}>
              <svg className={styles.mainIcon}>
                <use href={logo + '#main-page-icon'}></use>
              </svg>
              <div className={styles.NavText}>Главная</div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="//#region "
              className={(styles.statistic, styles.animation)}
            >
              <svg className={styles.statisticIcon}>
                <use href={logo + '#statistics-page-icon'}></use>
              </svg>
              <div className={styles.NavText}>Статистика</div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="//#region "
              className={(styles.statistic, styles.animation)}
            >
              <svg className={styles.statisticIcon}>
                <use href={logo + '#currency-page-mobile-icon'}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
