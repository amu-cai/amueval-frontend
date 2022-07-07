import React from "react";
import {FlexColumn} from "../utils/containers";
import Motivation from "../components/sections/Motivation";
import Csi from "../components/sections/Csi";
import Commercial from "../components/sections/Commercial";
import Hero from "../components/sections/Hero";

const LandingPage = () => {
    return (
        <FlexColumn alignmentY='flex-start' width='100%' minHeight='100vh' as='main' gap='48px'>
            <Hero/>
            <Motivation/>
            <Csi/>
            <Commercial/>
        </FlexColumn>
    );
}

export default LandingPage;