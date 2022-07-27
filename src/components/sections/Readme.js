import React from "react";
import {FlexColumn} from "../../utils/containers";
import {Body, H2, Medium} from "../../utils/fonts";
import Media from "react-media";
import theme from "../../utils/theme";
import getChallengeFullDescription from "../../api/getChallengeFullDescription";
import {markdown} from "markdown";
import styled from "styled-components";
import InfoList from "../elements/InfoList";

const ReadmeStyle = styled(Body)`
  h3 {
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    @media (min-width: ${({theme}) => theme.overMobile}) {
      font-size: 22px;
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

  a {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${({theme}) => theme.colors.dark};
    text-decoration: none;

    @media (min-width: ${({theme}) => theme.overMobile}) {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
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
                    <InfoList iconsSize='24px'/>
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
                    <InfoList iconsSize='32px'/>
                </FlexColumn>
                <FlexColumn alignmentX='flex-start' width='80%' maxWidth='1000px'>
                    <H2 as='h2'>
                        Description
                    </H2>
                    <ReadmeStyle as={fullDescription ? 'article' : 'p'} dangerouslySetInnerHTML={{
                        __html: fullDescription ? parseMarkdownResponse(fullDescription) : props.description
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