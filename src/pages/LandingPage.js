import React from "react";
import {Body, H1, Label} from "../utils/fonts";
import {Container, FlexColumn} from "../utils/containers";
import theme from "../utils/theme";
import {Link} from "react-router-dom";
import ButtonLink from "../components/ButtonLink";

const LandingPage = () => {
    return (
        <FlexColumn alignmentY='flex-start' setWidth='100%' setMinHeight='100vh' as='main'>
            <FlexColumn alignmentX='flex-start' setGap='24px'
                        setWidth='80%' setMaxWidtsetCursorh='352px' setMargin='90px 0 0 0'>
                <H1 as="h1">
                    Welcome to
                    <Container setDisplay="inline" setColor={theme.colors.green}>
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
        </FlexColumn>
    );
}

export default LandingPage;