import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { H2 } from '../../utils/fonts';

const PageNotFound = () => {
  return (
    <FlexColumn width="100%" minHeight="100vh">
      <FlexColumn>
        <H2 as="h2">404: Page not found</H2>
      </FlexColumn>
    </FlexColumn>
  );
};

export default PageNotFound;
