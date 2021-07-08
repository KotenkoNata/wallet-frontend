import React from 'react';

import './Logo.scss';
import logo from '../../assets/images/Logo.svg';

export default function Logo() {
  return (
    <div className="Logo-container">
      <svg className="Logo-icon">
        <use href={logo + '#wallet-icon'}></use>
      </svg>
      <h2 className="Logo-title">Wallet</h2>
    </div>
  );
}
