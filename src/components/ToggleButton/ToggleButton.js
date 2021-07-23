import React from 'react';

import styles from './ToggleButton.module.scss';

export default function ToggleButton() {
  return (
    <div class={styles.container}>
      <label for="toggle-button" class={styles.text}>
        Доход
      </label>
      <input type="checkbox" id="toggle-button" class={styles.ToggleButton} />
      <label for="toggle-button" class={styles.text}>
        Расход
      </label>
    </div>
  );
}
