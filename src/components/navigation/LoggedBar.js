import React from 'react';
import {
  Container,
  FlexColumn,
  FlexRow,
  Svg,
  TransBack,
} from '../../utils/containers';
import { Body, Medium } from '../../utils/fonts';
import theme from '../../utils/theme';
import userIco from '../../assets/user_ico.svg';
import loginIco from '../../assets/login_ico.svg';
import privacyIco from '../../assets/policy_ico.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  POLICY_PRIVACY_PAGE,
  PROFILE_PAGE,
  CHALLENGE_CREATE_PAGE,
} from '../../utils/globals';
import createIco from '../../assets/create_ico.svg';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { ROOT_PAGE } from '../../utils/globals';

const LoggedBarStyle = styled(FlexColumn)`
  width: 360px;
  height: calc(100vh - 48px);
  position: fixed;
  top: 50px;
  right: 0;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 3;

  button,
  a {
    cursor: pointer;

    li {
      transition: color 0.3s ease-in-out;
    }

    div {
      transition: background-color 0.3s ease-in-out;
    }

    &:hover {
      li {
        color: ${({ theme }) => theme.colors.green};
      }

      div {
        background-color: ${({ theme }) => theme.colors.green};
      }
    }

    * {
      cursor: pointer;
    }
  }
`;

const LoggedBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectToRootPage = () => {
    const pageName = window.location.pathname.split(ROOT_PAGE).at(-1);
    if (pageName) {
      navigate(ROOT_PAGE);
    }
  };

  return (
    <TransBack
      transition="transform"
      translateX={props.visible}
      onClick={props.loggedBarVisibleHandler}
      animTime="0.2s"
    >
      <LoggedBarStyle
        onMouseEnter={props.loggedBarHoverTrue}
        onMouseLeave={props.loggedBarHoverFalse}
      >
        <FlexRow
          alignmentX="flex-start"
          alignmentY="flex-end"
          gap="16px"
          width="100%"
          padding="12px 16px"
        >
          <Svg
            src={userIco}
            width="32px"
            height="32px"
            backgroundColor={theme.colors.dark}
            size="cover"
          />
          <Medium as="p">{props.username}</Medium>
        </FlexRow>
        <Container
          width="90%"
          backgroundColor={theme.colors.dark05}
          height="1px"
        />
        <FlexColumn
          as="ul"
          gap="24px"
          padding="32px 24px"
          alignmentX="flex-start"
        >
          <FlexRow as={Link} to={PROFILE_PAGE} gap="16px">
            <Svg width="16px" height="16px" src={userIco} size="cover" />
            <Body as="li">Profile</Body>
          </FlexRow>
          <FlexRow as={Link} to={CHALLENGE_CREATE_PAGE} gap="12px">
            <Svg size="cover" width="16px" height="16px" src={createIco} />
            <Body as="li">Challenge create</Body>
          </FlexRow>
          <FlexRow as={Link} to={POLICY_PRIVACY_PAGE} gap="16px">
            <Svg width="16px" height="16px" src={privacyIco} size="cover" />
            <Body as="li">Privacy policy</Body>
          </FlexRow>
          <FlexRow
            as="button"
            onClick={
              props.visible === '0'
                ? () =>
                    dispatch(logOut({ redirectToRootPage: redirectToRootPage }))
                : null
            }
            gap="16px"
          >
            <Svg width="16px" height="16px" src={loginIco} rotate="180deg" />
            <Body as="li">Sign out</Body>
          </FlexRow>
        </FlexColumn>
      </LoggedBarStyle>
    </TransBack>
  );
};

export default LoggedBar;
