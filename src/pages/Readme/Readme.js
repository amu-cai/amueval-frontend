import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { H2 } from '../../utils/fonts';
import Media from 'react-media';
import theme from '../../utils/theme';
import InfoList from '../../components/generic/InfoList';
import { marked } from 'marked';
import ReadmeStyle from './ReadmeStyle';

const Readme = (props) => {
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
            as={props.readme ? 'article' : 'p'}
            dangerouslySetInnerHTML={{
              __html: props.readme
                ? parseMarkdownResponse(props.readme)
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
        width="80%"
      >
        {/* <FlexColumn className="Readme__info" gap="32px">
          <H2 as="h2">Info</H2>
          <InfoList
            iconsSize="32px"
            metric={props.metric}
            deadline={props.deadline}
          />
        </FlexColumn> */}
        <FlexColumn
          className="Readme__container"
          width="100%"
          maxWidth="1200px"
        >
          <ReadmeStyle
            as={props.readme ? 'section' : 'p'}
            dangerouslySetInnerHTML={{
              __html: props.readme
                ? parseMarkdownResponse(props.readme)
                : props.description,
            }}
          />
        </FlexColumn>
      </FlexColumn>
    );
  };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

export default Readme;
