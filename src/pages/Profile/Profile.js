import React from 'react';
import { FlexColumn, FlexRow } from '../../utils/containers';
import { Body, H2, Medium } from '../../utils/fonts';
import Loading from '../../components/generic/Loading';
import theme from '../../utils/theme';
import getProfileInfo from '../../api/getProfileInfo';
import Button from "../../components/generic/Button";
import {Link} from "react-router-dom";
import {EDIT_PROFILE_PAGE} from "../../utils/globals";

const Profile = () => {
  const [profileInfo, setProfileInfo] = React.useState(null);
  const profileInfoAttributes = [
    { label: 'Username:', key: 'username', bool: false },
    { label: 'Email:', key: 'email', bool: false },
    { label: 'Admin:', key: 'isAdmin', bool: true },
    { label: 'Author:', key: 'isAuthor', bool: true },
  ];

  React.useEffect(() => {
    getProfileInfo(setProfileInfo);
  }, []);

  const renderValue = (attr) => {
    if (attr.bool) {
      return profileInfo[attr.key] ? 'Yes' : 'No';
    } else {
      return profileInfo[attr.key];
    }
  };

  const profileInfoRender = () => {
    if (profileInfo !== null) {
      if (profileInfo?.username) {
        return (
            <FlexColumn as="ul" alignmentX="flex-start" gap="16px">
              {profileInfoAttributes.map((attr, i) => {
                return (
                    <FlexRow key={`profileInfoItem-${i}`} as="li" gap="8px">
                      <Body fontSize="18px">{attr.label}</Body>
                      <Medium fontSize="18px">{renderValue(attr)}</Medium>
                    </FlexRow>
                );
              })}
            </FlexColumn>
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
            // border={`2px solid ${theme.colors.green03}`}
            // borderRadius="8px"
            padding="24px 40px"
        >
          <H2 as="h2">Profile Info</H2>
          {profileInfoRender()}
          <Button
              width="82px"
              height="36px"
              margin="16px 0 0 0"
              as={Link}
              to={EDIT_PROFILE_PAGE}
              backgroundColor={theme.colors.blue}
          >
            <Body color={theme.colors.white}>Edit</Body>
          </Button>
        </FlexColumn>
      </FlexColumn>
  );
};

export default Profile;