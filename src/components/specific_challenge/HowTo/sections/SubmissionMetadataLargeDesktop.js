import React from 'react';
import {FlexColumn, FlexRow, Grid, Svg} from '../../../../utils/containers';
import {IS_MOBILE} from '../../../../utils/globals';
import {Body, H3, Medium} from '../../../../utils/fonts';
import CircleNumber from '../../../generic/CircleNumber';
import cubeIcon from '../../../../assets/cube_ico.svg';
import theme from '../../../../utils/theme';
import CodeShell from '../../../generic/CodeShell';

const SubmissionMetadataLargeDesktop = () => {
    return (
        <FlexColumn as='article' gap={IS_MOBILE() ? '16px' : '24px'} width='100%'>
            <FlexColumn alignmentX='flex-start' maxWidth='680px' gap='32px' margin='24px 0'>
                <H3 as='h2'>
                    Submission metadata
                </H3>
                <Body as='p'>
                    Gonito can take the metadata (description, tags, parameters) of a submission from a
                    number
                    of
                    sources (in order of precedence):
                </Body>
            </FlexColumn>
            <FlexRow gap='24px'>
                <FlexColumn alignmentX='flex-start' maxWidth='422px' gap='20px'>
                    <Grid width='100%' gridTemplateColumns='auto 1fr'
                          gridGap={IS_MOBILE() ? '8px' : '16px'}>
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
                            <Medium as='span'>gonito.yaml</Medium> will be always skipped even if matches a
                            mask given
                            in
                            the
                            param-files field,
                        </Body>
                    </FlexRow>
                    <FlexRow gap='16px' alignmentX='flex-start' margin='0 0 0 44px'>
                        <Svg src={cubeIcon} width='24px' height='22px' size='cover'
                             backgroundColor={theme.colors.green}/>
                        <Body as='p' width='90%'>
                            parameters blacklisted in the unwanted-params field of the gonito.yaml file will
                            be
                            discarded,
                        </Body>
                    </FlexRow>
                    <Grid width='100%' gridTemplateColumns='auto 1fr'
                          gridGap={IS_MOBILE() ? '8px' : '16px'}>
                        <CircleNumber number='2'/>
                        <Body as='p' margin='auto 0'>
                            <Medium as='span'>Gonito.yaml</Medium> file committed to the repository,
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
                    <Grid width='100%' gridTemplateColumns='auto 1fr'
                          gridGap={IS_MOBILE() ? '8px' : '16px'}>
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
                            is <Medium as='span'>out-epochs=10</Medium>, <Medium
                            as='span'>learning-rate=0.01</Medium>, then
                            parameters
                            <Medium as='span'>epochs=10</Medium> and <Medium
                            as='span'>learning-rare=0.01</Medium> will be
                            extracted;
                        </Body>
                    </FlexRow>
                    <Grid width='100%' gridTemplateColumns='auto 1fr'
                          gridGap={IS_MOBILE() ? '8px' : '16px'}>
                        <CircleNumber number='4'/>
                        <Body as='p' margin='auto 0'>
                            Submission form (when submitting manually)
                        </Body>
                    </Grid>
                    <Grid width='100%' gridTemplateColumns='auto 1fr'
                          gridGap={IS_MOBILE() ? '8px' : '16px'}>
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
                            tags taken from a line starting with <Medium as='span'>tags:</Medium>
                        </Body>
                    </FlexRow>
                </FlexColumn>
                <CodeShell codeBlockIndex={5} disablePrompt maxWidth='446px'
                           commands={['description: This my brilliant solution',
                               'tags:', '\t- neutral-network', '\t- left-to-right',
                               'params:', '\tepochs: 10', '\tlearning-rate: 0.01',
                               'unwanted-params:', '\t- model-file', '\t- vocab-file',
                               'param-files:', '\t- “*.yaml”*', '\t- config/*.yaml*/',
                               'links:', '\t- title: "Some external link"',
                               '\t\\s\\surl: "https://example.org/xyz"', '\t- title: "Yet another link"',
                               '\t\\s\\shttps://example.com/foo-bar-baz-123"',
                               '\t- url: "https://example.net/bare-link-without-text']}/>
            </FlexRow>
        </FlexColumn>
    );
};

export default SubmissionMetadataLargeDesktop;