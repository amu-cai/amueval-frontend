import React from "react";
import {Body, H1} from "../utils/fonts";
import {Container, FlexColumn} from "../utils/containers";
import theme from "../utils/theme";
import {Link} from "react-router-dom";
import ButtonLink from "../components/elements/ButtonLink";
import Motivation from "../components/sections/Motivation";

const LandingPage = () => {
    return (
        <FlexColumn alignmentY='flex-start' width='100%' minHeight='100vh' as='main' gap='48px'>
            <FlexColumn alignmentX='flex-start' gap='24px'
                        width='80%' maxWidth='352px' margin='90px 0 0 0'>
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
            <Motivation/>
        </FlexColumn>
    );
}

export default LandingPage;