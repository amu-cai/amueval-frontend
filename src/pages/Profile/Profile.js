import React from 'react';
import { FlexColumn, FlexRow } from '../../utils/containers';
import { Body, H2, Medium } from '../../utils/fonts';
import KeyCloakService from '../../services/KeyCloakService';
import Loading from '../../components/generic/Loading';
import Button from '../../components/generic/Button';
import theme from '../../utils/theme';

const Profile = () => {
  const [profileInfo, setProfileInfo] = React.useState(null);
  const profileInfoAttributes = [
    { label: 'Username:', key: 'preferred_username' },
    { label: 'Name:', key: 'name' },
    { label: 'First name:', key: 'given_name' },
    { label: 'Surname:', key: 'family_name' },
    { label: 'Email:', key: 'email' },
  ];

  const getProfileInfo = () => {
    setTimeout(() => {
      if (KeyCloakService.isLoggedIn()) {
        KeyCloakService.getProfileInfo(setProfileInfo);
      } else {
        setProfileInfo(false);
      }
    }, 3000);
  };

  React.useEffect(() => {
    getProfileInfo();
  }, []);

  const profileInfoRender = () => {
    if (profileInfo !== null) {
      if (profileInfo) {
        return (
          <>
            <FlexColumn as="ul" alignmentX="flex-start" gap="16px">
              {profileInfoAttributes.map((attr, i) => {
                return (
                  <FlexRow key={`profileInfoItem-${i}`} as="li" gap="8px">
                    <Body fontSize="18px">{attr.label}</Body>
                    <Medium fontSize="18px">{profileInfo[attr.key]}</Medium>
                  </FlexRow>
                );
              })}
            </FlexColumn>
            <Button
              handler={() => {
                KeyCloakService.doLogout(true);
              }}
              width="232px"
              height="36px"
              backgroundColor={theme.colors.dark}
            >
              Sign out & reset all cookies
            </Button>
          </>
        );
      } else {
        return 'Profile loading failed';
      }
    }
    return <Loading />;
  };

  return (
    <FlexColumn width="100%" minHeight="100vh">
      <FlexColumn
        gap="32px"
        border={`2px solid ${theme.colors.green03}`}
        borderRadius="8px"
        padding="24px 40px"
      >
        <H2 as="h2">Profile Info</H2>
        {profileInfoRender()}
      </FlexColumn>
    </FlexColumn>
  );
};

export default Profile;
