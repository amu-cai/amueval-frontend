import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { Body, H2 } from '../../utils/fonts';
import Media from 'react-media';
import theme from '../../utils/theme';
import getChallengeFullDescription from '../../api/getChallengeFullDescription';
import styled from 'styled-components';
import InfoList from '../generic/InfoList';
import Loading from '../generic/Loading';
import PropsTypes from 'prop-types';
import MiniChallenge from '../challenges_list/MiniChallenge';
import { marked } from 'marked';

const ReadmeStyle = styled(Body)`
  * {
    font-weight: inherit;
  }

  h2 {
    font-family: 'Kanit', sans-serif;
    margin: 32px 0;
  }

  h3 {
    font-family: 'Kanit', sans-serif;
    font-weight: inherit;
    font-size: 18px;
    line-height: 22px;
    margin: 24px 0;

    @media (min-width: ${({ theme }) => theme.overMobile}) {
      font-size: 22px;
      line-height: 26px;
    }
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;

    @media (min-width: ${({ theme }) => theme.overMobile}) {
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
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;

    @media (min-width: ${({ theme }) => theme.overMobile}) {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
    }
  }
`;

const Readme = (props) => {
  const [fullDescription, setFullDescription] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getChallengeFullDescription(
      setFullDescription,
      setLoading,
      props.challengeName
    );
  }, [props.challengeName]);

  const parseMarkdownResponse = (response) => {
    let result = marked.parse(response);
    let regex = /<h3 /g;
    result = result.replace(regex, '<h4 ');
    regex = /<\/h3>/g;
    result = result.replace(regex, '</h4>');
    regex = /<h2 /g;
    result = result.replace(regex, '<h3 ');
    regex = /<\/h2>/g;
    result = result.replace(regex, '</h3>');
    regex = /<h1 /g;
    result = result.replace(regex, '<h2 ');
    regex = /<\/h1>/g;
    result = result.replace(regex, '</h2>');
    return result;
  };

  const mobileRender = () => {
    return (
      <FlexColumn as="section" padding="20px" gap="24px">
        <FlexColumn gap="12px" alignmentX="flex-start">
          <H2 as="h2">Info</H2>
          <InfoList
            iconsSize="24px"
            metric={props.metric}
            deadline={props.deadline}
          />
        </FlexColumn>
        <FlexColumn alignmentX="flex-start" maxWidth="260px">
          <ReadmeStyle
            as={fullDescription ? 'article' : 'p'}
            dangerouslySetInnerHTML={{
              __html: fullDescription
                ? parseMarkdownResponse(fullDescription)
                : props.description,
            }}
          />
        </FlexColumn>
      </FlexColumn>
    );
  };

  const desktopRender = () => {
    return (
      <FlexColumn as="section" padding="20px" gap="64px">
        <FlexColumn gap="32px">
          <H2 as="h2">Info</H2>
          <InfoList
            iconsSize="32px"
            metric={props.metric}
            deadline={props.deadline}
          />
        </FlexColumn>
        <FlexColumn alignmentX="flex-start" width="80%" maxWidth="1200px">
          <ReadmeStyle
            as={fullDescription ? 'section' : 'p'}
            dangerouslySetInnerHTML={{
              __html: fullDescription
                ? parseMarkdownResponse(fullDescription)
                : props.description,
            }}
          />
        </FlexColumn>
      </FlexColumn>
    );
  };

  return (
    <>
      <Media query={theme.mobile}>
        {!loading ? mobileRender() : <Loading visible={loading} />}
      </Media>
      <Media query={theme.desktop}>
        {!loading ? desktopRender() : <Loading visible={loading} />}
      </Media>
    </>
  );
};

MiniChallenge.propTypes = {
  challengeName: PropsTypes.string,
  description: PropsTypes.string,
};

MiniChallenge.defaultProps = {
  challengeName: '',
  description: '',
};

export default Readme;
