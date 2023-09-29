import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { H2 } from '../../utils/fonts';
import Media from 'react-media';
import theme from '../../utils/theme';
import getChallengeFullDescription from '../../api/getChallengeFullDescription';
import InfoList from '../../components/generic/InfoList';
import Loading from '../../components/generic/Loading';
import { marked } from 'marked';
import ReadmeStyle from './ReadmeStyle';

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
      <FlexColumn
        as="section"
        className="Readme__section"
        padding="20px"
        gap="64px"
      >
        <FlexColumn className="Readme__info" gap="32px">
          <H2 as="h2">Info</H2>
          <InfoList
            iconsSize="32px"
            metric={props.metric}
            deadline={props.deadline}
          />
        </FlexColumn>
        <FlexColumn
          className="Readme__container"
          alignmentX="flex-start"
          width="80%"
          maxWidth="1200px"
        >
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

export default Readme;
