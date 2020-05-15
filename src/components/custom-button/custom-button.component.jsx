import React from 'react';

// Import styles
// import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.styles';

// Import Components
// import MenuItem from '../menu-item/menu-item.component';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
