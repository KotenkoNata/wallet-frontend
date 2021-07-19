import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';

import styles from './Section.module.scss';

export default function Section({ children }) {
  return (
    <section className={styles.section}>
      <Container>{children}</Container>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
};
