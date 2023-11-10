import React from 'react';
import { IS_MOBILE } from '../../../utils/globals';
import { Body, H2, Medium } from '../../../utils/fonts';
import { FlexColumn, Grid } from '../../../utils/containers';
import CircleNumber from '../../../components/generic/CircleNumber';
import CodeShell from '../../../components/generic/CodeShell';

const HowToContent = (props) => {
  const pullCodeLineRender = () => {
    if (
      props.challengeName === 'cnlps-caiccaic' ||
      props.challengeName === 'cnlps-ticrc'
    ) {
      return `git pull git@github.com:kubapok/${props.challengeName}.git`;
    } else {
      return `git pull git://gonito.net/${props.challengeName}.git`;
    }
  };
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
          Create a private git repository with the name
          <Medium as="span">&nbsp;{props.challengeName}</Medium>
          &nbsp;The name of the repository must match!
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="2" />
        <Body as="p" margin="auto 0">
          Clone your repository and pull from the challenge mother repository
        </Body>
      </Grid>
      <CodeShell
        codeBlockIndex={1}
        commands={[
          `git clone your-git-repository/${props.challengeName}`,
          `cd ${props.challengeName}`,
          pullCodeLineRender(),
        ]}
      />
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="3" />
        <Body as="p" margin="auto 0">
          You need to generate your solution for the test set as{' '}
          <Medium as="span">test-A/out.tsv</Medium>. You may also create the
          output for the dev set <Medium as="span">dev-0/out.tsv</Medium>.
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="4" />
        <Body as="p" margin="auto 0">
          (This step is optional.) You can evaluate results for the dev set
          locally by <Medium as="span">geval</Medium>.
        </Body>
      </Grid>
      <CodeShell
        codeBlockIndex={3}
        commands={[
          'wget https://gonito.net/get/bin/geval',
          'chmod u+x geval',
          './geval --help',
          './geval -t dev-0',
        ]}
      />
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="5" />
        <Body as="p" margin="auto 0">
          Commit and push at least <Medium>*/out.tsv</Medium> files to your
          repo. It is also recommended to push your source code files.
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="6" />
        <Body as="p" margin="auto 0">
          Submit your solution to Gonito using <Medium>SUBMIT</Medium> on the
          panel on the left.
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={subpointsGridGap}
      >
        <CircleNumber number="7" />
        <Body as="p" margin="auto 0">
          Your repository must be public.
        </Body>
      </Grid>
    </FlexColumn>
  );
};

export default HowToContent;
