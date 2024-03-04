import React from 'react';
import getUsersSettings from '../../api/getUsersSettings';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
import { useDispatch } from 'react-redux';
import theme from '../../utils/theme';
import { FlexColumn } from '../../utils/containers';
import { H2 } from '../../utils/fonts';
import UserSettings from '../../components/administration/UserSettings';
import getChallenges from '../../api/getChallenges';
import ChallengeSettings from '../../components/administration/ChallengeSettings';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = React.useState([]);
  const [challenges, setChallenges] = React.useState([]);
  const [rightsUpdateResult, setRightsUpdateResult] = React.useState(null);

  React.useEffect(() => {
    getUsersSettings(setUsers);
  }, [rightsUpdateResult]);

  React.useEffect(() => {
    getChallenges(setChallenges);
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
            <UserSettings
              user={user}
              setRightsUpdateResult={setRightsUpdateResult}
            />
          );
        })}
      </FlexColumn>
      <FlexColumn maxWidth="800px" width="100%" gap="20px">
        {challenges?.map((challenge) => {
          return <ChallengeSettings challenge={challenge} />;
        })}
      </FlexColumn>
    </FlexColumn>
  );
};

export default AdminPanel;
