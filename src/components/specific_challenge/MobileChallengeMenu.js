import React from 'react';
import { FlexRow } from '../../utils/containers';
import styled from 'styled-components';
import { Medium } from '../../utils/fonts';
import PropsTypes from 'prop-types';
import KeyCloakService from '../../services/KeyCloakService';

const MenuOption = styled(Medium)`
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  color: ${({ theme, active }) =>
    active ? theme.colors.green : theme.colors.dark};

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const MobileChallengeMenu = (props) => {
  let options = ['Leaderboard', 'Readme', 'How to'];
  if (KeyCloakService.isLoggedIn())
    options = ['Leaderboard', 'Readme', 'How to', 'My entries', 'Submit'];
  const renderLoggedOptions = () => {
    if (options.length > 3) {
      return (
        <FlexRow gap="36px">
          <MenuOption
            as="button"
            active={3 === props.section}
            to="/"
            onClick={() => props.setSection(3)}
          >
            {options[3]}
          </MenuOption>
          <MenuOption
            as="button"
            active={4 === props.section}
            to="/"
            onClick={() => props.setSection(4)}
          >
            {options[4]}
          </MenuOption>
        </FlexRow>
      );
    }
  };
  return (
    <>
      <FlexRow gap="32px">
        <MenuOption
          as="button"
          active={0 === props.section}
          to="/"
          onClick={() => props.setSection(0)}
        >
          {options[0]}
        </MenuOption>
        <MenuOption
          as="button"
          active={1 === props.section}
          to="/"
          onClick={() => props.setSection(1)}
        >
          {options[1]}
        </MenuOption>
        <MenuOption
          as="button"
          active={2 === props.section}
          to="/"
          onClick={() => props.setSection(2)}
        >
          {options[2]}
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
