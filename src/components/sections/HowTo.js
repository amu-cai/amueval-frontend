import React from 'react';
import {FlexColumn, FlexRow, Grid, Svg} from '../../utils/containers';
import {Body, H2, H3, Medium} from '../../utils/fonts';
import CircleNumber from '../elements/CircleNumber';
import CodeShell from '../elements/CodeShell';
import cubeIcon from '../../assets/cube_ico.svg';
import theme from '../../utils/theme';
import {IS_MOBILE} from '../../utils/globals';

const HowTo = () => {
    return (
        <FlexColumn margin={IS_MOBILE() ? null : '64px 0 0 0'} padding={IS_MOBILE() ? '12px 20px' : null}
                    gap={IS_MOBILE() ? '24px' : '48px'} alignmentX='flex-start' maxWidth='668px'>
            <FlexColumn as='article' gap={IS_MOBILE() ? '16px' : '24px'} alignmentX='flex-start'>
                <H2 as='h2' margin={IS_MOBILE() ? '0 0 4px 0' : '0 0 8px 0'}>
                    Get challenge repo
                </H2>
                <Grid width='100%' gridTemplateColumns='auto 1fr' gridGap={IS_MOBILE() ? '8px' : '16px'}>
                    <CircleNumber number='1'/>
                    <Body as='p' margin='auto 0'>
                        You need to create empty repo with name:
                        <Medium>
                            yourID/challengeName
                        </Medium>
                    </Body>
                </Grid>
                <CodeShell codeBlockIndex={1}
                           commands={['git clone git@git.wmi.amu.edu.pl:YOURID/challenging-america-geo-prediction.git']}/>
                <Grid width='100%' gridTemplateColumns='auto 1fr' gridGap={IS_MOBILE() ? '8px' : '16px'}>
                    <CircleNumber number='2'/>
                    <Body as='p' margin='auto 0'>
                        Pull gonito challenge repo
                    </Body>
                </Grid>
                <CodeShell codeBlockIndex={2} commands={['cd challenging-america-geo-prediction',
                    'git pull git://gonito.net/challenging-america-geo-prediction.git']}/>
                <Body as='p'>
                    Make sure Gonito.net has access to your repo (e.g. by making it public).
                </Body>
            </FlexColumn>
            <FlexColumn as='article' gap={IS_MOBILE() ? '16px' : '24px'} alignmentX='flex-start'>
                <H2 as='h2' margin={IS_MOBILE() ? '0 0 4px 0' : '0 0 8px 0'}>
                    Work on your solution
                </H2>
                <Body as='p'>
                    You need to generate your solution for the test set as <Medium>test-A/out.tsv</Medium>. It is also
                    recommended to
                    generate the output for the dev set <Medium>(dev-0/out.tsv)</Medium>.
                </Body>
                <Body as='p'>
                    You can evaluate results for the dev set locally by <Medium>geval</Medium>.
                </Body>
                <FlexColumn as='article' gap='24px' alignmentX='flex-start' width='100%'>
                    <H3 as='h3'>
                        Install geval
                    </H3>
                    <CodeShell codeBlockIndex={3}
                               commands={['wget https://gonito.net/get/bin/geval', 'chmod u+x geval', './geval --help']}/>
                </FlexColumn>
            </FlexColumn>
            <FlexColumn as='article' gap={IS_MOBILE() ? '16px' : '24px'} alignmentX='flex-start'>
                <H2 as='h2' margin={IS_MOBILE() ? '0 0 4px 0' : '0 0 8px 0'}>
                    Push your solution
                </H2>
                <Body>
                    Commit and push <Medium>out.tsv</Medium> files to your repo. It is also recommended to push your
                    source codes along
                    with <Medium>out.tsv</Medium> files.
                </Body>
                {/*<CodeShell>*/}
                {/*    <Code as='p'>*/}
                {/*        <CodeMedium>~$</CodeMedium> cd challenging-america-geo-prediction*/}
                {/*    </Code>*/}
                {/*    <Code as='p'>*/}
                {/*        <CodeMedium>~$</CodeMedium> git checkout -b my-brilliant-branch # switch to some other branch*/}
                {/*    </Code>*/}
                {/*    <Code as='p'>*/}
                {/*        <CodeMedium>~$</CodeMedium> git add foo.py build.sh # add your source codes*/}
                {/*    </Code>*/}
                {/*    <Code as='p'>*/}
                {/*        <CodeMedium>~$</CodeMedium> git add gonito.yaml # it's a good practice to add metadata file, see*/}
                {/*        below*/}
                {/*    </Code>*/}
                {/*</CodeShell>*/}
                {/*<CodeShell>*/}
                {/*    <Code as='p'>*/}
                {/*        <CodeMedium>~$</CodeMedium> git add dev-0/out.tsv test-A/out.tsv # add your output files*/}
                {/*    </Code>*/}
                {/*    <Code as='p'>*/}
                {/*        <CodeMedium>~$</CodeMedium> git commit -m 'my brilliant solution'*/}
                {/*    </Code>*/}
                {/*    <Code as='p'>*/}
                {/*        <CodeMedium>~$</CodeMedium> git push origin my-brilliant-branch*/}
                {/*    </Code>*/}
                {/*</CodeShell>*/}
            </FlexColumn>
            <FlexColumn as='article' gap={IS_MOBILE() ? '16px' : '24px'} alignmentX='flex-start'>
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
                <FlexColumn as='article' gap={IS_MOBILE() ? '16px' : '24px'} alignmentX='flex-start' width='100%'>
                    <H3 as='h3'>
                        Submission metadata
                    </H3>
                    <Body>
                        Gonito can take the metadata (description, tags, parameters) of a submission from a number of
                        sources (in order of precedence):
                    </Body>
                    <Grid width='100%' gridTemplateColumns='auto 1fr' gridGap={IS_MOBILE() ? '8px' : '16px'}>
                        <CircleNumber number='1'/>
                        <Body as='p' margin='auto 0'>
                            The YAML files specified in the param-files field of the gonito.yaml file
                        </Body>
                    </Grid>
                    <FlexRow gap='16px' alignmentX='flex-start' margin='0 0 0 44px'>
                        <Svg src={cubeIcon} width='24px' height='22px' size='cover'
                             backgroundColor={theme.colors.green}/>
                        <Body as='p' width='90%'>
                            only applicable for parameters
                        </Body>
                    </FlexRow>
                    <FlexRow gap='16px' alignmentX='flex-start' margin='0 0 0 44px'>
                        <Svg src={cubeIcon} width='24px' height='22px' size='cover'
                             backgroundColor={theme.colors.green}/>
                        <Body as='p' width='90%'>
                            <Medium>gonito.yaml</Medium> will be always skipped even if matches a mask given in the
                            param-files field,
                        </Body>
                    </FlexRow>
                    <FlexRow gap='16px' alignmentX='flex-start' margin='0 0 0 44px'>
                        <Svg src={cubeIcon} width='24px' height='22px' size='cover'
                             backgroundColor={theme.colors.green}/>
                        <Body as='p' width='90%'>
                            parameters blacklisted in the unwanted-params field of the gonito.yaml file will be
                            discarded,
                        </Body>
                    </FlexRow>
                    <Grid width='100%' gridTemplateColumns='auto 1fr' gridGap={IS_MOBILE() ? '8px' : '16px'}>
                        <CircleNumber number='2'/>
                        <Body as='p' margin='auto 0'>
                            <Medium>Gonito.yaml</Medium> file committed to the repository,
                        </Body>
                    </Grid>
                    <FlexRow gap='16px' alignmentX='flex-start' margin='0 0 0 44px'>
                        <Svg src={cubeIcon} width='24px' height='22px' size='cover'
                             backgroundColor={theme.colors.green}/>
                        <Body as='p' width='90%'>
                            description given in the description field,
                        </Body>
                    </FlexRow>
                    <FlexRow gap='16px' alignmentX='flex-start' margin='0 0 0 44px'>
                        <Svg src={cubeIcon} width='24px' height='22px' size='cover'
                             backgroundColor={theme.colors.green}/>
                        <Body as='p' width='90%'>
                            tags given in tags field,
                        </Body>
                    </FlexRow>
                    <FlexRow gap='16px' alignmentX='flex-start' margin='0 0 0 44px'>
                        <Svg src={cubeIcon} width='24px' height='22px' size='cover'
                             backgroundColor={theme.colors.green}/>
                        <Body as='p' width='90%'>
                            parameters given in params field,
                        </Body>
                    </FlexRow>
                    <Grid width='100%' gridTemplateColumns='auto 1fr' gridGap={IS_MOBILE() ? '8px' : '16px'}>
                        <CircleNumber number='3'/>
                        <Body as='p' margin='auto 0'>
                            Names of output files (only for parameters)
                        </Body>
                    </Grid>
                    <FlexRow gap='16px' alignmentX='flex-start' margin='0 0 0 44px'>
                        <Svg src={cubeIcon} width='24px' height='22px' size='cover'
                             backgroundColor={theme.colors.green}/>
                        <Body as='p' width='90%'>
                            e.g. if the output file
                            is <Medium>out-epochs=10</Medium>, <Medium>learning-rate=0.01</Medium>, then parameters
                            <Medium>epochs=10</Medium> and <Medium>learning-rare=0.01</Medium> will be extracted;
                        </Body>
                    </FlexRow>
                    <Grid width='100%' gridTemplateColumns='auto 1fr' gridGap={IS_MOBILE() ? '8px' : '16px'}>
                        <CircleNumber number='4'/>
                        <Body as='p' margin='auto 0'>
                            Submission form (when submitting manually)
                        </Body>
                    </Grid>
                    <Grid width='100%' gridTemplateColumns='auto 1fr' gridGap={IS_MOBILE() ? '8px' : '16px'}>
                        <CircleNumber number='5'/>
                        <Body as='p' margin='auto 0'>
                            Git commit message
                        </Body>
                    </Grid>
                    <FlexRow gap='16px' alignmentX='flex-start' margin='0 0 0 44px'>
                        <Svg src={cubeIcon} width='24px' height='22px' size='cover'
                             backgroundColor={theme.colors.green}/>
                        <Body as='p' width='90%'>
                            description taken from the first paragraph
                        </Body>
                    </FlexRow>
                    <FlexRow gap='16px' alignmentX='flex-start' margin='0 0 0 44px'>
                        <Svg src={cubeIcon} width='24px' height='22px' size='cover'
                             backgroundColor={theme.colors.green}/>
                        <Body as='p' width='90%'>
                            tags taken from a line starting with <Medium>tags:</Medium>
                        </Body>
                    </FlexRow>
                    <Body>
                        Here is an example of <Medium>gonito.yaml</Medium>, in which all metadata could be given (note
                        that you can also
                        add links to external resources using the <Medium>`links`</Medium> section):
                    </Body>
                    {/*<CodeShell>*/}
                    {/*    <Code as='p'>*/}
                    {/*        description: This my brilliant solution*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p'>*/}
                    {/*        tags:*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        - neural-network*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        - left-to-right*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p'>*/}
                    {/*        params:*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        epochs: 10*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        learning-rate: 0.01*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p'>*/}
                    {/*        unwanted-params:*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        - model-file*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        - vocab-file*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p'>*/}
                    {/*        param-files:*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        - “*.yaml”*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        - config/*.yaml*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p'>*/}
                    {/*        links:*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        - title: "Some external link"*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        &nbsp;&nbsp;url: "https://example.com/foo-bar-baz-123"*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        - title: "Yet another link"*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        &nbsp;&nbsp;url: "https://example.org/xyz"*/}
                    {/*    </Code>*/}
                    {/*    <Code as='p' margin='0 0 0 12px'>*/}
                    {/*        - url: "https://example.net/bare-link-without-text"*/}
                    {/*    </Code>*/}
                    {/*</CodeShell>*/}
                    <Body>
                        It might seem a little bit complicated, but you could simply use the method which is the most
                        convenient for you.
                    </Body>
                </FlexColumn>
            </FlexColumn>
        </FlexColumn>
    );
};

export default HowTo;