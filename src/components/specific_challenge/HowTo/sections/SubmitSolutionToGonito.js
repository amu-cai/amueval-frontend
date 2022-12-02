import React from 'react';
import {IS_MOBILE} from '../../../../utils/globals';
import {Body, H2, H3, Medium} from '../../../../utils/fonts';
import {FlexColumn} from '../../../../utils/containers';

const SubmitSolutionToGonito = () => {
    return (
        <FlexColumn alignmentX='flex-start' maxWidth='680px' gap={IS_MOBILE() ? '16px' : '24px'}>
            <H2 as='h2' margin='0 0 8px 0'>
                Submit solution to Gonito
            </H2>
            <FlexColumn as='article' gap='24px' alignmentX='flex-start' width='100%'>
                <H3 as='h3'>
                    Manual submission
                </H3>
                <Body>
                    In case other methods fail, you can submit your solution manually — go to the <Medium>submit
                    form</Medium>.
                </Body>
            </FlexColumn>
            <FlexColumn as='article' gap={IS_MOBILE() ? '16px' : '24px'} alignmentX='flex-start' width='100%'>
                <H3 as='h3'>
                    Integration with external repos
                </H3>
                <Body>
                    If you use an external repo (e.g. at your own of Gitolite or at GitLab/GitHub), you can
                    configure a webhook.
                </Body>
            </FlexColumn>
        </FlexColumn>
    );
};

export default SubmitSolutionToGonito;