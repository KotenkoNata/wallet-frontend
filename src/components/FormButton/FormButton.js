import React from 'react';

import styles from './FormButton.module.scss';

export default function Button({ name }) {
  return (
    <>
      <button className={styles.Button} type="submit">
        {name}
      </button>
    </>
  );
}
