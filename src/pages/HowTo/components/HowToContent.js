import React from 'react';
import { CHALLENGE_PAGE, IS_MOBILE } from '../../../utils/globals';
import { Body, H2, Medium } from '../../../utils/fonts';
import { FlexColumn, Grid } from '../../../utils/containers';
import CircleNumber from '../../../components/generic/CircleNumber';
import CodeShell from '../../../components/generic/CodeShell';
import theme from '../../../utils/theme';
import { Link } from 'react-router-dom';

const HowToContent = (props) => {
  const subpointsGridGap = IS_MOBILE() ? '8px' : '16px';

  return (
    <FlexColumn
      as="article"
      width="100%"
      gap={IS_MOBILE() ? '16px' : '24px'}
      alignmentX="flex-start"
    >
      <H2 as="h2" margin={IS_MOBILE() ? '0 0 4px 0' : '0 0 8px 0'}>
        How to
      </H2>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="1" />
        <Body as="p" margin="auto 0">
          Download source of
          <Medium as="span">&nbsp;{props.challengeName}</Medium> challenge&nbsp;
          <Medium
            as="a"
            cursor="pointer"
            target="_blank"
            href={props.challengeSource}
            color={theme.colors.blue}
          >
            {props.challengeSource}
          </Medium>
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="2" />
        <Body as="p" margin="auto 0">
          Challenge should has the following structure;
        </Body>
      </Grid>
      <CodeShell
        codeBlockIndex={1}
        disablePrompt
        gap="4px"
        commands={[
          `${props.challengeName}:`,
          '\t\t dev-0:',
          '\t\t\t\t expected.tsv',
          '\t\t\t\t in.tsv',
          '\t\t test-A:',
          '\t\t\t\t in.tsv',
          '\t\t train:',
          '\t\t\t\t train.tsv',
          '\t\t README.md',
        ]}
      />
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="3" />
        <Body as="p" margin="auto 0">
          Work with <Medium>train.tsv</Medium> to train your model
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="4" />
        <Body as="p" margin="auto 0">
          Generate <Medium>out.tsv</Medium> files in <Medium>dev-0</Medium> and{' '}
          <Medium>test-A</Medium> to evaluate them with{' '}
          <Medium>expected.tsv</Medium>
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="5" />
        <Body as="p" margin="auto 0">
          The <Medium>test-A/expected.tsv</Medium> is hidden in the system
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="6" />
        <Body as="p" margin="auto 0">
          Compress your solution files to <Medium>.zip</Medium> and&nbsp;
          <Medium
            as={Link}
            to={`${CHALLENGE_PAGE}/${props.challengeName}/submit`}
            color={theme.colors.green}
            cursor="pointer"
          >
            SUBMIT
          </Medium>
          &nbsp;to see result of evaluation with test-A.
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="7" />
        <Body as="p" margin="auto 0">
          Your submission zip file must has the following files and structure:
        </Body>
      </Grid>
      <CodeShell
        codeBlockIndex={1}
        disablePrompt
        gap="4px"
        commands={[
          `${props.challengeName}:`,
          '\t\t dev-0:',
          '\t\t\t\t out.tsv',
          '\t\t test-A:',
          '\t\t\t\t out.tsv',
        ]}
      />
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="8" />
        <Body as="p" margin="auto 0">
          Some extra info about challenge can be in&nbsp;
          <Medium
            as={Link}
            to={`${CHALLENGE_PAGE}/${props.challengeName}/readme`}
            color={theme.colors.green}
            cursor="pointer"
          >
            README
          </Medium>
        </Body>
      </Grid>
    </FlexColumn>
  );
};

export default HowToContent;
