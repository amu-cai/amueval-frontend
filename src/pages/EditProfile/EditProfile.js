import React from 'react';
import { FlexColumn } from '../../utils/containers';
import getProfileInfo from "../../api/getProfileInfo";
import {H2, Medium, Menu} from "../../utils/fonts";
import Button from "../../components/generic/Button";
import theme from "../../utils/theme";
import SubmitInput from "../../components/generic/SubmitInput";
import editProfile from '../../api/editProfile';
import {popUpMessageHandler} from "../../redux/popUpMessegeSlice";
import { useDispatch } from 'react-redux';
import {PROFILE_PAGE} from "../../utils/globals";
const EditProfile = () => {
    const dispatch = useDispatch();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    

    const [profileInfo, setProfileInfo] = React.useState(null);
    const [email, setEmail] = React.useState('');
    const emailFormatError = !validateEmail(email);

    React.useEffect(() => {
        getProfileInfo(setProfileInfo);
    }, []);

    const editProfileSubmit = async () => {
        const profileInput = {
            email: email,
        };

        await editProfile(
            profileInput,
            popUpMessageHandler
        );
    };

  if (profileInfo !== null) {
      return (
            <FlexColumn width="100%" minHeight="100vh">
                <FlexColumn
                    gap="32px"
                    padding="24px 40px"
                >
                    <H2 as="h2">Edit Profile Info</H2>
                    <FlexColumn gap="10px" width="100%">
                        <SubmitInput
                            label="Email"
                            handler={(value) => {
                                setEmail(value);
                            }}
                            defaultValue={profileInfo.email}
                            initOnChange={true}
                        />
                        {!email && (
                            <Medium fontSize="14px" width="100%" color={theme.colors.red}>
                                Email required
                            </Medium>
                        )}
                        {email && emailFormatError && (
                            <Medium fontSize="14px" width="100%" color={theme.colors.red}>
                                Invalid email format
                            </Medium>
                        )}
                    </FlexColumn>
                    <Button
                        width="122px"
                        height="44px"
                        margin="16px 0 0 0"
                        handler={() => editProfileSubmit(
                            dispatch(
                                popUpMessageHandler({
                                    header: 'Success',
                                    message: 'User profile updated!',
                                    borderColor: theme.colors.green,
                                    confirmHandler: () => window.location.replace(PROFILE_PAGE),
                                })
                            )
                        )}
                        disabled={emailFormatError}
                    >
                        <Menu color={theme.colors.white}>Submit</Menu>
                    </Button>
                </FlexColumn>
            </FlexColumn>
      );
  }
};

export default EditProfile;
