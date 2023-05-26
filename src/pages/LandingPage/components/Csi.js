import React from 'react';
import { FlexColumn, FlexRow, Svg } from '../../../utils/containers';
import { Body, H2, Medium } from '../../../utils/fonts';
import Media from 'react-media';
import theme from '../../../utils/theme';
import csiLogo from '../../../assets/csi_full_logo.svg';

const Csi = () => {
  const mobileRender = () => {
    return (
      <FlexColumn as="section" alignmentX="flex-start">
        <H2 as="h2" margin="0 0 24px 0">
          Center for Artificial Intelligence (C4AI)
        </H2>
        <Body as="p" margin="0 0 16px 0">
          <Medium as="span" display="inline">
            Gonito.net
          </Medium>{' '}
          belongs to the
          <Medium as="span" display="inline">
            &nbsp;Center for Artificial Intelligence (C4AI)&nbsp;
          </Medium>
          at Adam Mickiewicz University (UAM) which conducts research on the
          development of artificial intelligence, carries out scientific and
          research and development projects, integrates the research of
          scientists from various departments of Adam Mickiewicz University and
          outside it - from leading scientific centers in Poland and abroad as
          well as those employed in business entities.
        </Body>
        <Medium as="p">
          C4AI also cooperates with business entities in creating new solutions
          to be implemented in enterprises.
        </Medium>
      </FlexColumn>
    );
  };

  const desktopRender = () => {
    return (
      <FlexRow gap="46px">
        <FlexColumn as="section" alignmentX="flex-start" maxWidth="490px">
          <H2 as="h2" margin="0 0 48px 0">
            Center for Artificial Intelligence (C4AI)
          </H2>
          <Body as="p" margin="0 0 24px 0">
            <Medium as="span" display="inline">
              Gonito.net
            </Medium>{' '}
            belongs to the
            <Medium as="span" display="inline">
              &nbsp;Center for Artificial Intelligence (C4AI)&nbsp;
            </Medium>
            at Adam Mickiewicz University (UAM) which conducts research on the
            development of artificial intelligence, carries out scientific and
            research and development projects, integrates the research of
            scientists from various departments of Adam Mickiewicz University
            and outside it - from leading scientific centers in Poland and
            abroad as well as those employed in business entities.
          </Body>
          <Medium as="p">
            C4AI also cooperates with business entities in creating new
            solutions to be implemented in enterprises.
          </Medium>
        </FlexColumn>
        <Svg src={csiLogo} width="400px" height="242px" />
      </FlexRow>
    );
  };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

export default Csi;
