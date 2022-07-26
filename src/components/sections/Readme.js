import React from "react";
import {FlexColumn, FlexRow, Svg} from "../../utils/containers";
import {Body, H2, Medium} from "../../utils/fonts";
import Media from "react-media";
import theme from "../../utils/theme";
import baselineIco from '../../assets/baseline_ico.svg';
import bestScoreIco from '../../assets/cup_ico.svg';
import timeIco from '../../assets/clock_ico.svg';
import metricIco from '../../assets/metric_ico.svg';
import coinsIco from '../../assets/coins_ico.svg';
import textIco from '../../assets/text_ico.svg';
import {RENDER_DEADLINE_TIME} from "../../utils/globals";
import getChallengeFullDescription from "../../api/getChallengeFullDescription";
import {markdown} from "markdown";
import styled from "styled-components";

const ReadmeStyle = styled(Body)`
  h3 {
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    @media (min-width: ${({theme}) => theme.overMobile}) {
      font-size: 24px;
      line-height: 26px;
    }
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;

    @media (min-width: ${({theme}) => theme.overMobile}) {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

const Readme = (props) => {
    const [fullDescription, setFullDescription] = React.useState('');

    React.useEffect(() => {
        getChallengeFullDescription(setFullDescription, props.challengeName);
    }, [props.challengeName]);

    const parseMarkdownResponse = (response) => {
        let result = markdown.toHTML(response);
        let regex = /<h1>[^<>]*<\/h1>/g;
        result = result.replace(regex, '');
        regex = /<h2>/g;
        result = result.replace(regex, '<h3>');
        regex = /<\/h2>/g;
        result = result.replace(regex, '</h3>');
        return result;
    }

    const mobileRender = () => {
        return (
            <FlexColumn as='section' padding='20px' gap='24px'>
                <FlexColumn gap='12px' alignmentX='flex-start'>
                    <H2 as='h2'>
                        Info
                    </H2>
                    <FlexColumn gap='10px' as='ul' alignmentX='flex-start'>
                        <FlexRow gap='10px' as='li'>
                            <Svg src={textIco} width='24px' height='24px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                The word-processing challenge
                            </Medium>
                        </FlexRow>
                        <FlexRow gap='10px' as='li'>
                            <Svg src={metricIco} width='24px' height='24px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                Metrics: {props.metric ? props.metric : 'xxx'}
                            </Medium>
                        </FlexRow>
                        <FlexRow gap='10px' as='li'>
                            <Svg src={bestScoreIco} width='24px' height='24px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                Best score: {props.bestScore ? props.bestScore : 'xxx'}
                            </Medium>
                        </FlexRow>
                        <FlexRow gap='10px' as='li'>
                            <Svg src={baselineIco} width='24px' height='24px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                Baseline: {props.baseline ? props.baseline : 'xxx'}
                            </Medium>
                        </FlexRow>
                        <FlexRow gap='10px' as='li'>
                            <Svg src={timeIco} width='24px' height='24px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                Deadline: {props.deadline ? RENDER_DEADLINE_TIME(props.deadline) : 'xxx'}
                            </Medium>
                        </FlexRow>
                        <FlexRow gap='10px' as='li'>
                            <Svg src={coinsIco} width='24px' height='24px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                Prize: {props.prize ? props.prize : 'xxx'}
                            </Medium>
                        </FlexRow>
                    </FlexColumn>
                </FlexColumn>
                <FlexColumn alignmentX='flex-start' maxWidth='260px'>
                    <H2 as='h2'>
                        Description
                    </H2>
                    <ReadmeStyle as={fullDescription ? 'article' : 'p'} dangerouslySetInnerHTML={{
                        __html: fullDescription
                            ? parseMarkdownResponse(fullDescription) : props.description
                    }}/>
                </FlexColumn>
                <FlexColumn gap='16px' alignmentX='flex-start' maxWidth='260px'>
                    <H2 as='h2'>
                        Baseline
                    </H2>
                    <FlexColumn gap='12px' alignmentX='flex-start'>
                        <Body as='p'>
                            In metus ex, venenatis quis risus eget, sodales venenatis nibh. Sed ullamcorper leo non nunc
                            euismod, id faucibus justo finibus. Nullam malesuada eros quam, eu lobortis leo feugiat non.
                        </Body>
                        <Body as='p'>
                            See notebook&nbsp;
                            <Medium as='a' href='#' display='inline-block' cursor='pointer'>
                                here.
                            </Medium>
                        </Body>
                    </FlexColumn>
                </FlexColumn>
            </FlexColumn>
        );
    }

    const desktopRender = () => {
        return (
            <FlexColumn as='section' padding='20px' gap='64px'>
                <FlexColumn gap='32px'>
                    <H2 as='h2'>
                        Info
                    </H2>
                    <FlexColumn as='ul' gap='10px' padding='24px 30px' shadow={theme.shadow}
                                alignmentX='flex-start' border={`1px solid ${theme.colors.dark05}`}>
                        <FlexRow gap='20px' as='li'>
                            <Svg src={textIco} width='32px' height='32px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                The word-processing challenge
                            </Medium>
                        </FlexRow>
                        <FlexRow gap='20px' as='li'>
                            <Svg src={metricIco} width='32px' height='32px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                Metrics: {props.metric ? props.metric : 'xxx'}
                            </Medium>
                        </FlexRow>
                        <FlexRow gap='20px' as='li'>
                            <Svg src={bestScoreIco} width='32px' height='32px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                Best score: {props.bestScore ? props.bestScore : 'xxx'}
                            </Medium>
                        </FlexRow>
                        <FlexRow gap='20px' as='li'>
                            <Svg src={baselineIco} width='32px' height='32px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                Baseline: {props.baseline ? props.baseline : 'xxx'}
                            </Medium>
                        </FlexRow>
                        <FlexRow gap='20px' as='li'>
                            <Svg src={timeIco} width='32px' height='32px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                Deadline: {props.deadline ? RENDER_DEADLINE_TIME(props.deadline) : 'xxx'}
                            </Medium>
                        </FlexRow>
                        <FlexRow gap='20px' as='li'>
                            <Svg src={coinsIco} width='32px' height='32px'
                                 backgroundColor={theme.colors.dark} size='contain'/>
                            <Medium as='p'>
                                Prize: {props.prize ? props.prize : 'xxx'}
                            </Medium>
                        </FlexRow>
                    </FlexColumn>
                </FlexColumn>
                <FlexColumn alignmentX='flex-start' width='80%' maxWidth='1000px'>
                    <H2 as='h2'>
                        Description
                    </H2>
                    <ReadmeStyle as={fullDescription ? 'article' : 'p'} dangerouslySetInnerHTML={{
                        __html: fullDescription
                            ? parseMarkdownResponse(fullDescription) : props.description
                    }}/>
                </FlexColumn>
                <FlexColumn gap='16px' alignmentX='flex-start' width='80%' maxWidth='1000px'>
                    <H2 as='h2'>
                        Baseline
                    </H2>
                    <FlexColumn gap='12px' alignmentX='flex-start'>
                        <Body as='p'>
                            In metus ex, venenatis quis risus eget, sodales venenatis nibh. Sed ullamcorper leo non nunc
                            euismod, id faucibus justo finibus. Nullam malesuada eros quam, eu lobortis leo feugiat non.
                        </Body>
                        <Body as='p'>
                            See notebook&nbsp;
                            <Medium as='a' href='#' display='inline-block' cursor='pointer'>
                                here.
                            </Medium>
                        </Body>
                    </FlexColumn>
                </FlexColumn>
            </FlexColumn>
        );
    }

    return (
        <>
            <Media query={theme.mobile}>
                {mobileRender()}
            </Media>
            <Media query={theme.desktop}>
                {desktopRender()}
            </Media>
        </>
    );
}

export default Readme;