import React from 'react';
import getUsersSettings from '../../api/getUsersSettings';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
import { useDispatch } from 'react-redux';
import theme from '../../utils/theme';
import { FlexColumn, FlexRow } from '../../utils/containers';
import { Body, H2, Medium } from '../../utils/fonts';
import Button from '../../components/generic/Button';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    getUsersSettings(setUsers);
  }, []);

  React.useEffect(() => {
    if (users) {
      if (users?.detail) {
        dispatch(
          popUpMessageHandler({
            header: 'Admin panel error',
            message: `Error: ${users.detail}`,
            borderColor: theme.colors.red,
          })
        );
      }
      console.log(users);
    }
  }, [dispatch, users]);

  return (
    <FlexColumn
      padding="80px 0"
      width="100%"
      alignmentY="flex-start"
      minHeight="100vh"
      gap="32px"
    >
      <H2 as="h1">Admin panel</H2>
      <FlexColumn maxWidth="800px" width="100%" gap="20px">
        {users?.map((user) => {
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
                <Button disabled={user.is_admin} width="146px">
                  give admin
                </Button>
                <Button
                  backgroundColor={theme.colors.red}
                  disabled={!user.is_admin}
                  width="146px"
                >
                  remove admin
                </Button>
              </FlexRow>
              <FlexRow width="100%" gap="16px" alignmentX="flex-start">
                <Button disabled={user.is_author} width="146px">
                  give author
                </Button>
                <Button
                  backgroundColor={theme.colors.red}
                  disabled={!user.is_author}
                  width="146px"
                >
                  remove author
                </Button>
              </FlexRow>
            </FlexColumn>
          );
        })}
      </FlexColumn>
    </FlexColumn>
  );
};

export default AdminPanel;
