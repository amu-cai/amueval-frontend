import React from 'react';
import {
    FlexColumn,
    FlexRow,
    Svg,
    // TransBack,
} from '../../../utils/containers';
import userIco from '../../../assets/avatar.svg';
import {Link} from 'react-router-dom';
import {
    PROFILE_PAGE,
    ADMIN_PANEL_PAGE, CHALLENGE_CREATE_PAGE, ROOT_PAGE, YOUR_CHALLENGES_PAGE
} from '../../../utils/globals';
import {useDispatch, useSelector} from 'react-redux';
import LoggedBarStyle from './LoggedBarStyle';
import {
    loggedBarHoverHandler,
    toggleLoggedBarCompressed,
} from '../../../redux/navigationSlice';
import {setRightsInfo} from '../../../redux/authSlice';
import getUserRightsInfo from '../../../api/getUserRightsInfo';
import theme from "../../../utils/theme";
import logoAmuEval from '../../../assets/logo_amueval.svg';
import menuButton from '../../../assets/menu-button.svg';
import Button from "../../generic/Button";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import menuAdminPanel from '../../../assets/menu_admin_panel.svg';
import menuHome from '../../../assets/menu_home.svg';
import menuYourChallenges from '../../../assets/menu_your_challenges.svg';
// import menuSettings from '../../../assets/menu_settings.svg';
import menuLogOut from '../../../assets/menu_logout.svg';
import KeyCloakService from "../../../services/KeyCloakService";

const LoggedBar = () => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.auth.user);
    const isAdmin = useSelector((state) => state.auth.isAdmin);
    const isAuthor = useSelector((state) => state.auth.isAuthor);
    const [userRightsInfo, setUserRightsInfo] = React.useState(null);
    const loggedIn = useSelector((state) => state.auth.isLoggedIn);

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
            setUserRightsInfo({isAdmin: isAdmin, isAuthor: isAuthor});
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
            {loggedIn && (
                <LoggedBarStyle
                    onMouseEnter={() => dispatch(loggedBarHoverHandler(true))}
                    onMouseLeave={() => dispatch(loggedBarHoverHandler(false))}
                >
                    <FlexRow
                        alignmentX="space-between"
                        alignmentY="center"
                        gap="16px"
                        width="100%"
                        padding="20px"
                    >
                        <FlexRow
                            as={Link} to={ROOT_PAGE}>
                            <img
                                alt="logo"
                                className="loggedBarLogo"
                                src={logoAmuEval}
                            />
                        </FlexRow>
                        <Svg
                            onClick={
                                () =>
                                    dispatch(toggleLoggedBarCompressed(false))
                            }
                            className="toggleMenu"
                            src={menuButton}
                            backgroundColor={theme.colors.green700}
                            size="cover"
                            width="24px"
                            height="24px"
                        />
                    </FlexRow>
                    <div className="border"></div>
                    <FlexRow as={Link} to={PROFILE_PAGE}
                             alignmentX="flex-start"
                             alignmentY="center"
                             gap="16px"
                             width="100%"
                             padding="20px"
                    >
                        <Svg
                            src={userIco}
                            width="30px"
                            height="30px"
                            backgroundColor={theme.colors.green700}
                            size="cover"
                        />
                        <span>{username.length > 12 ? username.slice(0, 12) + '...' : username}</span>
                    </FlexRow>
                    <div className="border"></div>
                    {(userRightsInfo?.isAdmin || userRightsInfo?.isAuthor) && (
                        <FlexRow as={Link} to={CHALLENGE_CREATE_PAGE} alignmentX="center" width="100%">
                            <Button
                                backgroundColor={theme.colors.white}
                                color={theme.colors.black700}
                                borderColor={theme.colors.green700}
                                height="34px"
                                width="170px"
                                handler=""
                                margin="16px"
                            >
                                <AddCircleOutlineOutlinedIcon
                                    style={{
                                        color: theme.colors.green700,
                                        marginRight: '6px'
                                    }}
                                />
                                Create challenge
                            </Button>
                        </FlexRow>
                    )}
                    <FlexColumn
                        alignmentX="flex-start"
                        className="sideMenuList"
                    >
                            <FlexRow as={Link} to={ROOT_PAGE} gap="16px" className="sideMenuItem">
                                <img
                                    alt="home"
                                    src={menuHome}
                                />
                                <span>Home</span>
                            </FlexRow>
                        {userRightsInfo?.isAdmin && (
                        <FlexRow as={Link} to={ADMIN_PANEL_PAGE} gap="16px" className="sideMenuItem">
                            <img
                                alt="admin panel"
                                src={menuAdminPanel}
                            />
                            <span>Admin panel</span>
                        </FlexRow>
                        )}
                        <FlexRow as={Link} to={YOUR_CHALLENGES_PAGE} gap="16px" className="sideMenuItem">
                            <img
                                alt="your challenges"
                                src={menuYourChallenges}
                            />
                            <span>Your challenges</span>
                        </FlexRow>
                        {/*<FlexRow as={Link} to={ROOT_PAGE} gap="16px" className="sideMenuItem">*/}
                        {/*    <img*/}
                        {/*        alt="settings"*/}
                        {/*        src={menuSettings}*/}
                        {/*    />*/}
                        {/*    <span>Settings</span>*/}
                        {/*</FlexRow>*/}
                        <FlexRow
                            as="button"
                            gap="16px" className="sideMenuItem"
                            onClick={KeyCloakService.doLogout}
                        >
                            <img
                                alt="sign out"
                                src={menuLogOut}
                            />
                            <span>Sign out</span>
                        </FlexRow>
                    </FlexColumn>
                </LoggedBarStyle>
            )}
        </>
    );
};

export default LoggedBar;
