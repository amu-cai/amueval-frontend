import React from 'react';
import {IS_MOBILE} from '../../../../utils/globals';
import {Body, H2, Medium} from '../../../../utils/fonts';
import CodeShell from '../../../generic/CodeShell';
import {FlexColumn} from '../../../../utils/containers';

const PushYourSolution = (props) => {
    return (
        <FlexColumn as='article' gap={IS_MOBILE() ? '16px' : '24px'} width='100%' alignmentX='flex-start'>
            <H2 as='h2' margin={IS_MOBILE() ? '0 0 4px 0' : '0 0 8px 0'}>
                Push your solution
            </H2>
            <Body>
                Commit and push <Medium>out.tsv</Medium> files to your repo. It is also recommended to push your
                source codes along
                with <Medium>out.tsv</Medium> files.
            </Body>
            <CodeShell codeBlockIndex={3}
                       commands={[`cd ${props.challengeName}`,
                           'git checkout -b my-brilliant-branch # switch to some other branch',
                           'git add foo.py build.sh # add your source codes',
                           /* eslint-disable */
                           `git add gonito.yaml # it's a good practice to add metadata file, see below`]}/>
            <CodeShell codeBlockIndex={4}
                       commands={['git add dev-0/out.tsv test-A/out.tsv # add your output files',
                           /* eslint-disable */
                           `git commit -m 'my brilliant solution'`,
                           'git push origin my-brilliant-branch']}/>
        </FlexColumn>
    );
};

export default PushYourSolution;