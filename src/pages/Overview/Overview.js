import React from 'react';
import Media from "react-media";
import OverviewStyle from "./OverviewStyle";
import theme from "../../utils/theme";
import {FlexColumn} from "../../utils/containers";
import {BodyNew, H2New} from "../../utils/fonts";
import {RENDER_DEADLINE_TIME} from "../../utils/globals";

const Overview = (props) => {

  const mobileRender = () => {
    return '';
  };

  const desktopRender = () => {
    return (
        <OverviewStyle>
            <FlexColumn width="100%">
                <H2New as="h2" textLeft={true}>Description</H2New>
                <BodyNew as="p">{props.challenge.description}</BodyNew>
            </FlexColumn>
            <span className="spacer"></span>
            <FlexColumn width="100%">
                <H2New as="h2" textLeft={true}>Participants</H2New>
                <BodyNew as="p">{props.challenge.participants}</BodyNew>
            </FlexColumn>
            <span className="spacer"></span>
            <FlexColumn width="100%">
                <H2New as="h2" textLeft={true}>Deadline</H2New>
                <BodyNew as="p">{RENDER_DEADLINE_TIME(props.challenge.deadline)}</BodyNew>
            </FlexColumn>
            <span className="spacer"></span>
            <FlexColumn width="100%">
                <H2New as="h2" textLeft={true}>Metrics</H2New>
                <BodyNew as="p">{props.challenge.mainMetric}</BodyNew>
            </FlexColumn>
            { props.challenge.type &&<FlexColumn width="100%">
            <span className="spacer"></span>
             <H2New as="h2" textLeft={true}>Type</H2New>
                <BodyNew as="p">{props.challenge.type}</BodyNew>
            </FlexColumn> }
        </OverviewStyle>
    );
  };

  return (
      <>
        <Media query={theme.mobile}>{mobileRender()}</Media>
        <Media query={theme.desktop}>{desktopRender()}</Media>
      </>
  );

};


export default Overview;
