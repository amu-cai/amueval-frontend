import React from 'react';
import { IS_MOBILE } from '../../../../utils/globals';
import { Body, H2, Medium } from '../../../../utils/fonts';
import { FlexColumn, Grid } from '../../../../utils/containers';
import CircleNumber from '../../../generic/CircleNumber';
import CodeShell from '../../../generic/CodeShell';

const GetChallengeRepo = (props) => {
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

  return (
    <FlexColumn
      as="article"
      width="100%"
      gap={IS_MOBILE() ? '16px' : '24px'}
      alignmentX="flex-start"
    >
      <H2 as="h2" margin={IS_MOBILE() ? '0 0 4px 0' : '0 0 8px 0'}>
        Get challenge repo
      </H2>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={IS_MOBILE() ? '8px' : '16px'}
      >
        <CircleNumber number="1" />
        <Body as="p" margin="auto 0">
          Create a private git repository with the name
          <Medium as="span">&nbsp;{props.challengeName}</Medium>
          .&nbsp;The name of the repository must match!
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={IS_MOBILE() ? '8px' : '16px'}
      >
        <CircleNumber number="2" />
        <Body as="p" margin="auto 0">
          Add the following ssh key <Medium as="span">REPO_KEY_HERE</Medium> to
          your deploy keys in your git repository settings.
        </Body>
      </Grid>
      <Grid
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridGap={IS_MOBILE() ? '8px' : '16px'}
      >
        <CircleNumber number="3" />
        <Body as="p" margin="auto 0">
          Clone your repository and pull from the challenge mother repository
        </Body>
      </Grid>
      <CodeShell
        codeBlockIndex={1}
        commands={[
          `git clone your-git/${props.challengeName}`,
          `cd ${props.challengeName}`,
          pullCodeLineRender(),
        ]}
      />
    </FlexColumn>
  );
};

export default GetChallengeRepo;
