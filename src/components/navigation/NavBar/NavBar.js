import React from 'react';
import { Container, FlexRow, Svg } from '../../../utils/containers';
import Logo from '../../generic/Logo';
import styled from 'styled-components';
import menuButtonIcon from '../../../assets/menu-button.svg';
import MobileNavMenu from '../MobileNavMenu';
import { Link } from 'react-router-dom';
import loginIco from '../../../assets/login_ico.svg';
import userIco from '../../../assets/user_ico.svg';
import { Menu } from '../../../utils/fonts';
import registerIco from '../../../assets/register_ico.svg';
import { CHALLENGES_PAGE, POLICY_PRIVACY_PAGE } from '../../../utils/globals';
import cupIco from '../../../assets/cup_ico.svg';
import NavBarStyle from './NavBarStyle';
import KeyCloakService from '../../../services/KeyCloakService';
import policyIco from '../../../assets/policy_ico.svg';

const MenuButton = styled(Container)`
  width: 20px;
  height: 14px;
  background-image: url(${menuButtonIcon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-top: 4px;

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    display: none;
  }
`;

const NavBar = (props) => {
  const [navMenuTranslateY, setNavMenuTranslateY] = React.useState(
    'calc(-100vh - 42px)'
  );
  const [mobileMenuHover, setMobileMenuHover] = React.useState(false);

  const mobileMenuHoverTrue = () => {
    setMobileMenuHover(true);
  };

  const mobileMenuHoverFalse = () => {
    setMobileMenuHover(false);
  };
  const toggleNavMenu = () => {
    if (navMenuTranslateY === 'calc(-100vh - 42px)') setNavMenuTranslateY('0');
    else if (!mobileMenuHover) setNavMenuTranslateY('calc(-100vh - 42px)');
  };

  return (
    <NavBarStyle as="header">
      <FlexRow height="100%" alignmentX="space-between" as="nav">
        <Logo />
        <MenuButton as="button" onClick={toggleNavMenu} />
        <FlexRow as="ul" className="ul-desktop" gap="32px">
          <FlexRow as={Link} to={CHALLENGES_PAGE} gap="16px">
            <Svg width="16px" height="16px" src={cupIco} />
            <Menu as="li">Challenges</Menu>
          </FlexRow>
          <FlexRow as={Link} to={POLICY_PRIVACY_PAGE} gap="12px">
            <Svg size="cover" width="16px" height="16px" src={policyIco} />
            <Menu as="li">Privacy policy</Menu>
          </FlexRow>
          {!KeyCloakService.isLoggedIn() ? (
            <FlexRow
              as="button"
              onClick={KeyCloakService.doRegister}
              gap="16px"
            >
              <Svg width="16px" height="16px" src={registerIco} />
              <Menu as="li">Register</Menu>
            </FlexRow>
          ) : (
            ''
          )}
          {KeyCloakService.isLoggedIn() ? (
            <Svg
              as="button"
              onClick={props.loggedBarVisibleHandler}
              width="32px"
              height="32px"
              src={userIco}
              margin="0 16px 0 0"
            />
          ) : (
            <FlexRow as="button" onClick={KeyCloakService.doLogin} gap="16px">
              <Svg width="16px" height="16px" src={loginIco} />
              <Menu as="li">Sign in</Menu>
            </FlexRow>
          )}
        </FlexRow>
      </FlexRow>
      <MobileNavMenu
        mobileMenuHoverTrue={mobileMenuHoverTrue}
        mobileMenuHoverFalse={mobileMenuHoverFalse}
        translateY={navMenuTranslateY}
        toggleNavMenu={toggleNavMenu}
      />
    </NavBarStyle>
  );
};

export default NavBar;
