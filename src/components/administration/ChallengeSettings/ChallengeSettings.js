import React from 'react';
import { FlexColumn, FlexRow } from '../../../utils/containers';
import { Body, Medium } from '../../../utils/fonts';
import theme from '../../../utils/theme';
import Button from '../../generic/Button';
import deleteChallenge from '../../../api/deleteChallenge';

const ChallengeSettings = ({ challenge, setChallengeUpdateResult }) => {
  return (
    <FlexColumn
      border={`2px solid ${theme.colors.dark05}`}
      width="100%"
      borderRadius="4px"
      alignmentX="flex-start"
      gap="16px"
      padding="16px"
    >
      <FlexRow
        width="100%"
        gap="16px"
        alignmentX="flex-start"
        alignmentY="flex-end"
      >
        <Body fontSize="24px">{challenge?.title}</Body>
        {challenge?.deleted && (
          <Medium fontSize="16px" color={theme.colors.red}>
            deleted
          </Medium>
        )}
      </FlexRow>
      <FlexRow width="100%" gap="16px" alignmentX="flex-start">
        <Button
          handler={() => {
            deleteChallenge(challenge?.title, setChallengeUpdateResult);
          }}
          backgroundColor={theme.colors.red}
          disabled={challenge?.deleted}
          width="164px"
          height="36px"
        >
          Delete challenge
        </Button>
      </FlexRow>
    </FlexColumn>
  );
};

export default ChallengeSettings;
