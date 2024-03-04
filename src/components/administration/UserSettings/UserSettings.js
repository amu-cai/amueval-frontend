import React from 'react';
import { FlexColumn, FlexRow } from '../../../utils/containers';
import { Body, Medium } from '../../../utils/fonts';
import theme from '../../../utils/theme';
import Button from '../../generic/Button';
import userRightsUpdate from '../../../api/userRightsUpdate';

const UserSettings = ({ user, setRightsUpdateResult }) => {
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
        <Body fontSize="24px">{user.username}</Body>
        {user.is_admin && (
          <Medium fontSize="16px" color={theme.colors.green}>
            admin
          </Medium>
        )}
        {user.is_author && (
          <Medium fontSize="16px" color={theme.colors.blue}>
            author
          </Medium>
        )}
      </FlexRow>
      <FlexRow width="100%" gap="16px" alignmentX="flex-start">
        <Button
          handler={() => {
            userRightsUpdate(
              {
                username: user.username,
                is_admin: true,
                is_author: user.is_author,
              },
              setRightsUpdateResult
            );
          }}
          disabled={user.is_admin}
          width="146px"
        >
          give admin
        </Button>
        <Button
          handler={() => {
            userRightsUpdate(
              {
                username: user.username,
                is_admin: false,
                is_author: user.is_author,
              },
              setRightsUpdateResult
            );
          }}
          backgroundColor={theme.colors.red}
          disabled={!user.is_admin}
          width="146px"
        >
          remove admin
        </Button>
      </FlexRow>
      <FlexRow width="100%" gap="16px" alignmentX="flex-start">
        <Button
          handler={() => {
            userRightsUpdate(
              {
                username: user.username,
                is_admin: user.is_admin,
                is_author: true,
              },
              setRightsUpdateResult
            );
          }}
          disabled={user.is_author}
          width="146px"
        >
          give author
        </Button>
        <Button
          handler={() => {
            userRightsUpdate(
              {
                username: user.username,
                is_admin: user.is_admin,
                is_author: false,
              },
              setRightsUpdateResult
            );
          }}
          backgroundColor={theme.colors.red}
          disabled={!user.is_author}
          width="146px"
        >
          remove author
        </Button>
      </FlexRow>
    </FlexColumn>
  );
};

export default UserSettings;
