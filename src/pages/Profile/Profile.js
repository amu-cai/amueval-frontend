import React from 'react';
import Loading from '../../components/generic/Loading';
import getProfileInfo from '../../api/getProfileInfo';
import {FlexRow, FlexColumn} from "../../utils/containers";
import ProfileStyle from "./ProfileStyle";
import AvatarIcon from '../../assets/avatar.svg';
import {H1New} from "../../utils/fonts";

const Profile = () => {
    const [profileInfo, setProfileInfo] = React.useState(null);

    const getUserRoles = () => {
        let roles = [];
        if (profileInfo.is_author) {
            roles.push('Author');
        }
        if (profileInfo.is_admin) {
            roles.push('Admin');
        }

        return roles.join(', ');
    };

    React.useEffect(() => {
        getProfileInfo(setProfileInfo);
    }, []);

    const profileInfoRender = () => {
        if (profileInfo !== null) {
            if (profileInfo?.username) {
                return (
                    <ProfileStyle>
                        <FlexColumn className="wrapper">
                            <FlexColumn gap="16px">
                                <img src={AvatarIcon} alt="user icon" width="180px" height="180px"/>
                                <H1New>{profileInfo.username}</H1New>
                                <p>Email: {profileInfo.email}</p>
                                <p className="roles">Roles: {getUserRoles()}</p>
                            </FlexColumn>
                            <FlexRow className="stats">
                                <FlexColumn>
                                    <span className="text"> Challenges Created</span>
                                    <span className="number">{profileInfo.challenges_number}</span>
                                </FlexColumn>
                                <div className="spacer"></div>
                                <FlexColumn>
                                    <span className="text">Submissions Added</span>
                                    <span className="number">{profileInfo.submissions_number}</span>
                                </FlexColumn>
                            </FlexRow>
                        </FlexColumn>
                    </ProfileStyle>
                );
            } else {
                return 'Profile loading failed';
            }
        }
        return <Loading/>;
    };

    return (
        <div>
            {profileInfoRender()}
        </div>
    );
};

export default Profile;