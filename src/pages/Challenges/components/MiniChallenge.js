import React from 'react';
import {
  FlexColumn, FlexRow
} from '../../../utils/containers';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  CHALLENGE_PAGE,
} from '../../../utils/globals';
import {H2New} from '../../../utils/fonts';
import theme from "../../../utils/theme";
import {getChallengeImage} from "../../../utils/globals";


const MiniChallengeStyle = styled(FlexColumn)`
  width: 1100px;
  .challengeTypeImg {
    margin-right: 20px;
  }
  
  .wrap {
    width: 100%;
    border-top: 1px solid ${theme.colors.black700};
    padding: 20px;
  }
  
  .titleHeader {
    margin-bottom: 8px;
  }
  
  .accuracy {
    color: ${theme.colors.green700};
    font-weight: bold;
    margin-right: auto;
    margin-top: 8px;
  }
  
  .highlight {
    font-weight: bold;
    color: ${theme.colors.green700}
  }
  
  .challengeMetadata {
    margin-right: 10px;
  }
  
  .highlight:nth-child(2) {
    margin-left: 10px;
  }
  
  .wrap, .wrap div {
    cursor: pointer;
  }
  
  .description {
    margin-right: auto;
  }
`;

const MiniChallenge = (props) => {
  return (
    <MiniChallengeStyle as={Link} to={`${CHALLENGE_PAGE}/${props.title}`}>
      <FlexRow className="wrap" alignmentX="start">
        <FlexColumn as="div">
          <img className="challengeTypeImg" src={getChallengeImage(props.type)} alt="Overview type"/>
        </FlexColumn>
        <FlexColumn as="div" width="100%">
          <FlexRow as="div" width="100%" alignmentY="space-between" alignmentX="space-between">
            <H2New className="titleHeader">{props.title}</H2New>
            <div className="challengeMetadata">
              <span className="highlight">&nbsp;24</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="highlight">&nbsp;{props.deadline.slice(0, 10)}</span>
            </div>
          </FlexRow>
          <FlexRow as="div" className="description">
            {props.description}
          </FlexRow>
          <FlexRow as="div" className="accuracy">
            {props.metric}
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </MiniChallengeStyle>
  );
};

export default MiniChallenge;
