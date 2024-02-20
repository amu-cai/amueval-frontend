import React from 'react';
import { Body, H1, Medium } from '../../../../utils/fonts';
import { Container, FlexColumn, FlexRow } from '../../../../utils/containers';
import theme from '../../../../utils/theme';
import ButtonLink from '../../../../components/generic/ButtonLink';
import Media from 'react-media';
import MadeByCsi from '../MadeByCsi/MadeByCsi';
import HeroStyle from './HeroStyle';
import { REGISTER_PAGE } from '../../../../utils/globals';
import { Link } from 'react-router-dom';

const Hero = (props) => {
  const mobileRender = () => {
    return (
      <FlexColumn
        alignmentX="flex-start"
        gap="24px"
        margin="80px 0 48px 0"
        maxWidth="452px"
      >
        <H1 as="h1">
          Welcome to
          <Container display="inline" color={theme.colors.green}>
            &nbsp;Gonito!
          </Container>
        </H1>
        <Body as="p">
          A data challenge platform for machine learning research, competition,
          cooperation and reproducibility.
        </Body>
        <ButtonLink as={Link} to={REGISTER_PAGE}>
          Join us!
        </ButtonLink>
      </FlexColumn>
    );
  };

  const desktopRender = () => {
    return (
      <HeroStyle>
        <FlexColumn alignmentX="flex-start" gap="40px">
          <H1 as="h1">
            Welcome to
            <Container display="inline" color={theme.colors.green}>
              &nbsp;Gonito!
            </Container>
          </H1>
          <Medium as="p" className="HeroStyle__title-paragraph">
            A data challenge platform for machine learning research,
            competition, cooperation and reproducibility.
          </Medium>
          <MadeByCsi position="horizontal" />
          <ButtonLink as={Link} to={REGISTER_PAGE}>
            Join us!
          </ButtonLink>
        </FlexColumn>
      </HeroStyle>
    );
  };

  const desktopRender2 = () => {
    return (
      <HeroStyle>
        <FlexRow gap="100px">
          <FlexColumn gap="50px" alignmentX="flex-start">
            <H1 as="h1">
              Welcome to
              <Container display="inline" color={theme.colors.green}>
                &nbsp;Gonito!
              </Container>
            </H1>
            <Medium as="p" className="HeroStyle__title-paragraph">
              A data challenge platform for machine learning research,
              competition, cooperation and reproducibility.
            </Medium>
            <ButtonLink as={Link} to={REGISTER_PAGE}>
              Join us!
            </ButtonLink>
          </FlexColumn>
          <MadeByCsi />
        </FlexRow>
      </HeroStyle>
    );
  };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query="(min-width: 1025px) and (max-width: 1440px)">
        {desktopRender()}
      </Media>
      <Media query="(min-width: 1441px)">{desktopRender2()}</Media>
    </>
  );
};

export default Hero;
