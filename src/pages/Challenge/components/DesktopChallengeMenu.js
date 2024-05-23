import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../../../utils/containers';
import { H3 } from '../../../utils/fonts';
import { Link } from 'react-router-dom';
import {
  MENU_CHALLENGE_SECTIONS_WITH_LOGIN,
  MENU_CHALLENGE_SECTIONS_NO_LOGIN,
  IS_MOBILE,
  MENU_CHALLENGE_SECTIONS_MY_CHALLENGE_OR_ADMIN,
} from '../../../utils/globals';
import { useSelector } from 'react-redux';

const DesktopChallengeMenuStyle = styled(FlexColumn)`
  justify-content: flex-start;
  position: fixed;
  left: 0;
  overflow-y: auto;
  width: 240px;
  height: 100vh;
  top: 80px;
  padding: 50px 0 0 0;
  z-index: 2;
  gap: 32px;
  box-shadow: ${({ theme }) => theme.shadowRight};
`;

const Option = styled(FlexColumn)`
  height: 48px;
  width: 100%;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.green05 : theme.colors.white};
  text-decoration: none;

  * {
    cursor: pointer;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.green05};
  }
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
      {options.map((option, index) => {
        return (
          <Option
            key={`challenge_menu_option-${index}`}
            as={Link}
            active={index === props.section ? 1 : 0}
            to={`/challenge/${props.challengeName}/${options[index]
              .toLowerCase()
              .replace(' ', '')}`}
          >
            <H3
              fontSize={IS_MOBILE() ? '18px' : '22px'}
              textTransform="uppercase"
            >
              {option}
            </H3>
          </Option>
        );
      })}
    </DesktopChallengeMenuStyle>
  );
};

export default DesktopChallengeMenu;
