import React from "react";
import Media from "react-media";
import theme from "../../utils/theme";
import {FlexColumn, FlexRow} from "../../utils/containers";
import {H2, H3} from "../../utils/fonts";
import Table from "../elements/Table";
import styled from "styled-components";

const BoardVariantMobile = styled(FlexRow)`
  transition: color, background-color 0.3s ease-in-out;
  background-color: ${({theme, active}) => active ? theme.colors.dark : theme.colors.white};
  color: ${({theme, active}) => active ? theme.colors.white : theme.colors.dark};
  font-size: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  border-radius: 16px;
  border: 1px solid ${({theme}) => theme.colors.dark};
  padding: 6px 8px;
  cursor: pointer;
  box-shadow: ${({theme}) => theme.shadowRight};

  * {
    cursor: pointer;
  }

  &:hover {
    background-color: ${({theme, active}) => active ? theme.colors.dark : theme.colors.white};
    color: ${({theme, active}) => active ? theme.colors.white : theme.colors.dark};
  }
`;

const BoardVariantDesktop = styled(FlexRow)`
  transition: background-color 0.3s ease-in-out;
  border: 1px solid ${({theme}) => theme.colors.green05};
  background-color: ${({theme, active}) => active ? theme.colors.green05 : theme.colors.white};

  &:hover {
    background-color: ${({theme}) => theme.colors.green05};
  }

  div {
    text-transform: uppercase;
  }
`;

const Leaderboard = (props) => {
    const [variant, setVariant] = React.useState(0);

    const mobileRender = () => {
        return (
            <FlexColumn padding='24px 12px' as='section'>
                <H2 as='h2' margin='0 0 12px 0'>
                    Leaderboard
                </H2>
                <FlexRow gap='12px' margin='0 0 20px 0'>
                    <BoardVariantMobile as='button' active={0 === variant} onClick={() => setVariant(0)}>
                        By user
                    </BoardVariantMobile>
                    <BoardVariantMobile as='button' active={1 === variant} onClick={() => setVariant(1)}>
                        By metric
                    </BoardVariantMobile>
                </FlexRow>
                <Table challengeName={props.challengeName}/>
            </FlexColumn>
        );
    }

    const desktopRender = () => {
        return (
            <FlexColumn padding='24px' as='section'>
                <H2 as='h2' margin='0 0 32px 0'>
                    Leaderboard
                </H2>
                <FlexRow border={`1px solid ${theme.colors.green05}`} margin='0 0 76px 0'>
                    <BoardVariantDesktop as='button' width='150px' height='48px'
                                         active={0 === variant} onClick={() => setVariant(0)}>
                        <H3 as='span'>
                            By user
                        </H3>
                    </BoardVariantDesktop>
                    <BoardVariantDesktop as='button' width='150px' height='48px'
                                         active={1 === variant} onClick={() => setVariant(1)}>
                        <H3 as='span'>
                            By metric
                        </H3>
                    </BoardVariantDesktop>
                </FlexRow>
                <Table challengeName={props.challengeName}/>
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