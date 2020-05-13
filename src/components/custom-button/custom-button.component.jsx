import React from 'react';

// Import styles
import './custom-button.styles.scss';

// Import Components
// import MenuItem from '../menu-item/menu-item.component';

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
