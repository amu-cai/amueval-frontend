import React from "react";
import {H1New, BodyNew, H2New} from "../../utils/fonts";
import {FlexColumn} from "../../utils/containers";
import ChallengeCreateHowToStyle from "./ChallengeCreateHowToStyle";
import {Link} from "react-router-dom";
import {CHALLENGE_CREATE_PAGE} from "../../utils/globals";
import previousIcon from '../../assets/previous.svg';

const ChallengeCreateHowTo = () => {
  return (
      <ChallengeCreateHowToStyle>
        <FlexColumn className="previousIcon" as={Link} to={CHALLENGE_CREATE_PAGE}>
          <img alt="Go back!" src={previousIcon} width="60px" height="60px"></img>
        </FlexColumn>
          <FlexColumn className="wrapper">
            <H1New textLeft={true} as="h1">Preparing the data for your own challenge</H1New>
            <BodyNew as="p">To create a challenge using AmuEval, you must prepare your dataset in a specific format. You need to create two folders:</BodyNew>

            <H2New as="h2" textLeft={true}>The train folder</H2New>
            <BodyNew as="p">The train directory should contain the following files</BodyNew>
            <BodyNew as="p">(for training the models):</BodyNew>
            <BodyNew as="p"><span className="highlight">&#8226; in.tsv</span>: contains the input training data for the models</BodyNew>
            <BodyNew as="p"><span className="highlight">&#8226; expected.tsv</span>: contains the expected output for the input training data.</BodyNew>

            <H2New textLeft={true} as="h2">The test folder</H2New>
            <BodyNew as="p"><span className="highlight">&#8226; in.tsv</span>: This file contains the input test data for the models. The format of the file should be identical to train.tsv.</BodyNew>
            <br/>
            <BodyNew as="p"><span className="highlight">Important:</span> For the test data, you have to provide an <span className="highlight">expected.tsv</span> file separately. <span className="highlight">Do not include this file in the test folder.</span> It will be stored securely on the AmuEval server to evaluate the submissions.</BodyNew>

            <H2New textLeft={true} as="h2">File format guidelines</H2New>
            <BodyNew textLeft={true} as="h3"><span className="highlight">Text-based data</span></BodyNew>
            <BodyNew as="p">&#8226; Each row in the <span className="highlight">in.tsv</span> and <span className="highlight">expected.tsv</span> file should represent a single observation in the dataset.</BodyNew>
            <BodyNew as="p">&#8226; Separate rows with a newline symbol (<span className="highlight">\n</span>).</BodyNew>
            <BodyNew as="p">&#8226; If an observation has multiple features, separate them with a tab symbol (<span className="highlight">\t</span>).</BodyNew>
            <br/>
            <BodyNew textLeft={true} as="h3"><span className="highlight">Other types of data</span></BodyNew>
            <BodyNew as="p">If your data cannot be represented as a tsv file (e.g. images):</BodyNew>
            <BodyNew as="p">&#8226; Store each observation (e.g. each image) as a separate file in the <span className="highlight">train</span> folder and in the <span className="highlight">test</span> folder.</BodyNew>
            <BodyNew as="p">&#8226; Include filenames of all observations in the first column of the tsv files.</BodyNew>
            <br/>
            <BodyNew as="p">A model that achieves perfect performance should produce output that is identical to the output values in the <span className="highlight">expected.tsv</span> file.</BodyNew>

            <H2New textLeft={true} as="h2">Final step: Upload your dataset</H2New>
            <BodyNew as="p">Upload your <span className="highlight">train</span> and <span className="highlight">test</span> folders (without the <span className="highlight">expected.tsv</span> file in the test folder) to a repository, such as GitHub.</BodyNew>
          </FlexColumn>

          <FlexColumn className="wrapper newChallenge">
            <H1New textLeft={true} as="h1">Create a New Challenge</H1New>
            <BodyNew as="p"><span className="highlight">1. Add the dataset source:</span> Paste the link to your dataset repository.</BodyNew>
            <BodyNew as="p"><span className="highlight">2. Choose an evaluation metric:</span> Select the metric to evaluate solutions.</BodyNew>
            <BodyNew as="p"><span className="highlight">3. Upload your solution:</span> Upload the <span className="highlight">expected.tsv</span> file to the AmuEval server.</BodyNew>
            <BodyNew as="p"><span className="highlight">4. Customize your challenge (optional):</span> Make your challenge stand out by customizing the following parameters:</BodyNew>
            <BodyNew className="fieldsList">
              <BodyNew as="p"><span className="highlight">&#8226; Challenge title:</span> Give your challenge a catchy title (by default the challenge title is identical to the repository name).</BodyNew>
              <BodyNew as="p"><span className="highlight">&#8226; Challenge description:</span> Write a brief description of your challenge (by default the description is generated automatically).</BodyNew>
              <BodyNew as="p"><span className="highlight">&#8226; Challenge deadline:</span> Set a deadline for submissions (defaults to 6 months from challenge creation date).</BodyNew>
              <BodyNew as="p"><span className="highlight">&#8226; Challenge type:</span> Choose the type of challenge that fits best your dataset.</BodyNew>
              <BodyNew as="p"><span className="highlight">&#8226; Award for winners:</span> Offer an award for the best submissions.</BodyNew>
            </BodyNew>
            <BodyNew as="p"><span className="highlight">5. Create your challenge:</span> Click Create and your challenge will be live and available for everyone to participate!</BodyNew>
          </FlexColumn>
        <br/><br/>
      </ChallengeCreateHowToStyle>

);
};

export default ChallengeCreateHowTo;
