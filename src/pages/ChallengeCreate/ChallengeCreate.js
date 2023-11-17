import React from 'react';
import { FlexColumn, Grid } from '../../utils/containers';
import { H2, Body, Medium } from '../../utils/fonts';
import CircleNumber from '../../components/generic/CircleNumber';
import { IS_MOBILE } from '../../utils/globals';
import CodeShell from '../../components/generic/CodeShell';

const ChallengeCreate = () => {
  const subpointsGridGap = IS_MOBILE() ? '8px' : '16px';

  return (
    <FlexColumn width="100%" minHeight="100vh">
      <FlexColumn
        as="article"
        gap={IS_MOBILE() ? '16px' : '24px'}
        maxWidth={IS_MOBILE() ? '668px' : '1400px'}
        padding="128px 32px"
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
            Download geval
          </Body>
        </Grid>
        <CodeShell
          codeBlockIndex={1}
          commands={[
            `wget https://gonito.net/get/bin/geval`,
            `chmod u+x geval`,
            `./geval --help`,
          ]}
        />
        <Grid
          width="100%"
          gridTemplateColumns="auto 1fr"
          gridGap={subpointsGridGap}
        >
          <CircleNumber number="2" />
          <Body as="p" margin="auto 0">
            Create a skeleton for your challenge{' '}
            <Medium>your-challenge-name</Medium>
          </Body>
        </Grid>
        <CodeShell
          codeBlockIndex={2}
          commands={[
            'geval --init --expected-directory your-challenge-name --metric RMSE',
          ]}
        />
        <Grid
          width="100%"
          gridTemplateColumns="auto 1fr"
          gridGap={subpointsGridGap}
        >
          <CircleNumber number="3" />
          <Body as="p" margin="auto 0">
            Use the generated challenge skeleton to prepare your challenge
            (include */expected.tsv in all the datasets).
          </Body>
        </Grid>
        <Grid
          width="100%"
          gridTemplateColumns="auto 1fr"
          gridGap={subpointsGridGap}
        >
          <CircleNumber number="4" />
          <Body as="p" margin="auto 0">
            Validate your challenge:
          </Body>
        </Grid>
        <CodeShell
          codeBlockIndex={3}
          commands={[
            'geval --validate --expected-directory your-challenge-name/',
            'echo $?',
          ]}
        />
        <Grid
          width="100%"
          gridTemplateColumns="auto 1fr"
          gridGap={subpointsGridGap}
        >
          <CircleNumber number="5" />
          <Body as="p" margin="auto 0">
            Upload the challenge to private git repository named
            your-challenge-name-dont-peek
          </Body>
        </Grid>
        <Grid
          width="100%"
          gridTemplateColumns="auto 1fr"
          gridGap={subpointsGridGap}
        >
          <CircleNumber number="6" />
          <Body as="p" margin="auto 0">
            Upload the challenge (but without test-*/expected.tsv) to a public
            git repository named your-challenge-name
          </Body>
        </Grid>
        <Grid
          width="100%"
          gridTemplateColumns="auto 1fr"
          gridGap={subpointsGridGap}
        >
          <CircleNumber number="7" />
          <Body as="p" margin="auto 0">
            Contact the Gonito administrator jakub.pokrywka@amu.edu.pl and ask
            him to upload your challenge (you will need to add Gonito
            administrator as a collaborator with read permission to the git
            repository challenge-name-dont-peek)
          </Body>
        </Grid>
        <Body as="p" margin="auto 0">
          Detailed instructions are included here:{' '}
          <Medium
            as="a"
            target="_blank"
            href="https://gitlab.com/filipg/geval/-/tree/master#preparing-a-gonito-challenge"
            cursor="pointer"
          >
            https://gitlab.com/filipg/geval/-/tree/master#preparing-a-gonito-challenge
          </Medium>
        </Body>
      </FlexColumn>
    </FlexColumn>
  );
};

export default ChallengeCreate;
