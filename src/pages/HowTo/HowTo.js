import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { IS_MOBILE } from '../../utils/globals';
import HowToContent from './components/HowToContent';
import { useDispatch } from 'react-redux';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
import { useSelector } from 'react-redux';

const HowTo = (props) => {
  const { challengeName } = props;
  const [logInReminder, setLogInReminder] = React.useState(true);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  React.useEffect(() => {
    if (logInReminder) {
      if (!loggedIn) {
        dispatch(
          popUpMessageHandler({
            header: 'Please create an account or log in',
            message: 'To see all options you need to be logged in',
            borderColor: null,
            confirmHandler: null,
          })
        );
      }
      setLogInReminder(false);
    }
  }, [logInReminder, dispatch, loggedIn]);

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
