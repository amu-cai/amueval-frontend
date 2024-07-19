import React from 'react';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../../utils/containers';
import { Link } from 'react-router-dom';
import {
  MENU_CHALLENGE_SECTIONS_WITH_LOGIN,
  MENU_CHALLENGE_SECTIONS_NO_LOGIN,
  MENU_CHALLENGE_SECTIONS_MY_CHALLENGE_OR_ADMIN,
} from '../../../utils/globals';
import { useSelector } from 'react-redux';
import Button from '../../../components/generic/Button';
import theme from "../../../utils/theme";
import {ThemeProvider} from "@mui/material/styles";

const DesktopChallengeMenuStyle = styled(FlexColumn)`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: auto;
`;

const DesktopChallengeMenu = (props) => {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  let options = MENU_CHALLENGE_SECTIONS_NO_LOGIN;
  if (loggedIn) options = MENU_CHALLENGE_SECTIONS_WITH_LOGIN;
  if (isAdmin || props.challenge.author === user) {
    options = MENU_CHALLENGE_SECTIONS_MY_CHALLENGE_OR_ADMIN;
  }
  return (
    <DesktopChallengeMenuStyle>
      <ThemeProvider theme={theme.customTheme}>
        <FlexRow gap="30px">
          {options.map((option, index) => {
            return (
                <FlexColumn as={Link} to={`/challenge/${props.challengeName}/${options[index]
                    .toLowerCase()
                    .replace(' ', '')}`}>
                  <Button
                      key={`challenge_menu_option-${index}`}
                      backgroundColor={index === props.section ? theme.colors.green700 : theme.colors.white}
                      color={index === props.section ? theme.colors.white : '#5E5E5E'}
                      borderColor={theme.colors.green700}
                      height="40px"
                      width="140px"
                  >
                    {option}
                  </Button>
                </FlexColumn>
            );
          })}
        </FlexRow>
      </ThemeProvider>
    </DesktopChallengeMenuStyle>
  );
};

export default DesktopChallengeMenu;
