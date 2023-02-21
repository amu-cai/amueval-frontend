import React from 'react';
import { IS_MOBILE } from '../../../../utils/globals';
import { H2, Body } from '../../../../utils/fonts';
import { FlexColumn } from '../../../../utils/containers';

const SubmitSolutionToGonito = () => {
  return (
    <FlexColumn
      alignmentX="flex-start"
      maxWidth="680px"
      width="100%"
      gap={IS_MOBILE() ? '16px' : '24px'}
    >
      <H2 as="h2" margin="0 0 8px 0">
        Submit solution to Gonito
      </H2>
      <Body>
        Submit your solution to Gonito using SUBMIT on the panel on the left.
      </Body>
    </FlexColumn>
  );
};

export default SubmitSolutionToGonito;
