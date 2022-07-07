import React from "react";
import {FlexColumn, Grid} from "../../utils/containers";
import {H2} from "../../utils/fonts";
import Placeholder from "../elements/Placeholder";

const Partnerships = () => {
    return (
        <FlexColumn as='section' alignmentX='flex-start' gap='32px'>
            <H2 as='h2'>
                Our partnerships
            </H2>
            <FlexColumn width='100%'>
                <Grid gridGap='32px 0'>
                    <Placeholder>
                        1
                    </Placeholder>
                    <Placeholder>
                        2
                    </Placeholder>
                    <Placeholder>
                        3
                    </Placeholder>
                    <Placeholder>
                        4
                    </Placeholder>
                </Grid>
            </FlexColumn>
        </FlexColumn>
    );
}

export default Partnerships;