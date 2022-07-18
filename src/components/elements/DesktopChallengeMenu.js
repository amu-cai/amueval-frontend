import React from "react";
import styled from "styled-components";
import {FlexColumn} from "../../utils/containers";
import {H3} from "../../utils/fonts";

const DesktopChallengeMenuStyle = styled(FlexColumn)`
  justify-content: flex-start;
  position: fixed;
  left: 0;
  overflow-y: auto;
  width: 310px;
  height: 100vh;
  top: 50px;
  padding: 64px 0 0 0;
  z-index: 2;
  gap: 32px;
  box-shadow: ${({theme}) => theme.shadowRight};
`;

const Option = styled(FlexColumn)`
  height: 48px;
  width: 100%;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  background-color: ${({theme, active}) => active ? theme.colors.green05 : theme.colors.white};

  * {
    cursor: pointer;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.green05};
  }
`;

const DesktopChallengeMenu = (props) => {
    const options = ['Leaderboard', 'Readme', 'How to', 'My entries', 'Submit'];
    return (
        <DesktopChallengeMenuStyle>
            {options.map((option, index) => {
                return (
                    <Option key={`challenge_menu_option-${index}`} as='button'
                            active={index === props.section}
                            onClick={() => props.setSection(index)}>
                        <H3 textTransform='uppercase'>
                            {option}
                        </H3>
                    </Option>
                )
            })}
        </DesktopChallengeMenuStyle>
    );
}

export default DesktopChallengeMenu;