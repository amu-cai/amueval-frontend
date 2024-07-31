import React from 'react';
import Media from 'react-media';
import theme from '../../../../utils/theme';
import {FlexRow, FlexColumn} from "../../../../utils/containers";
import logoCsi from "../../../../assets/logo-csi.png";
import CsiStyle from './CsiStyle.js';
import {H2New, BodyNew} from "../../../../utils/fonts";

const Csi = () => {
    const mobileRender = () => {
        return (
            <CsiStyle>
                <FlexColumn
                    id="csi"
                >
                    <H2New as="h2" className="CsiStyle__h1_sm">Center for Artificial Intelligence</H2New>
                    <BodyNew as="p">
                        Center for Artificial Intelligence (C4AI) integrates interdisciplinary research on AI at Adam Mickiewicz university.
                    </BodyNew>
                    <BodyNew as="p">
                        C4AI collaborates with business entities to implement the research results in the economic environment.
                    </BodyNew>
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
                    id="csi"
                >
                    <FlexColumn className="CsiStyle__text">
                        <H2New as="h2" textLeft={true}>Center for Artificial Intelligence</H2New>
                        <BodyNew as="p">
                            Center for Artificial Intelligence (C4AI) integrates interdisciplinary research on AI at Adam Mickiewicz university.
                        </BodyNew>
                        <BodyNew as="p">
                            C4AI collaborates with business entities to implement the research results in the economic environment.
                        </BodyNew>
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
                    gap="100px"
                    id="csi"
                >
                    <FlexColumn class="col1">
                        <H2New as="h2" textLeft={true} className="CsiStyle__h1_lg">Center for Artificial Intelligence</H2New>
                        <BodyNew as="p" className="CsiStyle__p_lg">
                            Center for Artificial Intelligence (C4AI) integrates interdisciplinary research on AI at Adam Mickiewicz university.
                        </BodyNew>
                        <BodyNew as="p" className="CsiStyle__p_lg">
                            C4AI collaborates with business entities to implement the research results in the economic environment.
                        </BodyNew>
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
      <Media query={theme.desktop2}>{desktopRender()}</Media>
    </>
  );
};

export default Csi;
