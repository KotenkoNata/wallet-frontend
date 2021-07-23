import React from 'react';
import styles from './Modal.module.scss';

import icon from '../../assets/images/icon.svg';

import Button from '../Button';

import ToggleButton from '../ToggleButton/ToggleButton';

import SelectCategory from '../SelectCategory/SelectCategory';

export default function Modal() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.content}>
        <button className={styles.ButtonCloseModal}></button>
        <h2 className={styles.ModalTitle}>Добавить транзакцию</h2>
        <ToggleButton />
        <form action="#" method="POST" className={styles.ModalForm}>
          <label for="inlineFormSelector">
            <SelectCategory />
          </label>

          <div className={styles.AmountDataContainer}>
            <input
              className={styles.ModalAmountInput}
              placeholder={'0.00'}
              for=""
            ></input>
            <div className={styles.CalendarInputContainer}>
              <input
                className={styles.ModalDataInput}
                placeholder={'21.07.2021'}
                for=""
              />
              <span className={styles.Icon}>
                <svg className={styles.CalendarIcon}>
                  <use href={icon + '#icon-CalendarIcon'}></use>
                </svg>
              </span>
            </div>
          </div>

          <input
            className={styles.ModalCommentInput}
            placeholder={'Комментарий'}
            for=""
          />
        </form>

        <Button name="Добавить" />
        <Button name="Отмена" />
      </div>
    </div>
  );
}
