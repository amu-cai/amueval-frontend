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
    REDIRECT_TO_ROOT_PAGE,
    ADMIN_PANEL_PAGE, CHALLENGE_CREATE_PAGE, ROOT_PAGE,
} from '../../../utils/globals';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../../redux/authSlice';
import {useNavigate} from 'react-router-dom';
import LoggedBarCompressedStyle from './LoggedBarCompressedStyle';
import {
    loggedBarHoverHandler,
    toggleLoggedBarCompressed
} from '../../../redux/navigationSlice';
import {setRightsInfo} from '../../../redux/authSlice';
import getUserRightsInfo from '../../../api/getUserRightsInfo';
import theme from "../../../utils/theme";
import menuButton from '../../../assets/menu-button.svg';
import Button from "../../generic/Button";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import menuAdminPanel from '../../../assets/menu_admin_panel.svg';
import menuHome from '../../../assets/menu_home.svg';
import menuYourSubmissions from '../../../assets/menu_your_submissions.svg';
import menuYourChallenges from '../../../assets/menu_your_challenges.svg';
import menuSettings from '../../../assets/menu_settings.svg';
import menuLogOut from '../../../assets/menu_logout.svg';

const LoggedBarCompressed = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                <LoggedBarCompressedStyle
                    onMouseEnter={() => dispatch(loggedBarHoverHandler(true))}
                    onMouseLeave={() => dispatch(loggedBarHoverHandler(false))}
                >
                    <FlexRow
                        as="button"
                        onClick={
                            () =>
                                dispatch(toggleLoggedBarCompressed(false))
                        }
                        alignmentX="space-between"
                        alignmentY="center"
                        gap="16px"
                        width="100%"
                        padding="20px"
                    >
                        <Svg
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
                    </FlexRow>
                    <div className="border"></div>
                    {(userRightsInfo?.isAdmin || userRightsInfo?.isAuthor) && (
                        <FlexRow as={Link} to={CHALLENGE_CREATE_PAGE} alignmentX="center" width="100%">
                            <Button
                                backgroundColor={theme.colors.white}
                                color={theme.colors.black700}
                                borderColor={theme.colors.green700}
                                height="36px"
                                width="36px"
                                handler=""
                                margin="16px"
                            >
                                <AddCircleOutlineOutlinedIcon
                                    style={{
                                        color: theme.colors.green700,
                                    }}
                                />
                            </Button>
                        </FlexRow>
                    )}
                    <FlexColumn
                        width="100%"
                        className="sideMenuList"
                        alignmentX="center"
                    >
                        <FlexRow as={Link} to={ROOT_PAGE} gap="16px" className="sideMenuItem">
                            <img
                                alt="home"
                                src={menuHome}
                            />
                        </FlexRow>
                        {userRightsInfo?.isAdmin && (
                            <FlexRow as={Link} to={ADMIN_PANEL_PAGE} gap="16px" className="sideMenuItem">
                                <img
                                    alt="admin panel"
                                    src={menuAdminPanel}
                                />
                            </FlexRow>
                        )}
                        <FlexRow as={Link} to={ROOT_PAGE} gap="16px" className="sideMenuItem">
                            <img
                                alt="your submissions"
                                src={menuYourSubmissions}
                            />
                        </FlexRow>
                        <FlexRow as={Link} to={ROOT_PAGE} gap="16px" className="sideMenuItem">
                            <img
                                alt="your challenges"
                                src={menuYourChallenges}
                            />
                        </FlexRow>
                        <FlexRow as={Link} to={ROOT_PAGE} gap="16px" className="sideMenuItem">
                            <img
                                alt="settings"
                                src={menuSettings}
                            />
                        </FlexRow>
                        <FlexRow
                            as="button"
                            gap="16px" className="sideMenuItem"
                            onClick={
                                () =>
                                    dispatch(
                                        logOut({
                                            redirectToRootPage: () =>
                                                REDIRECT_TO_ROOT_PAGE(navigate),
                                        })
                                    )
                            }
                        >
                            <img
                                alt="sign out"
                                src={menuLogOut}
                            />
                        </FlexRow>
                    </FlexColumn>
                </LoggedBarCompressedStyle>
            )}
        </>
    );
};

export default LoggedBarCompressed;
