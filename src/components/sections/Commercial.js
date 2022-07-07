import React from "react";
import {FlexColumn, FlexRow} from "../../utils/containers";
import {Body, H2, Medium} from "../../utils/fonts";
import CircleNumber from "../elements/CircleNumber";

const Commercial = () => {
    return (
        <FlexColumn as='section' alignmentX='flex-start'>
            <H2 as='h2' margin='0 0 24px 0'>
                Commercial challanges
            </H2>
            <FlexColumn gap='20px'>
                <Body as='p'>
                    The artificial intelligence center works with companies by accepting machine learning challenges
                    from them that are available to solve on Gonito. Each commercial challenge is properly scored which
                    translates into an award for solving it according to the client's requirements.
                </Body>
                <FlexColumn as='ul' gap='16px' alignmentX='flex-start'>
                    <FlexRow width='100%' gap='8px'>
                        <CircleNumber number={1}/>
                        <Medium width='80%' as='li'>
                            A company comes to CSI with a business need
                        </Medium>
                    </FlexRow>
                    <FlexRow width='100%' gap='8px'>
                        <CircleNumber number={2}/>
                        <Medium width='80%' as='li'>
                            CSI determines the need with an appropriate challenge on Gonito
                        </Medium>
                    </FlexRow>
                    <FlexRow width='100%' gap='8px'>
                        <CircleNumber number={3}/>
                        <Medium width='80%' as='li'>
                            The challenge is solved by willing users
                        </Medium>
                    </FlexRow>
                    <FlexRow width='100%' gap='8px'>
                        <CircleNumber number={4}/>
                        <Medium width='80%' as='li'>
                            The company appropriately rewards users who have contributed to the required outcome
                        </Medium>
                    </FlexRow>
                </FlexColumn>
                <Body as='p'>
                    Open challenges can allow you to find the right people to work with. Find a challenge for your team
                    and take it on!
                </Body>
            </FlexColumn>
        </FlexColumn>
    );
}

export default Commercial;