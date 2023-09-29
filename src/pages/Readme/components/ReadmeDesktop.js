import React from 'react';
import { FlexColumn } from '../../../utils/containers';
import { H2 } from '../../../utils/fonts';
import InfoList from '../../../components/generic/InfoList';
import ReadmeStyle from '../ReadmeStyle';

const ReadmeDesktop = (props) => {
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
          as={props.fullDescription ? 'section' : 'p'}
          dangerouslySetInnerHTML={{
            __html: props.fullDescription
              ? props.parseMarkdownResponse(props.fullDescription)
              : props.description,
          }}
        />
      </FlexColumn>
    </FlexColumn>
  );
};

export default ReadmeDesktop;
