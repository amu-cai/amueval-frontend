import React from 'react';
import KeyCloakService from '../../services/KeyCloakService';
import { FlexColumn } from '../../utils/containers';
import { IS_MOBILE } from '../../utils/globals';
import HowToContent from './components/HowToContent';

const HowTo = (props) => {
  const { popUpMessageHandler, challengeName } = props;
  const [logInReminder, setLogInReminder] = React.useState(true);

  React.useEffect(() => {
    if (logInReminder) {
      if (!KeyCloakService.isLoggedIn()) {
        popUpMessageHandler(
          'Please create an account or log in',
          'To see all options you need to be logged in'
        );
      }
      setLogInReminder(false);
    }
  }, [logInReminder, popUpMessageHandler]);

  return (
    <FlexColumn
      margin={IS_MOBILE() ? null : '64px 0 0 0'}
      padding={IS_MOBILE() ? '12px 20px' : null}
      gap={IS_MOBILE() ? '24px' : '48px'}
      alignmentX={IS_MOBILE() ? 'flex-start' : 'center'}
      maxWidth={IS_MOBILE() ? '668px' : 'none'}
    >
      <FlexColumn maxWidth="680px" alignmentX="flex-start" gap="48px">
        <HowToContent challengeName={challengeName} />
      </FlexColumn>
    </FlexColumn>
  );
};

export default HowTo;
