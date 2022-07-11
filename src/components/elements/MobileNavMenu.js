import React from "react";
import {Container, FlexColumn, FlexRow, Svg} from "../../utils/containers";
import {Menu} from "../../utils/fonts";
import loginIco from '../../assets/login_ico.svg';
import registerIco from '../../assets/register_ico.svg';
import cupIco from '../../assets/cup_ico.svg';
import styled from "styled-components";
import {Link} from "react-router-dom";

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
  z-index: 2;

  a {
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

const TransBack = styled(Container)`
  position: fixed;
  top: 42px;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: transform 0.3s ease-in-out;
`

const MobileNavMenu = (props) => {
    return (
        <TransBack translateY={props.translateY} onClick={props.toggleNavMenu}>
            <MobileNavMenuStyle as='ul'>
                <FlexRow as={Link} to='/' gap='16px'>
                    <Svg width='16px' height='16px' src={loginIco}/>
                    <Menu as='li'>
                        Sign in
                    </Menu>
                </FlexRow>
                <FlexRow as={Link} to='/' gap='16px'>
                    <Svg width='16px' height='16px' src={registerIco}/>
                    <Menu as='li'>
                        Register
                    </Menu>
                </FlexRow>
                <FlexRow as={Link} to='/challenges' gap='16px'>
                    <Svg width='16px' height='16px' src={cupIco}/>
                    <Menu as='li'>
                        Challenges
                    </Menu>
                </FlexRow>
            </MobileNavMenuStyle>
        </TransBack>
    );
}

export default MobileNavMenu;