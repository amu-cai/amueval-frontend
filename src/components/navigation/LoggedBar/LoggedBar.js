import React from 'react';
import {
  Container,
  FlexColumn,
  FlexRow,
  Svg,
  TransBack,
} from '../../../utils/containers';
import { Body, Medium } from '../../../utils/fonts';
import theme from '../../../utils/theme';
import userIco from '../../../assets/user_ico.svg';
import loginIco from '../../../assets/login_ico.svg';
import privacyIco from '../../../assets/policy_ico.svg';
import createIco from '../../../assets/create_ico.svg';
import { Link } from 'react-router-dom';
import {
  POLICY_PRIVACY_PAGE,
  PROFILE_PAGE,
  CHALLENGE_CREATE_PAGE,
  REDIRECT_TO_ROOT_PAGE,
} from '../../../utils/globals';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import LoggedBarStyle from './LoggedBarStyle';
import {
  loggedBarHoverHandler,
  loggedBarPositionToggle,
} from '../../../redux/navigationSlice';

const LoggedBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.auth.user);
  const loggedBarPosition = useSelector(
    (state) => state.navigation.loggedBarPosition
  );

  return (
    <TransBack
      transition="transform"
      translateX={loggedBarPosition}
      onClick={() => dispatch(loggedBarPositionToggle())}
      animTime="0.2s"
    >
      <LoggedBarStyle
        onMouseEnter={() => dispatch(loggedBarHoverHandler(true))}
        onMouseLeave={() => dispatch(loggedBarHoverHandler(false))}
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
          <Medium as="p">{username}</Medium>
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
              loggedBarPosition === '0'
                ? () =>
                    dispatch(
                      logOut({
                        redirectToRootPage: () =>
                          REDIRECT_TO_ROOT_PAGE(navigate),
                      })
                    )
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
