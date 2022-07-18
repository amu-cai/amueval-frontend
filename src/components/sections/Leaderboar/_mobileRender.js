import {FlexColumn, FlexRow} from "../../../utils/containers";
import {H2} from "../../../utils/fonts";
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

const mobileRender = (variant, setVariant) => {
    return (
        <FlexColumn padding='24px' as='section'>
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
        </FlexColumn>
    );
}

export default mobileRender;