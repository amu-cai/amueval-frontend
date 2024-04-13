import React from "react";
import { FlexColumn, Grid } from "../../utils/containers";
import { IS_MOBILE } from "../../utils/globals";
import { H2, Body, Medium, H3 } from "../../utils/fonts";
import CircleNumber from "../../components/generic/CircleNumber";
import CodeShell from "../../components/generic/CodeShell";

const ChallengeCreateHowTo = () => {
  const subpointsGridGap = IS_MOBILE() ? "8px" : "16px";

  return (
    <FlexColumn
      padding={IS_MOBILE() ? "12px 20px" : "80px 0"}
      gap={IS_MOBILE() ? "24px" : "48px"}
      alignmentX={IS_MOBILE() ? "flex-start" : "center"}
      maxWidth={IS_MOBILE() ? "668px" : "none"}
    >
      <FlexColumn maxWidth="680px" alignmentX="flex-start" gap="48px">
        <FlexColumn
          as="article"
          width="100%"
          gap={IS_MOBILE() ? "16px" : "24px"}
          alignmentX="flex-start"
        >
          <H2 as="h2" margin={IS_MOBILE() ? "0 0 4px 0" : "0 0 8px 0"}>
            Preparing the data for your own challenge
          </H2>
          <Body as="p">
            To create your own challenge in AMU-Eval, you will need to prepare
            your data in a specific format. The data should be organized into
            two main folders that must have the same name as the challenge
            title.
          </Body>
          <section>
            <H3 as="h3">Public folder</H3>
            <ul>
              <li>This folder is accessible to all users.</li>
              <li>
                It contains the training, validation/development and test data,
                but <Medium as="strong">without</Medium> the labels for the test
                set (only the input data for the test set).
              </li>
            </ul>
          </section>
          <section>
            <H3 as="h3">Private folder</H3>
            <ul>
              <li>
                This folder is only accessible to the competition organizers.
              </li>
              <li>
                It contains the training, validation/development and test data,
                &nbsp;<Medium as="strong">including</Medium> the labels for the
                test set.
              </li>
            </ul>
          </section>
          <Body>
            Within each of these two folders, there should be three subfolders
            that will contain the data in the .tsv (tab-separated values)
            format:
          </Body>
          <FlexColumn alignmentX="flex-start">
            <H3 as="h3" margin="0 0 16px 0">
              train:
            </H3>
            <Body as="p">
              This subfolder contains the training data, which consists of two
              files:
            </Body>
            <ul>
              <li>
                <Medium>in.tsv:</Medium> This file contains the input data for
                the models.
              </li>
              <li>
                <Medium>expected.tsv:</Medium> This file contains the labels for
                the input data.
              </li>
            </ul>
          </FlexColumn>
          <FlexColumn alignmentX="flex-start">
            <H3 as="h3" margin="0 0 16px 0">
              dev-0:
            </H3>
            <Body as="p">
              This subfolder contains the validation/development data, which
              also consists of two files:
            </Body>
            <ul>
              <li>
                <Medium>in.tsv:</Medium> This file contains the input data for
                the models.
              </li>
              <li>
                <Medium>expected.tsv:</Medium> This file contains the labels for
                the input data.
              </li>
            </ul>
          </FlexColumn>
          <FlexColumn alignmentX="flex-start">
            <H3 as="h3" margin="0 0 16px 0">
              test-A:
            </H3>
            <Body as="p">
              This subfolder contains the test data, which consists of two
              files:
            </Body>
            <ul>
              <li>
                <Medium>in.tsv:</Medium> This file contains the input data for
                the models.
              </li>
              <li>
                <Medium>expected.tsv:</Medium> This file contains the labels for
                the input data (only available in the <Medium>Private</Medium>
                &nbsp; folder).
              </li>
            </ul>
          </FlexColumn>
          <H2 as="h2" margin={IS_MOBILE() ? "0 0 4px 0" : "0 0 8px 0"}>
            Form steps
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
              Enter challenge source zip file link with&nbsp;
              <Medium>Public folder</Medium> for users with the following
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
              "\t\t dev-0:",
              "\t\t\t\t expected.tsv",
              "\t\t\t\t in.tsv",
              "\t\t test-A:",
              "\t\t\t\t in.tsv",
              "\t\t train:",
              "\t\t\t\t in.tsv",
              "\t\t\t\t out.tsv",
              "\t\t README.md",
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
              Attach challenge zip file for evaluation&nbsp;
              <Medium>(Private folder)</Medium> with the following
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
              "\t\t dev-0:",
              "\t\t\t\t expected.tsv",
              "\t\t\t\t in.tsv",
              "\t\t\t\t out.tsv (important!)",
              "\t\t test-A:",
              "\t\t\t\t expected.tsv (important!)",
              "\t\t\t\t in.tsv",
              "\t\t\t\t out.tsv (important!)",
              "\t\t train:",
              "\t\t\t\t in.tsv",
              "\t\t\t\t out.tsv",
              "\t\t README.md",
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
