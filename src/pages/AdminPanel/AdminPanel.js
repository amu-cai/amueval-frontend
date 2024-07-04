import React from 'react';
import getUsersSettings from '../../api/getUsersSettings';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
import { useDispatch, useSelector } from 'react-redux';
import theme from '../../utils/theme';
import { FlexColumn } from '../../utils/containers';
import { H2, H3 } from '../../utils/fonts';
import UserSettings from '../../components/administration/UserSettings';
import getChallenges from '../../api/getChallenges';
import ChallengeSettings from '../../components/administration/ChallengeSettings';
import Loading from '../../components/generic/Loading';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const [users, setUsers] = React.useState([]);
  const [challenges, setChallenges] = React.useState([]);
  const [rightsUpdateResult, setRightsUpdateResult] = React.useState(null);
  const [usersLoading, setUsersLoading] = React.useState(true);
  const [challengesLoading, seChallengestLoading] = React.useState(true);
  const [challengeUpdateResult, setChallengeUpdateResult] =
    React.useState(null);

  React.useEffect(() => {
    getUsersSettings(setUsers, setUsersLoading);
    getChallenges(setChallenges, seChallengestLoading);
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

  React.useEffect(() => {
    if (challengeUpdateResult) {
      if (challengeUpdateResult?.detail) {
        dispatch(
          popUpMessageHandler({
            header: 'Overview update error',
            message: `Error: ${challengeUpdateResult.detail}`,
            borderColor: theme.colors.red,
          })
        );
      } else {
        dispatch(
          popUpMessageHandler({
            header: 'Overview update sucess',
            message: `${challengeUpdateResult.challenge}: ${challengeUpdateResult.message}`,
            borderColor: theme.colors.green,
          })
        );
        getChallenges(setChallenges, seChallengestLoading);
      }
    }
  }, [challengeUpdateResult, dispatch]);

  React.useEffect(() => {
    if (rightsUpdateResult) {
      if (rightsUpdateResult?.detail) {
        dispatch(
          popUpMessageHandler({
            header: 'User rights update error',
            message: `Error: ${rightsUpdateResult.detail}`,
            borderColor: theme.colors.red,
          })
        );
      } else {
        dispatch(
          popUpMessageHandler({
            header: 'User rights update sucess',
            message: `${rightsUpdateResult.user}: ${rightsUpdateResult.message}`,
            borderColor: theme.colors.green,
          })
        );
        getUsersSettings(setUsers);
      }
    }
  }, [rightsUpdateResult, dispatch]);

  return (
    <FlexColumn
      padding="80px 0"
      width="100%"
      alignmentY="flex-start"
      minHeight="100vh"
      gap="32px"
    >
      <H2 as="h1">Admin panel</H2>
      <H3 as="h2">Users</H3>
      <FlexColumn maxWidth="800px" width="100%" gap="20px">
        {!usersLoading ? (
          users?.map((user) => {
            return (
              <UserSettings
                user={user}
                currentUser={currentUser}
                setRightsUpdateResult={setRightsUpdateResult}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </FlexColumn>
      <H3 as="h2">Challenges</H3>
      <FlexColumn maxWidth="800px" width="100%" gap="20px">
        {!challengesLoading ? (
          challenges?.map((challenge) => {
            return (
              <ChallengeSettings
                challenge={challenge}
                setChallengeUpdateResult={setChallengeUpdateResult}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </FlexColumn>
    </FlexColumn>
  );
};

export default AdminPanel;
