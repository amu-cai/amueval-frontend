import React from "react";
import {Container, FlexRow} from "../../utils/containers";
import Logo from "./Logo";
import styled from "styled-components";
import menuButtonIcon from '../../assets/menu-button.svg';
import MobileNavMenu from "./MobileNavMenu";

const NavBarStyle = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: ${({theme}) => theme.navShadow};
  padding: 0 10px;
  z-index: 2;
`;

const MenuButton = styled(Container)`
  width: 20px;
  height: 14px;
  background-image: url(${menuButtonIcon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-top: 4px;
`;

const NavBar = () => {
    const [navMenuTranslateY, setNavMenuTranslateY] = React.useState('-100vh');

    const toggleNavMenu = () => {
        if (navMenuTranslateY === '-100vh')
            setNavMenuTranslateY('0');
        else
            setNavMenuTranslateY('-100vh');
    }

    return (
        <NavBarStyle as='header'>
            <FlexRow height='100%' alignmentX='space-between' as='nav'>
                <Logo/>
                <MenuButton as='button' onClick={() => toggleNavMenu()}/>
            </FlexRow>
            <MobileNavMenu translateY={navMenuTranslateY}/>
        </NavBarStyle>
    );
}

export default NavBar;