import React from "react";
import {FlexRow} from "../../utils/containers";
import styled from "styled-components";
import {Medium} from "../../utils/fonts";

const MenuOption = styled(Medium)`
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({theme}) => theme.colors.green};
  }
`;

const MobileChallengeMenu = (props) => {
    return (
        <>
            <FlexRow gap='32px'>
                <MenuOption as='button' to='/' onClick={() => props.setSection(0)}>
                    Leaderboard
                </MenuOption>
                <MenuOption as='button' to='/' onClick={() => props.setSection(1)}>
                    Readme
                </MenuOption>
                <MenuOption as='button' to='/' onClick={() => props.setSection(2)}>
                    How to
                </MenuOption>
            </FlexRow>
            <FlexRow gap='36px'>
                <MenuOption as='button' to='/' onClick={() => props.setSection(4)}>
                    My entries
                </MenuOption>
                <MenuOption as='button' to='/' onClick={() => props.setSection(3)}>
                    Submit
                </MenuOption>
            </FlexRow>
        </>
    );
}

export default MobileChallengeMenu;