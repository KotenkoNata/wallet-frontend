import React from 'react';

import './Button.scss';

export default function Button({ children }) {
  return (
    <>
      <button className="Button" type="submit">
        {children}
      </button>
    </>
  );
}
