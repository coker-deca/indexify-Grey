import React from 'react';

import { Spinner, SpinnerContainer } from './Styles';

export default function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}
