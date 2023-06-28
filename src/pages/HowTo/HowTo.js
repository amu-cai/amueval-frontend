import React from 'react';
import getFullUser from '../../api/getFullUserInfo';
import KeyCloakService from '../../services/KeyCloakService';
import { FlexColumn } from '../../utils/containers';
import { IS_MOBILE } from '../../utils/globals';
import HowToContent from './components/HowToContent';

const HowTo = (props) => {
  const [userFullInfo, setUserFullInfo] = React.useState(null);
  const username = KeyCloakService.getUsername();

  React.useEffect(() => {
    getFullUser(setUserFullInfo);

    if (!KeyCloakService.isLoggedIn()) {
      props.popUpMessageHandler(
        'Please log in',
        'To see everything you must log in',
        () => KeyCloakService.doLogin
      );
    }
  }, [props]);

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
          userFullInfo={userFullInfo}
          user={username ? username : 'yourID'}
          challengeName={props.challengeName}
        />
      </FlexColumn>
    </FlexColumn>
  );
};

export default HowTo;
