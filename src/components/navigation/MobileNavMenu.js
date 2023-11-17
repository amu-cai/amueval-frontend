import React from 'react';
import { FlexColumn, FlexRow, Svg, TransBack } from '../../utils/containers';
import { Menu } from '../../utils/fonts';
import loginIco from '../../assets/login_ico.svg';
import userIco from '../../assets/user_ico.svg';
import registerIco from '../../assets/register_ico.svg';
import cupIco from '../../assets/cup_ico.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  CHALLENGES_PAGE,
  CHALLENGE_CREATE_PAGE,
  POLICY_PRIVACY_PAGE,
  PROFILE_PAGE,
} from '../../utils/globals';
import PropsTypes from 'prop-types';
import KeyCloakService from '../../services/KeyCloakService';
import policyIco from '../../assets/policy_ico.svg';
import createIco from '../../assets/create_ico.svg';

const MobileNavMenuStyle = styled(FlexColumn)`
  gap: 32px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.navShadow};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: flex-start;
  z-index: 3;

  a,
  button {
    cursor: pointer;

    div {
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }

    li {
      cursor: pointer;
      transition: color 0.3s ease-in-out;
    }

    &:hover {
      div {
        background-color: ${({ theme }) => theme.colors.green};
      }

      li {
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;

const MobileNavMenu = (props) => {
  return (
    <TransBack
      transition="transform"
      alignmentX="flex-start"
      top="42px"
      translateY={props.translateY}
      onClick={props.toggleNavMenu}
    >
      <MobileNavMenuStyle
        as="ul"
        onMouseEnter={props.mobileMenuHoverTrue}
        onMouseLeave={props.mobileMenuHoverFalse}
      >
        <FlexRow as={Link} to={CHALLENGES_PAGE} gap="16px">
          <Svg width="16px" height="16px" src={cupIco} />
          <Menu as="li">Challenges</Menu>
        </FlexRow>
        <FlexRow as={Link} to={CHALLENGE_CREATE_PAGE} gap="12px">
          <Svg size="cover" width="16px" height="16px" src={createIco} />
          <Menu as="li">Challenge create</Menu>
        </FlexRow>
        {!KeyCloakService.isLoggedIn() ? (
          <FlexRow
            as="button"
            onClick={() =>
              props.popUpMessageHandler(
                'Reminder',
                'Remember to check your spam mailbox to confirm your account.',
                () => KeyCloakService.doRegister
              )
            }
            gap="16px"
          >
            <Svg width="16px" height="16px" src={registerIco} />
            <Menu as="li">Register</Menu>
          </FlexRow>
        ) : (
          ''
        )}
        {KeyCloakService.isLoggedIn() ? (
          <>
            <FlexRow as={Link} to={PROFILE_PAGE} gap="16px">
              <Svg width="16px" height="16px" src={userIco} size="cover" />
              <Menu as="li">Profile</Menu>
            </FlexRow>
            <FlexRow as={Link} to={POLICY_PRIVACY_PAGE} gap="16px">
              <Svg width="16px" height="16px" src={policyIco} size="cover" />
              <Menu as="li">Privacy policy</Menu>
            </FlexRow>
            <FlexRow as="button" onClick={KeyCloakService.doLogout} gap="16px">
              <Svg width="16px" height="16px" src={loginIco} rotate="180deg" />
              <Menu as="li">Sign out</Menu>
            </FlexRow>
          </>
        ) : (
          <FlexRow as="button" onClick={KeyCloakService.doLogin} gap="16px">
            <Svg width="16px" height="16px" src={loginIco} />
            <Menu as="li">Sign in</Menu>
          </FlexRow>
        )}
      </MobileNavMenuStyle>
    </TransBack>
  );
};

MobileNavMenu.propTypes = {
  translateY: PropsTypes.string,
  toggleNavMenu: PropsTypes.func,
};

MobileNavMenu.defaultProps = {
  translateY: 'calc(-100vh - 42px)',
  toggleNavMenu: null,
};

export default MobileNavMenu;
