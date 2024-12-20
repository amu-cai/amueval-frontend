import React from 'react';
import { FlexRow } from '../../../utils/containers';
import styled from 'styled-components';
import { Medium } from '../../../utils/fonts';
import PropsTypes from 'prop-types';
import {
  CHALLENGE_SECTIONS,
  MENU_CHALLENGE_SECTIONS_WITH_LOGIN,
  MENU_CHALLENGE_SECTIONS_NO_LOGIN,
} from '../../../utils/globals';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuOption = styled(Medium)`
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  color: ${({ theme, active }) =>
    active ? theme.colors.green : theme.colors.dark};
  padding-top: 20px;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const MobileChallengeMenu = (props) => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  let options = MENU_CHALLENGE_SECTIONS_NO_LOGIN;
  if (loggedIn) options = MENU_CHALLENGE_SECTIONS_WITH_LOGIN;
  const renderLoggedOptions = () => {
    if (options === MENU_CHALLENGE_SECTIONS_WITH_LOGIN)
      return (
        <FlexRow gap="36px">
          <MenuOption
            as={Link}
            active={CHALLENGE_SECTIONS.HOW_TO === props.section}
            to={`/challenge/${props.challengeName}/${options[
              CHALLENGE_SECTIONS.HOW_TO
            ]
              .toLowerCase()
              .replace(' ', '')}`}
          >
            {options[CHALLENGE_SECTIONS.HOW_TO]}
          </MenuOption>
          <MenuOption
            as={Link}
            active={CHALLENGE_SECTIONS.MY_ENTRIES === props.section}
            to={`/challenge/${props.challengeName}/${options[
              CHALLENGE_SECTIONS.MY_ENTRIES
            ]
              .toLowerCase()
              .replace(' ', '')}`}
          >
            {options[CHALLENGE_SECTIONS.MY_ENTRIES]}
          </MenuOption>
          <MenuOption
            as={Link}
            active={CHALLENGE_SECTIONS.SUBMIT === props.section}
            to={`/challenge/${props.challengeName}/${options[
              CHALLENGE_SECTIONS.SUBMIT
            ]
              .toLowerCase()
              .replace(' ', '')}`}
          >
            {options[CHALLENGE_SECTIONS.SUBMIT]}
          </MenuOption>
        </FlexRow>
      );
  };
  return (
    <>
      <FlexRow gap="32px">
        <MenuOption
          as={Link}
          active={CHALLENGE_SECTIONS.LEADERBOARD === props.section}
          to={`/challenge/${props.challengeName}/${options[
            CHALLENGE_SECTIONS.LEADERBOARD
          ]
            .toLowerCase()
            .replace(' ', '')}`}
        >
          {options[CHALLENGE_SECTIONS.LEADERBOARD]}
        </MenuOption>
        <MenuOption
          as={Link}
          active={CHALLENGE_SECTIONS.ALL_ENTRIES === props.section}
          to={`/challenge/${props.challengeName}/${options[
            CHALLENGE_SECTIONS.ALL_ENTRIES
          ]
            .toLowerCase()
            .replace(' ', '')}`}
        >
          {options[CHALLENGE_SECTIONS.ALL_ENTRIES]}
        </MenuOption>
        <MenuOption
          as={Link}
          active={CHALLENGE_SECTIONS.README === props.section}
          to={`/challenge/${props.challengeName}/${options[
            CHALLENGE_SECTIONS.README
          ]
            .toLowerCase()
            .replace(' ', '')}`}
        >
          {options[CHALLENGE_SECTIONS.README]}
        </MenuOption>
      </FlexRow>
      {renderLoggedOptions()}
    </>
  );
};

MobileChallengeMenu.propTypes = {
  section: PropsTypes.number,
};

MobileChallengeMenu.defaultProps = {
  section: 0,
};

export default MobileChallengeMenu;
