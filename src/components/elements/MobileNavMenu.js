import React from 'react';
import {FlexColumn, FlexRow, Svg, TransBack} from '../../utils/containers';
import {Menu} from '../../utils/fonts';
import loginIco from '../../assets/login_ico.svg';
import registerIco from '../../assets/register_ico.svg';
import cupIco from '../../assets/cup_ico.svg';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {CHALLENGES_PAGE} from '../../utils/globals';
import PropsTypes from 'prop-types';
import KeyCloakService from '../../services/KeyCloakService';

const MobileNavMenuStyle = styled(FlexColumn)`
  gap: 32px;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: ${({theme}) => theme.navShadow};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: flex-start;
  z-index: 3;

  a, button {
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
        background-color: ${({theme}) => theme.colors.green};
      }

      li {
        color: ${({theme}) => theme.colors.green};
      }
    }
  }
`;

const MobileNavMenu = (props) => {
    return (
        <TransBack transition='transform' alignmentX='flex-start' top='42px'
                   translateY={props.translateY} onClick={props.toggleNavMenu}>
            <MobileNavMenuStyle as='ul'>
                <FlexRow as={Link} to={CHALLENGES_PAGE} gap='16px'>
                    <Svg width='16px' height='16px' src={cupIco}/>
                    <Menu as='li'>
                        Challenges
                    </Menu>
                </FlexRow>
                {!KeyCloakService.isLoggedIn() ?
                    <FlexRow as='button' onClick={KeyCloakService.doRegister} gap='16px'>
                        <Svg width='16px' height='16px' src={registerIco}/>
                        <Menu as='li'>
                            Register
                        </Menu>
                    </FlexRow> : ''}
                {KeyCloakService.isLoggedIn() ?
                    <FlexRow as='button' onClick={KeyCloakService.doLogout} gap='16px'>
                        <Svg width='16px' height='16px' src={loginIco} rotate='180deg'/>
                        <Menu as='li'>
                            Sign out
                        </Menu>
                    </FlexRow> :
                    <FlexRow as='button' onClick={KeyCloakService.doLogin} gap='16px'>
                        <Svg width='16px' height='16px' src={loginIco}/>
                        <Menu as='li'>
                            Sign in
                        </Menu>
                    </FlexRow>}
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