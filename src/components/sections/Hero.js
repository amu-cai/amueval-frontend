import React from "react";
import {Body, H1} from "../../utils/fonts";
import {Container, FlexColumn} from "../../utils/containers";
import theme from "../../utils/theme";
import ButtonLink from "../elements/ButtonLink";
import {Link} from "react-router-dom";

const Hero = () => {
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
}

export default Hero;