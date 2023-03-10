import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';
import { H3 } from '../../utils/fonts';
import PropsTypes from 'prop-types';
import KeyCloakService from '../../services/KeyCloakService';
import { Link } from 'react-router-dom';

const DesktopChallengeMenuStyle = styled(FlexColumn)`
  justify-content: flex-start;
  position: fixed;
  left: 0;
  overflow-y: auto;
  width: 280px;
  height: 100vh;
  top: 50px;
  padding: 64px 0 0 0;
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

  * {
    cursor: pointer;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.green05};
  }
`;

const DesktopChallengeMenu = (props) => {
  let options = ['Leaderboard', 'Readme', 'How to'];
  if (KeyCloakService.isLoggedIn())
    options = ['Leaderboard', 'Readme', 'How to', 'My entries', 'Submit'];
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
            <H3 textTransform="uppercase">{option}</H3>
          </Option>
        );
      })}
    </DesktopChallengeMenuStyle>
  );
};

DesktopChallengeMenu.propTypes = {
  section: PropsTypes.number,
  setSection: PropsTypes.func,
};

DesktopChallengeMenu.defaultProps = {
  section: 0,
  setSection: null,
};

export default DesktopChallengeMenu;
