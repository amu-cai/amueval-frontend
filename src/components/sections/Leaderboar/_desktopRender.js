import {FlexColumn, FlexRow} from "../../../utils/containers";
import {H2, H3} from "../../../utils/fonts";
import theme from "../../../utils/theme";
import styled from "styled-components";

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

const desktopRender = (variant, setVariant) => {
    return (
        <FlexColumn padding='24px' as='section'>
            <H2 as='h2' margin='0 0 32px 0'>
                Leaderboard
            </H2>
            <FlexRow border={`1px solid ${theme.colors.green05}`}>
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
        </FlexColumn>
    );
}

export default desktopRender;