import React from 'react';
import { H1 } from '../../../../utils/fonts';
import { Container, FlexRow, Svg } from '../../../../utils/containers';
import theme from '../../../../utils/theme';
import csiLogo from '../../../../assets/icons/csi_logo.svg';
import csiLogoContent from '../../../../assets/icons/csi_logo_content.svg';

import MadeByCsiStyle from './MadeByCsiStyle';

const MadeByCsi = (props) => {
  return (
    <MadeByCsiStyle
      as="a"
      horizontal={props.position}
      href="https://csi.amu.edu.pl/"
      target="_blank"
    >
      <H1
        as="span"
        fontSize={props.position === 'horizontal' ? '36px' : '44px'}
      >
        Made
        <Container as="span" display="inline" color={theme.colors.green}>
          &nbsp;by
        </Container>
      </H1>
      <FlexRow gap="20px" className="MadeByCsiStyle__logo-container">
        <Svg
          className="MadeByCsiStyle__csiLogo"
          width="154px"
          height="110px"
          size="cover"
          src={csiLogo}
        />
        <Svg width="220px" height="110px" src={csiLogoContent} />
      </FlexRow>
    </MadeByCsiStyle>
  );
};

export default MadeByCsi;
