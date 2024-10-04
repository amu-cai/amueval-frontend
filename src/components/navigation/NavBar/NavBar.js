import React from 'react';
import { FlexRow } from '../../../utils/containers';
import Logo from '../../generic/Logo';
import MobileNavMenu from '../MobileNavMenu';
import { Link } from 'react-router-dom';
import {
    CHALLENGES_PAGE,
    ROOT_PAGE
} from '../../../utils/globals';
import NavBarStyle from './styles/NavBarStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
    navMenuHoverHandler,
    navMenuPositionToggle,
} from '../../../redux/navigationSlice';
import MenuButtonStyle from './styles/MenuButtonStyle';
import theme from "../../../utils/theme";
import Button from "../../generic/Button";
// import { setRightsInfo } from '../../../redux/authSlice';
// import getUserRightsInfo from '../../../api/getUserRightsInfo';
import KeyCloakService from '../../../services/KeyCloakService';

const NavBar = () => {
    const dispatch = useDispatch();
    // const loggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navOptionsVisible = useSelector(
        (state) => state.navigation.navOptionsVisible
    );
    const navMenuPosition = useSelector(
        (state) => state.navigation.navMenuPosition
    );
    // const [userRightsInfo, setUserRightsInfo] = React.useState(null);
    // const username = useSelector((state) => state.auth.user);
    // const isAdmin = useSelector((state) => state.auth.isAdmin);
    // const isAuthor = useSelector((state) => state.auth.isAuthor);

    // React.useEffect(() => {
    //     if (
    //         (isAdmin === null ||
    //             isAdmin === undefined ||
    //             isAuthor === null ||
    //             isAuthor === undefined) &&
    //         username
    //     ) {
    //         getUserRightsInfo(setUserRightsInfo);
    //     } else {
    //         setUserRightsInfo({ isAdmin: isAdmin, isAuthor: isAuthor });
    //     }
    // }, [isAdmin, isAuthor, username]);

    // React.useEffect(() => {
    //     if (userRightsInfo) {
    //         dispatch(
    //             setRightsInfo({
    //                 isAdmin: userRightsInfo.isAdmin,
    //                 isAuthor: userRightsInfo.isAuthor,
    //             })
    //         );
    //     }
    // }, [dispatch, userRightsInfo]);

    return (
        <>
            {!KeyCloakService.isLoggedIn() && (
                <NavBarStyle as="header">
                    <FlexRow height="100%" alignmentX="space-between" as="nav">
                        <Logo navOptions={navOptionsVisible} />
                        {navOptionsVisible && (
                            <>
                                <MenuButtonStyle
                                    as="button"
                                    onClick={() => dispatch(navMenuPositionToggle())}
                                />
                                <FlexRow as="ul" className="ul-desktop" gap="40px">
                                    <FlexRow gap="32px">
                                        <FlexRow as={Link} to={CHALLENGES_PAGE}>
                                            <span>Challenges</span>
                                        </FlexRow>
                                        <FlexRow as={Link} to={`${ROOT_PAGE}#contact`}>
                                            <span>Contact</span>
                                        </FlexRow>
                                        <FlexRow as={Link} to={`${ROOT_PAGE}#csi`}>
                                            <span>CSI</span>
                                        </FlexRow>
                                    </FlexRow>
                                    {/*{(userRightsInfo?.isAdmin || userRightsInfo?.isAuthor) && (*/}
                                    {/*    <FlexRow as={Link} to={CHALLENGE_CREATE_PAGE} gap="12px">*/}
                                    {/*        <Menu as="li">Create challenge</Menu>*/}
                                    {/*    </FlexRow>*/}
                                    {/*)}*/}
                                    <FlexRow gap="8px">
                                        <FlexRow
                                            onClick={KeyCloakService.doRegister}
                                        >
                                            <Button
                                                backgroundColor={theme.colors.white}
                                                color="#5E5E5E"
                                                borderColor={theme.colors.green700}
                                                height="36px"
                                                width="120px"
                                            >
                                                Register
                                            </Button>
                                        </FlexRow>
                                        <FlexRow
                                            onClick={KeyCloakService.doLogin}
                                        >
                                            <Button
                                                backgroundColor={theme.colors.white}
                                                color={theme.colors.green700}
                                                borderColor={theme.colors.green700}
                                                height="36px"
                                                width="110px"
                                            >
                                                Sign In
                                            </Button>
                                        </FlexRow>
                                        <FlexRow
                                            onClick={KeyCloakService.doLogout}
                                        >
                                            <Button
                                                backgroundColor={theme.colors.white}
                                                color={theme.colors.green700}
                                                borderColor={theme.colors.green700}
                                                height="36px"
                                                width="110px"
                                            >
                                                Sign Out
                                            </Button>
                                            {KeyCloakService.getToken()}
                                        </FlexRow>
                                    </FlexRow>
                                </FlexRow>
                            </>
                        )}
                    </FlexRow>
                </NavBarStyle>
            )}
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

// import React from 'react';
// import { FlexRow } from '../../../utils/containers';
// import Logo from '../../generic/Logo';
// import MobileNavMenu from '../MobileNavMenu';
// import { Link } from 'react-router-dom';
// import {
//     // CHALLENGE_CREATE_PAGE,
//     CHALLENGES_PAGE,
//     LOGIN_PAGE,
//     REGISTER_PAGE,
//     ROOT_PAGE
// } from '../../../utils/globals';
// import NavBarStyle from './styles/NavBarStyle';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     navMenuHoverHandler,
//     navMenuPositionToggle,
// } from '../../../redux/navigationSlice';
// import MenuButtonStyle from './styles/MenuButtonStyle';
// import theme from "../../../utils/theme";
// import Button from "../../generic/Button";
// // import { setRightsInfo } from '../../../redux/authSlice';
// // import getUserRightsInfo from '../../../api/getUserRightsInfo';
//
// const NavBar = () => {
//     const dispatch = useDispatch();
//     const loggedIn = useSelector((state) => state.auth.isLoggedIn);
//     const navOptionsVisible = useSelector(
//         (state) => state.navigation.navOptionsVisible
//     );
//     const navMenuPosition = useSelector(
//         (state) => state.navigation.navMenuPosition
//     );
//     // const [userRightsInfo, setUserRightsInfo] = React.useState(null);
//     // const username = useSelector((state) => state.auth.user);
//     // const isAdmin = useSelector((state) => state.auth.isAdmin);
//     // const isAuthor = useSelector((state) => state.auth.isAuthor);
//
//     // React.useEffect(() => {
//     //     if (
//     //         (isAdmin === null ||
//     //             isAdmin === undefined ||
//     //             isAuthor === null ||
//     //             isAuthor === undefined) &&
//     //         username
//     //     ) {
//     //         getUserRightsInfo(setUserRightsInfo);
//     //     } else {
//     //         setUserRightsInfo({ isAdmin: isAdmin, isAuthor: isAuthor });
//     //     }
//     // }, [isAdmin, isAuthor, username]);
//
//     // React.useEffect(() => {
//     //     if (userRightsInfo) {
//     //         dispatch(
//     //             setRightsInfo({
//     //                 isAdmin: userRightsInfo.isAdmin,
//     //                 isAuthor: userRightsInfo.isAuthor,
//     //             })
//     //         );
//     //     }
//     // }, [dispatch, userRightsInfo]);
//
//     return (
//         <>
//             {!loggedIn && (
//                 <NavBarStyle as="header">
//                     <FlexRow height="100%" alignmentX="space-between" as="nav">
//                         <Logo navOptions={navOptionsVisible} />
//                         {navOptionsVisible && (
//                             <>
//                                 <MenuButtonStyle
//                                     as="button"
//                                     onClick={() => dispatch(navMenuPositionToggle())}
//                                 />
//                                 <FlexRow as="ul" className="ul-desktop" gap="40px">
//                                     <FlexRow gap="32px">
//                                         <FlexRow as={Link} to={CHALLENGES_PAGE}>
//                                             <span>Challenges</span>
//                                         </FlexRow>
//                                         <FlexRow as={Link} to={`${ROOT_PAGE}#contact`}>
//                                             <span>Contact</span>
//                                         </FlexRow>
//                                         <FlexRow as={Link} to={`${ROOT_PAGE}#csi`}>
//                                             <span>CSI</span>
//                                         </FlexRow>
//                                     </FlexRow>
//                                     {/*{(userRightsInfo?.isAdmin || userRightsInfo?.isAuthor) && (*/}
//                                     {/*    <FlexRow as={Link} to={CHALLENGE_CREATE_PAGE} gap="12px">*/}
//                                     {/*        <Menu as="li">Create challenge</Menu>*/}
//                                     {/*    </FlexRow>*/}
//                                     {/*)}*/}
//                                     <FlexRow gap="8px">
//                                         <FlexRow as={Link} to={REGISTER_PAGE}>
//                                             <Button
//                                                 backgroundColor={theme.colors.white}
//                                                 color="#5E5E5E"
//                                                 borderColor={theme.colors.green700}
//                                                 height="36px"
//                                                 width="120px"
//                                                 handler=""
//                                             >
//                                                 Register
//                                             </Button>
//                                         </FlexRow>
//                                         <FlexRow as={Link} to={LOGIN_PAGE}>
//                                             <Button
//                                                 backgroundColor={theme.colors.white}
//                                                 color={theme.colors.green700}
//                                                 borderColor={theme.colors.green700}
//                                                 height="36px"
//                                                 width="110px"
//                                                 handler=""
//                                             >
//                                                 Sign In
//                                             </Button>
//                                         </FlexRow>
//                                     </FlexRow>
//                                 </FlexRow>
//                             </>
//                         )}
//                     </FlexRow>
//                 </NavBarStyle>
//             )}
//             <MobileNavMenu
//                 mobileMenuHoverTrue={() => dispatch(navMenuHoverHandler(true))}
//                 mobileMenuHoverFalse={() => dispatch(navMenuHoverHandler(false))}
//                 translateY={navMenuPosition}
//                 toggleNavMenu={() => dispatch(navMenuPositionToggle())}
//             />
//         </>
//     );
// };
//
// export default NavBar;