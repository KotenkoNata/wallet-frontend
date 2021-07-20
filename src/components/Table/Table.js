import React from 'react';

import styles from './Table.module.scss';

export default function Table() {
  return (
    <>
      <>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead className={styles.TableHeadColumn}>
              <tr className={styles.TableHead}>
                <th>Дата</th>
                <th>Тип</th>
                <th>Категория</th>
                <th>Комментарий</th>
                <th>Сумма</th>
                <th>Баланс</th>
              </tr>
            </thead>
            <tr className={styles.TableColumn}>
              <td>04.01.2019</td>
              <td>-</td>
              <td>Разное</td>
              <td>Подарок жене</td>
              <td>300.00</td>
              <td>6 900.00</td>
            </tr>
            <tr className={styles.TableColumn}>
              <td>05.01.2019</td>
              <td>+</td>
              <td>Регулярный доход</td>
              <td>Бонус за январь</td>
              <td>8 000.00</td>
              <td>14 900.00</td>
            </tr>
            <tr className={styles.TableColumn}>
              <td>07.01.2019</td>
              <td>-</td>
              <td>Машина</td>
              <td>Масло</td>
              <td>1 000.00</td>
              <td>13 900.00</td>
            </tr>
            <tr className={styles.TableColumn}>
              <td>07.01.2019</td>
              <td>-</td>
              <td>Машина</td>
              <td>Масло</td>
              <td>1 000.00</td>
              <td>13 900.00</td>
            </tr>
            <tr className={styles.TableColumn}>
              <td>07.01.2019</td>
              <td>-</td>
              <td>Машина</td>
              <td>Масло</td>
              <td>1 000.00</td>
              <td>13 900.00</td>
            </tr>
            <tr className={styles.TableColumn}>
              <td>07.01.2019</td>
              <td>-</td>
              <td>Машина</td>
              <td>Масло</td>
              <td>1 000.00</td>
              <td>13 900.00</td>
            </tr>
            <tr className={styles.TableColumn}>
              <td>07.01.2019</td>
              <td>-</td>
              <td>Машина</td>
              <td>Масло</td>
              <td>1 000.00</td>
              <td>13 900.00</td>
            </tr>
            <tr className={styles.TableColumn}>
              <td>07.01.2019</td>
              <td>-</td>
              <td>Машина</td>
              <td>Масло</td>
              <td>1 000.00</td>
              <td>13 900.00</td>
            </tr>
            <tr className={styles.TableColumn}>
              <td>07.01.2019</td>
              <td>-</td>
              <td>Машина</td>
              <td>Масло</td>
              <td>1 000.00</td>
              <td>13 900.00</td>
            </tr>
          </table>

          <table className={styles.tablePhone}>
            <tr className={styles.TableColumnPhone}>
              <th>Дата</th>
              <td>01.05.2019</td>
            </tr>
            <tr className={styles.TableColumnPhone}>
              <th>Тип</th>
              <td>-</td>
            </tr>
            <tr className={styles.TableColumnPhone}>
              <th>Категория</th>
              <td>Машина</td>
            </tr>
            <tr className={styles.TableColumnPhone}>
              <th>Комментарий</th>
              <td>Масло</td>
            </tr>
            <tr className={styles.TableColumnPhone}>
              <th>Сумма</th>
              <td>1 000.00</td>
            </tr>
            <tr className={styles.TableColumnPhone}>
              <th>Баланс</th>
              <td>13 900.00</td>
            </tr>
          </table>
        </div>
      </>
    </>
  );
}
