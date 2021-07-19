import React from 'react';

import styles from './Currency.module.scss';

export default function Currency() {
  return (
    <>
      <div className={styles.container}>
        <table className={styles.table}>
          <tr className={styles.TableHead}>
            <th>Валюта</th>
            <th>Покупка</th>
            <th>Продажа</th>
          </tr>
          <tr className={styles.TableColumn}>
            <td>USD</td>
            <td>27.55</td>
            <td>27.65</td>
          </tr>
          <tr className={styles.TableColumn}>
            <td>EUR</td>
            <td>30.00</td>
            <td>30.10</td>
          </tr>
          <tr className={styles.TableColumn}>
            <td>RUR</td>
            <td>00.00</td>
            <td>00.00</td>
          </tr>
        </table>
      </div>
    </>
  );
}
