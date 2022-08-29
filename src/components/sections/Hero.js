import React from 'react';
import {Body, H1, Medium} from '../../utils/fonts';
import {Container, FlexColumn, FlexRow, Svg} from '../../utils/containers';
import theme from '../../utils/theme';
import ButtonLink from '../elements/ButtonLink';
import {Link} from 'react-router-dom';
import Media from 'react-media';
import codepenIco from '../../assets/codepen_ico.svg';
import styled from 'styled-components';
import UserService from '../../services/UserService';

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
            <ButtonLink as={Link} to='/'>
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
                    &nbsp;Gonito.net!
                </Container>
            </H1>
            <FlexRow gap='20px'>
                <Container>
                    <TitleParagraph as="p" maxWidth='286px' margin='0 0 20px 0'>
                        A data challenge platform for machine learning research,
                        competition, cooperation and reproducibility.
                    </TitleParagraph>
                    <ButtonLink as={Link} to='/'>
                        Join us!
                    </ButtonLink>
                    <button onClick={UserService.doLogin}>
                        test keycloak login
                    </button>
                    <button onClick={() => console.log(UserService.isLoggedIn())}>
                        isLoggedIn
                    </button>
                </Container>
                <Svg src={codepenIco} width='212px' height='180px' backgroundColor={theme.colors.green}/>
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