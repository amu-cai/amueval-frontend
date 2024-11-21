import React from 'react';
import { FlexColumn } from '../../utils/containers';
import {H2New, BodyNew} from "../../utils/fonts";
import HowToSubmissionStyle from "./HowToSubmissionStyle";

const HowToSubmission = (props) => {
  const { challengeSource } = props;

  return (
      <HowToSubmissionStyle>
          <FlexColumn className="wrapper">
              <H2New as="h2" textLeft={true}>Make submission how-to</H2New>
              <BodyNew as="p">If you want to take part in the challenge follow these steps:</BodyNew>
              <BodyNew as="p"><span className="highlight">1. Get the data:</span> download the dataset from <a target='_blank' rel="noreferrer" href={challengeSource}>{challengeSource}</a></BodyNew>
              <BodyNew as="p"><span className="highlight">2. Train your model:</span> use the data from the <span className="highlight">train</span> folder to develop your model</BodyNew>
              <BodyNew as="p"><span className="highlight">3. Generate outputs:</span> use your model to generate outputs for the data in the <span className="highlight">in.tsv</span> file stored in the <span className="highlight">test</span> folder.</BodyNew>
              <BodyNew as="p"><span className="highlight">4. Save the outputs:</span> save your generated outputs to the <span className="highlight">out.tsv</span> file.</BodyNew>
              <BodyNew as="p"><span className="highlight">5. Submit your solution:</span> use the <span className="highlight">Add Submission</span> tab on the challenge site to upload the <span className="highlight">out.tsv</span> file. Add a short description of your solution and click the <span className="highlight">Submit</span> button.</BodyNew>
              <BodyNew as="p"><span className="highlight">6. Check your results:</span> now you can check your results in the <span className="highlight">My submissions</span> tab.</BodyNew>
          </FlexColumn>
      </HowToSubmissionStyle>

  );
};

export default HowToSubmission;
