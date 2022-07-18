import React from "react";
import {FlexRow} from "../../utils/containers";
import styled from "styled-components";
import {Medium} from "../../utils/fonts";

const MenuOption = styled(Medium)`
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  color: ${({theme, active}) => active ? theme.colors.green : theme.colors.dark};

  &:hover {
    color: ${({theme}) => theme.colors.green};
  }
`;

const MobileChallengeMenu = (props) => {
    return (
        <>
            <FlexRow gap='32px'>
                <MenuOption as='button' active={0 === props.section} to='/' onClick={() => props.setSection(0)}>
                    Leaderboard
                </MenuOption>
                <MenuOption as='button' active={1 === props.section} to='/' onClick={() => props.setSection(1)}>
                    Readme
                </MenuOption>
                <MenuOption as='button' active={2 === props.section} to='/' onClick={() => props.setSection(2)}>
                    How to
                </MenuOption>
            </FlexRow>
            <FlexRow gap='36px'>
                <MenuOption as='button' active={3 === props.section} to='/' onClick={() => props.setSection(3)}>
                    My entries
                </MenuOption>
                <MenuOption as='button' active={4 === props.section} to='/' onClick={() => props.setSection(4)}>
                    Submit
                </MenuOption>
            </FlexRow>
        </>
    );
}

export default MobileChallengeMenu;