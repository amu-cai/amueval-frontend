import React from 'react';
import { FlexRow, Svg } from '../../../utils/containers';
import Logo from '../../generic/Logo';
import MobileNavMenu from '../MobileNavMenu';
import { Link } from 'react-router-dom';
import loginIco from '../../../assets/login_ico.svg';
import userIco from '../../../assets/user_ico.svg';
import { Menu } from '../../../utils/fonts';
import registerIco from '../../../assets/register_ico.svg';
import {
    CHALLENGES_PAGE,
    LOGIN_PAGE,
    REGISTER_PAGE,
} from '../../../utils/globals';
import cupIco from '../../../assets/cup_ico.svg';
import NavBarStyle from './styles/NavBarStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
    loggedBarPositionToggle,
    navMenuHoverHandler,
    navMenuPositionToggle,
} from '../../../redux/navigationSlice';
import MenuButtonStyle from './styles/MenuButtonStyle';
import colors from "../../../utils/colors";

const NavBar = () => {
    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navOptionsVisible = useSelector(
        (state) => state.navigation.navOptionsVisible
    );
    const navMenuPosition = useSelector(
        (state) => state.navigation.navMenuPosition
    );

    return (
        <>
            <NavBarStyle as="header">
                <FlexRow height="100%" alignmentX="space-between" as="nav">
                    <Logo navOptions={navOptionsVisible} />
                    {navOptionsVisible && (
                        <>
                            <MenuButtonStyle
                                as="button"
                                onClick={() => dispatch(navMenuPositionToggle())}
                            />
                            <FlexRow as="ul" className="ul-desktop" gap="32px">
                                <FlexRow as={Link} to={CHALLENGES_PAGE} gap="12px">
                                    <Svg width="16px" height="16px" src={cupIco} backgroundColor={colors.green500} />
                                    <Menu as="li">Challenges</Menu>
                                </FlexRow>
                                {!loggedIn && (
                                    <FlexRow as={Link} to={REGISTER_PAGE} gap="12px">
                                        <Svg width="16px" height="16px" src={registerIco} backgroundColor={colors.green500} />
                                        <Menu as="li">Register</Menu>
                                    </FlexRow>
                                )}
                                {loggedIn ? (
                                    <Svg
                                        as="button"
                                        onClick={() => dispatch(loggedBarPositionToggle())}
                                        width="32px"
                                        height="32px"
                                        src={userIco}
                                        margin="0 16px 0 0"
                                    />
                                ) : (
                                    <FlexRow as={Link} to={LOGIN_PAGE} gap="12px">
                                        <Svg width="16px" height="16px" src={loginIco} backgroundColor={colors.green500} />
                                        <Menu as="li">Sign in</Menu>
                                    </FlexRow>
                                )}
                            </FlexRow>
                        </>
                    )}
                </FlexRow>
            </NavBarStyle>
            <MobileNavMenu
                mobileMenuHoverTrue={() => dispatch(navMenuHoverHandler(true))}
                mobileMenuHoverFalse={() => dispatch(navMenuHoverHandler(false))}
                translateY={navMenuPosition}
                toggleNavMenu={() => dispatch(navMenuPositionToggle())}
            />
        </>
    );
};

export default NavBar;