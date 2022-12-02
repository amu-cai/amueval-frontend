import React from 'react';
import {IS_MOBILE} from '../../../../utils/globals';
import {Body, H2, H3, Medium} from '../../../../utils/fonts';
import {FlexColumn} from '../../../../utils/containers';
import CodeShell from '../../../generic/CodeShell';

const WorkOnYourSolution = () => {
    return (
        <FlexColumn as='article' gap={IS_MOBILE() ? '16px' : '24px'} width='100%' alignmentX='flex-start'>
            <H2 as='h2' margin={IS_MOBILE() ? '0 0 4px 0' : '0 0 8px 0'}>
                Work on your solution
            </H2>
            <Body as='p'>
                You need to generate your solution for the test set as <Medium as='span'>test-A/out.tsv</Medium>. It
                is also
                recommended to
                generate the output for the dev set <Medium as='span'>(dev-0/out.tsv)</Medium>.
            </Body>
            <Body as='p'>
                You can evaluate results for the dev set locally by <Medium as='span'>geval</Medium>.
            </Body>
            <FlexColumn as='article' gap='24px' alignmentX='flex-start' width='100%'>
                <H3 as='h3'>
                    Install geval
                </H3>
                <CodeShell codeBlockIndex={3}
                           commands={['wget https://gonito.net/get/bin/geval', 'chmod u+x geval', './geval --help']}/>
            </FlexColumn>
        </FlexColumn>
    );
};

export default WorkOnYourSolution;