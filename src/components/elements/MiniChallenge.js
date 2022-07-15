import React from "react";
import {Container, FlexColumn, FlexRow, Grid} from "../../utils/containers";
import {Body, H3} from "../../utils/fonts";
import styled from "styled-components";
import IconLabel from "./IconLabel";
import {Link} from "react-router-dom";
import {CHALLENGE_PAGE, MINI_DESCRIPTION_LENGTH} from "../../utils/globals";
import theme from "../../utils/theme";

const ChallengeStyle = styled(FlexColumn)`
  padding: 12px;
  border: 1px solid ${({theme}) => theme.colors.dark05};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  position: relative;
  max-width: 420px;

  * {
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.05);
  }

  article {
    width: 100%;
    align-items: flex-start;

    p {
      width: 80%;
    }
  }

  @media (min-width: ${({theme}) => theme.overMobile}) {
    width: 360px;
    padding: 20px;
    justify-content: flex-start;
  }
`;

const IconsGrid = styled(Grid)`
  width: 100%;
  grid-gap: 14px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const MiniChallenge = (props) => {
    const renderDescription = (description) => {
        if (description.length <= MINI_DESCRIPTION_LENGTH)
            return description;
        return `${description.slice(0, MINI_DESCRIPTION_LENGTH)}...`
    }

    return (
        <ChallengeStyle as={Link} to={`${CHALLENGE_PAGE}/${props.name}`}>
            <FlexColumn as='article'>
                <FlexRow margin='0 0 14px 0' gap='12px' width='100%' alignmentX='space-between'>
                    <H3 as='h3' width='85%'>
                        {props.title}
                    </H3>
                    {props.type ? <IconLabel type={props.type} size='30px'/> : 'xxx'}
                </FlexRow>
                <Container margin='0 0 14px 0' width='85%' height='1px' backgroundColor={theme.colors.dark05}/>
                <Body as='p' margin='0 0 14px 0'>
                    {props.description ? renderDescription(props.description) : 'xxx'}
                </Body>
                <IconsGrid>
                    <IconLabel size='24px' gap='8px' type='metric'>
                        {props.metric ? props.metric : 'xxx'}
                    </IconLabel>
                    <IconLabel size='24px' gap='8px' type='bestScore'>
                        {props.bestScore ? props.bestScore : 'xxx'}
                    </IconLabel>
                    <IconLabel size='24px' gap='8px' type='deadline'>
                        {props.deadline ? props.deadline.slice(0, 10) : 'xxx'}
                    </IconLabel>
                    <IconLabel size='24px' gap='8px' type='baseline'>
                        {props.baseline ? props.baseline : 'xxx'}
                    </IconLabel>
                    {props.prize ? <IconLabel size='24px' gap='8px' type='prize'>
                        {props.prize}
                    </IconLabel> : ''}
                </IconsGrid>
            </FlexColumn>
        </ChallengeStyle>
    );
}

export default MiniChallenge;