import React from 'react';
import { FlexColumn, Grid } from '../../utils/containers';
import { IS_MOBILE } from '../../utils/globals';
import { H2, Body, Medium } from '../../utils/fonts';
import CircleNumber from '../../components/generic/CircleNumber';
import CodeShell from '../../components/generic/CodeShell';

const ChallengeCreateHowTo = () => {
  const subpointsGridGap = IS_MOBILE() ? '8px' : '16px';

  return (
    <FlexColumn
      padding={IS_MOBILE() ? '12px 20px' : '80px 0'}
      gap={IS_MOBILE() ? '24px' : '48px'}
      alignmentX={IS_MOBILE() ? 'flex-start' : 'center'}
      maxWidth={IS_MOBILE() ? '668px' : 'none'}
    >
      <FlexColumn maxWidth="680px" alignmentX="flex-start" gap="48px">
        <FlexColumn
          as="article"
          width="100%"
          gap={IS_MOBILE() ? '16px' : '24px'}
          alignmentX="flex-start"
        >
          <H2 as="h2" margin={IS_MOBILE() ? '0 0 4px 0' : '0 0 8px 0'}>
            How to create challenge
          </H2>
          <Grid
            width="100%"
            gridTemplateColumns="auto 1fr"
            gridGap={subpointsGridGap}
          >
            <CircleNumber number="1" />
            <Body as="p" margin="auto 0">
              Enter challenge title
            </Body>
          </Grid>
          <Grid
            width="100%"
            gridTemplateColumns="auto 1fr"
            gridGap={subpointsGridGap}
          >
            <CircleNumber number="2" />
            <Body as="p" margin="auto 0">
              Enter challenge source zip file link for users with the following
              structure;&nbsp;
              <Medium>(remember to not upload test-A/expected.tsv)</Medium>
            </Body>
          </Grid>
          <CodeShell
            codeBlockIndex={1}
            disablePrompt
            gap="4px"
            commands={[
              `<challenge-title>:`,
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
              Enter challenge description, deadline, award and challenge type.
            </Body>
          </Grid>
          <Grid
            width="100%"
            gridTemplateColumns="auto 1fr"
            gridGap={subpointsGridGap}
          >
            <CircleNumber number="4" />
            <Body as="p" margin="auto 0">
              Select the challenge metric and enter the optional metric
              parameters according to their documentation
            </Body>
          </Grid>
          <Grid
            width="100%"
            gridTemplateColumns="auto 1fr"
            gridGap={subpointsGridGap}
          >
            <CircleNumber number="5" />
            <Body as="p" margin="auto 0">
              Attach challenge zip file for evaluation with the following
              structure&nbsp;(you need also add <strong>out.tsv files</strong>
              &nbsp;for test submission and&nbsp;
              <Medium>remember to attach test-A/expected.tsv)</Medium>;
            </Body>
          </Grid>
          <CodeShell
            codeBlockIndex={1}
            disablePrompt
            gap="4px"
            commands={[
              `<challenge-title>:`,
              '\t\t dev-0:',
              '\t\t\t\t expected.tsv',
              '\t\t\t\t in.tsv',
              '\t\t\t\t out.tsv (important!)',
              '\t\t test-A:',
              '\t\t\t\t expected.tsv (important!)',
              '\t\t\t\t in.tsv',
              '\t\t\t\t out.tsv (important!)',
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
            <CircleNumber number="6" />
            <Body as="p" margin="auto 0">
              Submit
            </Body>
          </Grid>
        </FlexColumn>
      </FlexColumn>
    </FlexColumn>
  );
};

export default ChallengeCreateHowTo;
