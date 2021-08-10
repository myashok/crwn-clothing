import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, danger, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''} ${danger ? 'danger' : ''}  ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
