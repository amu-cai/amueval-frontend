import React from 'react';
import {FlexColumn, FlexRow} from '../../utils/containers';
import {Body, H2, Medium} from '../../utils/fonts';
import CircleNumber from '../elements/CircleNumber';
import CodeShell from '../elements/CodeShell';

const HowTo = () => {
    return (
        <FlexColumn padding='64px' gap='48px' alignmentX='flex-start' maxWidth='668px'>
            <FlexColumn as='article' gap='24px' alignmentX='flex-start'>
                <H2 as='h2' margin='0 0 8px 0'>
                    Get challenge repo
                </H2>
                <FlexRow width='100%' gap='16px' alignmentX='flex-start'>
                    <CircleNumber number='1'/>
                    <Body as='p'>
                        You need to create empty repo with name:
                        <Medium>
                            yourID/challengeName
                        </Medium>
                    </Body>
                </FlexRow>
                <CodeShell>
                    siema
                </CodeShell>
                <FlexRow width='100%' gap='16px' alignmentX='flex-start'>
                    <CircleNumber number='2'/>
                    <Body as='p'>
                        Pull gonito challenge repo
                    </Body>
                </FlexRow>
                <Body as='p'>
                    Make sure Gonito.net has access to your repo (e.g. by making it public).
                </Body>
            </FlexColumn>
        </FlexColumn>
    );
};

export default HowTo;