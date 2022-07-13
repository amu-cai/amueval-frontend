import React from "react";
import {FlexColumn} from "../utils/containers";
import Motivation from "../components/sections/Motivation";
import Csi from "../components/sections/Csi";
import Commercial from "../components/sections/Commercial";
import Hero from "../components/sections/Hero";
import Partnerships from "../components/sections/Partnerships";
import styled from "styled-components";

const LandingPageStyle = styled(FlexColumn)`
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 90px 0 32px;

  .main-container {
    max-width: 452px;
    gap: 48px;
    width: 80%;
  }

  @media (min-width: ${({theme}) => theme.overMobile}) {
    padding: 172px 0 124px;

    .main-container {
      max-width: none;
      gap: 124px;
    }
  }
`;

const LandingPage = () => {
    return (
        <LandingPageStyle as='main' alignmentY='flex-start' width='100%'
                          minHeight='100vh' padding='90px 0 32px 0'>
            <FlexColumn className='main-container'>
                <Hero/>
                <Motivation/>
                <Csi/>
                <Commercial/>
                <Partnerships/>
            </FlexColumn>
        </LandingPageStyle>
    );
}

export default LandingPage;