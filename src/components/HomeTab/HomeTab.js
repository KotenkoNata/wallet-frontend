import React from 'react';

import styles from './HomeTab.module.scss';

import Header from '../Header';

import Navigation from '../Navigation';

import Balance from '../Balance';

import Currency from '../Currency';

import Table from '../Table';

import Modal from '../Modal';

export default function HomeTab() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.LeftPartContainer}>
          <div className={styles.containerTablet}>
            <Navigation />
            <Balance />
          </div>
          <div className={styles.CurrencyHiddenContainer}>
            <Currency />
          </div>
        </div>
        <div className={styles.RightPartContainer}>
          <Table />
        </div>
      </div>
      <Modal />
    </>
  );
}
