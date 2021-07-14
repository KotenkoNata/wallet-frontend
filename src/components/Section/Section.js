import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.scss';
import Container from '../Container/Container';

const Section = ({ children }) => (
  <section className={styles.section}>
    <Container>{children}</Container>
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
