import React from 'react';
import {Container, FlexColumn, FlexRow, Svg, TransBack} from '../../utils/containers';
import {Body, H3} from '../../utils/fonts';
import theme from '../../utils/theme';
import userIco from '../../assets/user_ico.svg';
import KeyCloakService from '../../services/KeyCloakService';
import loginIco from '../../assets/login_ico.svg';
import styled from 'styled-components';

const LoggedBarStyle = styled(FlexColumn)`
  width: 260px;
  height: calc(100vh - 48px);
  position: fixed;
  top: 50px;
  right: 0;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: ${({theme}) => theme.shadow};
  z-index: 3;

  button {
    cursor: pointer;

    li {
      transition: color 0.3s ease-in-out;
    }

    div {
      transition: background-color 0.3s ease-in-out;
    }

    &:hover {
      li {
        color: ${({theme}) => theme.colors.green};
      }

      div {
        background-color: ${({theme}) => theme.colors.green};
      }
    }

    * {
      cursor: pointer;
    }
  }
`;

const LoggedBar = (props) => {
    return (
        <TransBack transition='transform' translateX={props.visible}
                   onClick={props.loggedBarVisibleHandler} animTime='0.5s'>
            <LoggedBarStyle>
                <FlexRow alignmentX='flex-start' alignmentY='flex-end'
                         gap='16px' width='100%' padding='12px 16px'>
                    <Svg src={userIco} width='32px' height='32px' backgroundColor={theme.colors.dark} size='cover'/>
                    <H3>
                        {props.username}
                    </H3>
                </FlexRow>
                <Container width='90%' backgroundColor={theme.colors.dark05} height='1px'/>
                <FlexColumn as='ul' gap='24px' padding='32px 24px' alignmentX='flex-start'>
                    <FlexRow as='button' gap='16px'>
                        <Svg width='16px' height='16px' src={userIco} size='cover'/>
                        <Body as='li'>
                            Profile
                        </Body>
                    </FlexRow>
                    <FlexRow as='button' onClick={props.visible === '0' ? KeyCloakService.doLogout : null} gap='16px'>
                        <Svg width='16px' height='16px' src={loginIco} rotate='180deg'/>
                        <Body as='li'>
                            Sign out
                        </Body>
                    </FlexRow>
                </FlexColumn>
            </LoggedBarStyle>
        </TransBack>
    );
};

export default LoggedBar;