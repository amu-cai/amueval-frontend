import React from 'react';
import {IS_MOBILE} from '../../../../utils/globals';
import {Body, H2, Medium} from '../../../../utils/fonts';
import {FlexColumn, Grid} from '../../../../utils/containers';
import CircleNumber from '../../../generic/CircleNumber';
import CodeShell from '../../../generic/CodeShell';

const GetChallengeRepo = (props) => {
    return (
        <FlexColumn as='article' width='100%' gap={IS_MOBILE() ? '16px' : '24px'} alignmentX='flex-start'>
            <H2 as='h2' margin={IS_MOBILE() ? '0 0 4px 0' : '0 0 8px 0'}>
                Get challenge repo
            </H2>
            <Grid width='100%' gridTemplateColumns='auto 1fr' gridGap={IS_MOBILE() ? '8px' : '16px'}>
                <CircleNumber number='1'/>
                <Body as='p' margin='auto 0'>
                    You need to create empty repo with name:
                    <Medium as='span'>
                        yourID/challengeName
                    </Medium>
                </Body>
            </Grid>
            <CodeShell codeBlockIndex={1}
                       commands={[`git clone git@git.wmi.amu.edu.pl:${props.user}/${props.challengeName}.git`]}/>
            <Grid width='100%' gridTemplateColumns='auto 1fr' gridGap={IS_MOBILE() ? '8px' : '16px'}>
                <CircleNumber number='2'/>
                <Body as='p' margin='auto 0'>
                    Pull gonito challenge repo
                </Body>
            </Grid>
            <CodeShell codeBlockIndex={2} commands={[`cd ${props.challengeName}`,
                `git pull git://gonito.net/${props.challengeName}.git`]}/>
            <Body as='p'>
                Make sure Gonito.net has access to your repo (e.g. by making it public).
            </Body>
        </FlexColumn>
    );
};

export default GetChallengeRepo;