import React from 'react';

import styles from './Button.module.scss';

export default function Button({ name }) {
  return (
    <>
      <button className={styles.Button} type="submit">
        {name}
      </button>
    </>
  );
}
