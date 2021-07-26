import React from 'react';

import styles from './ToggleButton.module.scss';

export default function ToggleButton({ left = 'Доход', right = 'Расход' }) {
  return (
    <div class={styles.container}>
      <label for="toggle-button" class={styles.text}>
        {left}
      </label>
      <input type="checkbox" id="toggle-button" class={styles.ToggleButton} />
      <label for="toggle-button" class={styles.text}>
        {right}
      </label>
    </div>
  );
}
