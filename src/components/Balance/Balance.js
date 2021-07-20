import React from 'react';

import styles from './Balance.module.scss';

export default function Balance() {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Ваш баланс</h3>
        <h4 className={styles.amount}>₴ 24 000.00</h4>
      </div>
    </>
  );
}
