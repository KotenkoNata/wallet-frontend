import React from 'react';
import PropTypes from 'prop-types';

import './Section.scss';
import Container from '../Container/Container';

const Section = ({ children }) => (
  <section className="section">
    <Container>{children}</Container>
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
