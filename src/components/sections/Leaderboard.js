import React from "react";
import {FlexColumn, FlexRow} from "../../utils/containers";
import {H2, H3} from "../../utils/fonts";
import Media from "react-media";
import theme from "../../utils/theme";
import styled from "styled-components";

const BoardVariant = styled(FlexColumn)`
  transition: background-color 0.3s ease-in-out;
  border: 1px solid ${({theme}) => theme.colors.green05};

  &:hover {
    background-color: ${({theme}) => theme.colors.green05};
  }

  div {
    text-transform: uppercase;
  }
`;

const Leaderboard = () => {
    const mobileRender = () => {
        return (
            <FlexColumn padding='24px' as='section'>
                <H2 as='h2'>
                    Leaderboard
                </H2>
            </FlexColumn>
        );
    }

    const desktopRender = () => {
        return (
            <FlexColumn padding='24px' as='section'>
                <H2 as='h2' margin='0 0 32px 0'>
                    Leaderboard
                </H2>
                <FlexRow border={`1px solid ${theme.colors.green05}`}>
                    <BoardVariant as='button' width='150px' height='48px'>
                        <H3>
                            By user
                        </H3>
                    </BoardVariant>
                    <BoardVariant as='button' width='150px' height='48px'>
                        <H3>
                            By metric
                        </H3>
                    </BoardVariant>
                </FlexRow>
            </FlexColumn>
        );
    }


    return (
        <>
            <Media query={theme.mobile}>
                {mobileRender()}
            </Media>
            <Media query={theme.desktop}>
                {desktopRender()}
            </Media>
        </>
    )


}

export default Leaderboard;