import React from 'react';
import Media from 'react-media';
import theme from '../../../../utils/theme';
import {FlexRow, FlexColumn} from "../../../../utils/containers";
import logoCsi from "../../../../assets/logo-csi.png";
import CsiStyle from './CsiStyle.js';
import {H2, Body} from "../../../../utils/fonts";

const Csi = () => {
    const mobileRender = () => {
        return (
            <CsiStyle>
                <FlexColumn
                >
                    <H2 as="h2" className="CsiStyle__h1_sm">Center for Artificial Intelligence</H2>
                    <Body as="p" className="CsiStyle__p_sm">Gonito.net belongs to the Center for Artificial Intelligence (C4AI) at Adam Mickiewicz University (UAM) which conducts research on the development of artificial intelligence, carries out scientific and research and development projects, integrates the research of scientists from various departments of Adam Mickiewicz University and outside it - from leading scientific centers in Poland and abroad as well as those employed in business entities. C4AI also cooperates with business entities in creating new solutions to be implemented in enterprises</Body>
                    <img className="csiStyle__logo" src={logoCsi} width="350px" alt="c4ai"/>
                </FlexColumn>
            </CsiStyle>
        );
    };

    const tabletRender = () => {
        return (
            <CsiStyle>
                <FlexRow
                    gap="100px"
                >
                    <FlexColumn className="CsiStyle__text">
                        <H2 as="h2" textLeft={true}>Center for Artificial Intelligence</H2>
                        <Body as="p">Gonito.net belongs to the Center for Artificial Intelligence (C4AI) at Adam Mickiewicz University (UAM) which conducts research on the development of artificial intelligence, carries out scientific and research and development projects, integrates the research of scientists from various departments of Adam Mickiewicz University and outside it - from leading scientific centers in Poland and abroad as well as those employed in business entities. C4AI also cooperates with business entities in creating new solutions to be implemented in enterprises</Body>
                    </FlexColumn>
                    <FlexColumn>
                        <img src={logoCsi} width="350px" alt="c4ai"/>
                    </FlexColumn>
                </FlexRow>
            </CsiStyle>
        );
    };

      const desktopRender = () => {
        return (
            <CsiStyle>
                <FlexRow
                    className="test"
                    gap="100px"
                >
                    <FlexColumn class="col1">
                        <H2 as="h2" textLeft={true} className="CsiStyle__h1_lg">Center for Artificial Intelligence</H2>
                        <Body as="p" className="CsiStyle__p_lg">Gonito.net belongs to the Center for Artificial Intelligence (C4AI) at Adam Mickiewicz University (UAM) which conducts research on the development of artificial intelligence, carries out scientific and research and development projects, integrates the research of scientists from various departments of Adam Mickiewicz University and outside it - from leading scientific centers in Poland and abroad as well as those employed in business entities. C4AI also cooperates with business entities in creating new solutions to be implemented in enterprises</Body>
                    </FlexColumn>
                    <FlexColumn class="col2">
                        <div>
                            <img src={logoCsi} width="499px" alt="c4ai"/>
                        </div>
                    </FlexColumn>
                </FlexRow>
            </CsiStyle>
        );
      };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.tablet}>{tabletRender()}</Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

export default Csi;
