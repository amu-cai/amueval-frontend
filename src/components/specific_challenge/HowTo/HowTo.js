import React from 'react';
import { FlexColumn } from '../../../utils/containers';
import { IS_MOBILE } from '../../../utils/globals';
import HowToContent from './sections/HowToContent';

const HowTo = (props) => {
  return (
    <FlexColumn
      margin={IS_MOBILE() ? null : '64px 0 0 0'}
      padding={IS_MOBILE() ? '12px 20px' : null}
      gap={IS_MOBILE() ? '24px' : '48px'}
      alignmentX={IS_MOBILE() ? 'flex-start' : 'center'}
      maxWidth={IS_MOBILE() ? '668px' : 'none'}
    >
      <FlexColumn maxWidth="680px" alignmentX="flex-start" gap="48px">
        <HowToContent
          user={props.user ? props.user : 'yourID'}
          challengeName={props.challengeName}
        />
      </FlexColumn>
    </FlexColumn>
  );
};

export default HowTo;
