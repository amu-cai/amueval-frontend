import React from "react";
import {FlexColumn} from "../utils/containers";
import Motivation from "../components/sections/Motivation";
import Csi from "../components/sections/Csi";
import Commercial from "../components/sections/Commercial";
import Hero from "../components/sections/Hero";
import Partnerships from "../components/sections/Partnerships";

const LandingPage = () => {
    return (
        <FlexColumn as='main' alignmentY='flex-start' width='100%'
                    minHeight='100vh' padding='90px 0 32px 0' gap='48px'>
            <Hero/>
            <Motivation/>
            <Csi/>
            <Commercial/>
            <Partnerships/>
        </FlexColumn>
    );
}

export default LandingPage;