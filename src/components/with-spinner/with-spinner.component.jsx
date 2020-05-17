import React from 'react';

// Import styles
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// Import Components

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  console.log('WithSpinner -> isLoading, ...otherProps', isLoading);
  console.log('WithSpinner -> WrappedComponent', WrappedComponent);
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
