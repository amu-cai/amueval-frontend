import React from 'react';
import {Body, H1, Medium} from '../../utils/fonts';
import {Container, FlexColumn, FlexRow, Svg} from '../../utils/containers';
import theme from '../../utils/theme';
import ButtonLink from '../generic/ButtonLink';
import Media from 'react-media';
import codepenIco from '../../assets/codepen_ico.svg';
import styled from 'styled-components';
import KeyCloakService from '../../services/KeyCloakService';

const TitleParagraph = styled(Medium)`
  font-size: 20px;
  line-height: 28px;
`;

const mobileRender = () => {
    return (
        <FlexColumn alignmentX='flex-start' gap='24px' maxWidth='452px'>
            <H1 as="h1">
                Welcome to
                <Container display="inline" color={theme.colors.green}>
                    &nbsp;Gonito.net!
                </Container>
            </H1>
            <Body as="p">
                A data challenge platform for machine learning research,
                competition, cooperation and reproducibility.
            </Body>
            <ButtonLink as='button' onClick={KeyCloakService.doRegister}>
                Join us!
            </ButtonLink>
        </FlexColumn>
    );
};

const desktopRender = () => {
    return (
        <FlexColumn alignmentX='flex-start' gap='24px'>
            <H1 as="h1">
                Welcome to
                <Container display="inline" color={theme.colors.green}>
                    &nbsp;Gonito!
                </Container>
            </H1>
            <FlexRow gap='20px'>
                <Container>
                    <TitleParagraph as="p" maxWidth='286px' margin='0 0 20px 0'>
                        A data challenge platform for machine learning research,
                        competition, cooperation and reproducibility.
                    </TitleParagraph>
                    <ButtonLink as='button' onClick={KeyCloakService.doRegister}>
                        Join us!
                    </ButtonLink>
                </Container>
                <Svg src={codepenIco} width='180px' height='150px' size='contain' backgroundColor={theme.colors.green}/>
            </FlexRow>
        </FlexColumn>
    );
};

const Hero = () => {
    return (
        <>
            <Media query={theme.mobile}>
                {mobileRender()}
            </Media>
            <Media query={theme.desktop}>
                {desktopRender()}
            </Media>
        </>
    );
};

export default Hero;