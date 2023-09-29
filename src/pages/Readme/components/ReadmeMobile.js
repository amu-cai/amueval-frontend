import React from 'react';
import { FlexColumn } from '../../../utils/containers';
import { H2 } from '../../../utils/fonts';
import InfoList from '../../../components/generic/InfoList';
import ReadmeStyle from '../ReadmeStyle';

const ReadmeMobile = (props) => {
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
          as={props.fullDescription ? 'article' : 'p'}
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

export default ReadmeMobile;
