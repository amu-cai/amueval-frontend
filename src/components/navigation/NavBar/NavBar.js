import React from 'react';
import { FlexRow, Svg } from '../../../utils/containers';
import Logo from '../../generic/Logo';
import MobileNavMenu from '../MobileNavMenu';
import { Link } from 'react-router-dom';
import loginIco from '../../../assets/login_ico.svg';
import userIco from '../../../assets/avatar.svg';
import {Menu} from '../../../utils/fonts';
import registerIco from '../../../assets/register_ico.svg';
import {
    CHALLENGE_CREATE_PAGE,
    CHALLENGES_PAGE,
    LOGIN_PAGE,
    REGISTER_PAGE,
} from '../../../utils/globals';
import NavBarStyle from './styles/NavBarStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
    loggedBarPositionToggle,
    navMenuHoverHandler,
    navMenuPositionToggle,
} from '../../../redux/navigationSlice';
import MenuButtonStyle from './styles/MenuButtonStyle';
import colors from "../../../utils/colors";
import { setRightsInfo } from '../../../redux/authSlice';
import getUserRightsInfo from '../../../api/getUserRightsInfo';
import theme from "../../../utils/theme";

const NavBar = () => {
    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navOptionsVisible = useSelector(
        (state) => state.navigation.navOptionsVisible
    );
    const navMenuPosition = useSelector(
        (state) => state.navigation.navMenuPosition
    );
    const [userRightsInfo, setUserRightsInfo] = React.useState(null);
    const username = useSelector((state) => state.auth.user);
    const isAdmin = useSelector((state) => state.auth.isAdmin);
    const isAuthor = useSelector((state) => state.auth.isAuthor);

    React.useEffect(() => {
        if (
            (isAdmin === null ||
                isAdmin === undefined ||
                isAuthor === null ||
                isAuthor === undefined) &&
            username
        ) {
            getUserRightsInfo(setUserRightsInfo);
        } else {
            setUserRightsInfo({ isAdmin: isAdmin, isAuthor: isAuthor });
        }
    }, [isAdmin, isAuthor, username]);

    React.useEffect(() => {
        if (userRightsInfo) {
            dispatch(
                setRightsInfo({
                    isAdmin: userRightsInfo.isAdmin,
                    isAuthor: userRightsInfo.isAuthor,
                })
            );
        }
    }, [dispatch, userRightsInfo]);

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
                                    <Menu as="li">Challenges</Menu>
                                </FlexRow>
                                {(userRightsInfo?.isAdmin || userRightsInfo?.isAuthor) && (
                                    <FlexRow as={Link} to={CHALLENGE_CREATE_PAGE} gap="12px">
                                        <Menu as="li">Create challenge</Menu>
                                    </FlexRow>
                                )}
                                {!loggedIn && (
                                    <FlexRow as={Link} to={REGISTER_PAGE} gap="12px">
                                        <Svg width="16px" height="16px" src={registerIco} backgroundColor={colors.green500} />
                                        <Menu as="li">Register</Menu>
                                    </FlexRow>
                                )}
                                {loggedIn ? (
                                    <Svg
                                        backgroundColor={theme.colors.green700}
                                        as="button"
                                        onClick={() => dispatch(loggedBarPositionToggle())}
                                        width="42px"
                                        height="42px"
                                        src={userIco}
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