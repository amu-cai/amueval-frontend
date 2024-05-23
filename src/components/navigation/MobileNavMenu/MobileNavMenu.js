import React from 'react';
import { FlexColumn, FlexRow, Svg, TransBack } from '../../../utils/containers';
import { Menu } from '../../../utils/fonts';
import loginIco from '../../../assets/login_ico.svg';
import userIco from '../../../assets/avatar.svg';
import registerIco from '../../../assets/register_ico.svg';
import cupIco from '../../../assets/cup_ico.svg';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {
  CHALLENGES_PAGE,
  CHALLENGE_CREATE_PAGE,
  LOGIN_PAGE,
  POLICY_PRIVACY_PAGE,
  PROFILE_PAGE,
  REDIRECT_TO_ROOT_PAGE,
  REGISTER_PAGE,
} from '../../../utils/globals';
import policyIco from '../../../assets/policy_ico.svg';
import createIco from '../../../assets/create_ico.svg';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../redux/authSlice';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <TransBack
      transition="transform"
      alignmentX="flex-start"
      top="80px"
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

        {!loggedIn && (
          <FlexRow as={Link} to={REGISTER_PAGE} gap="16px">
            <Svg width="16px" height="16px" src={registerIco} />
            <Menu as="li">Register</Menu>
          </FlexRow>
        )}
        {loggedIn ? (
          <>
            <FlexRow as={Link} to={PROFILE_PAGE} gap="16px">
              <Svg width="16px" height="16px" src={userIco} size="cover" />
              <Menu as="li">Profile</Menu>
            </FlexRow>
            <FlexRow as={Link} to={CHALLENGE_CREATE_PAGE} gap="12px">
              <Svg size="cover" width="16px" height="16px" src={createIco} />
              <Menu as="li">Create Challenge</Menu>
            </FlexRow>
            <FlexRow as={Link} to={POLICY_PRIVACY_PAGE} gap="16px">
              <Svg width="16px" height="16px" src={policyIco} size="cover" />
              <Menu as="li">Privacy policy</Menu>
            </FlexRow>
            <FlexRow
              as="button"
              onClick={() =>
                dispatch(
                  logOut({
                    redirectToRootPage: () => REDIRECT_TO_ROOT_PAGE(navigate),
                  })
                )
              }
              gap="16px"
            >
              <Svg width="16px" height="16px" src={loginIco} rotate="180deg" />
              <Menu as="li">Sign out</Menu>
            </FlexRow>
          </>
        ) : (
          <FlexRow as={Link} to={LOGIN_PAGE} gap="16px">
            <Svg width="16px" height="16px" src={loginIco} />
            <Menu as="li">Sign in</Menu>
          </FlexRow>
        )}
      </MobileNavMenuStyle>
    </TransBack>
  );
};

export default MobileNavMenu;
