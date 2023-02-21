import React from 'react';
import { IS_MOBILE } from '../../../../utils/globals';
import { Body, H2, Medium } from '../../../../utils/fonts';
import { FlexColumn } from '../../../../utils/containers';

const PushYourSolution = () => {
  return (
    <FlexColumn
      as="article"
      gap={IS_MOBILE() ? '16px' : '24px'}
      width="100%"
      alignmentX="flex-start"
    >
      <H2 as="h2" margin={IS_MOBILE() ? '0 0 4px 0' : '0 0 8px 0'}>
        Push your solution
      </H2>
      <Body>
        Commit and push at least <Medium>*/out.tsv</Medium> files to your repo.
        It is also recommended to push your source code files.
      </Body>
    </FlexColumn>
  );
};

export default PushYourSolution;
