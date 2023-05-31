import React from 'react';
import { FlexColumn, Grid } from '../../../../utils/containers';
import { H2 } from '../../../../utils/fonts';
import Placeholder from '../../../../components/generic/Placeholder';
import PartnershipsStyle from './PartnershipsStyle';

const Partnerships = () => {
  return (
    <PartnershipsStyle as="section">
      <H2 as="h2">Our partnerships</H2>
      <FlexColumn width="100%">
        <Grid className="grid" gridGap="32px 0">
          <Placeholder>allegro</Placeholder>
          <Placeholder>pons</Placeholder>
          <Placeholder>samsung</Placeholder>
          <Placeholder>domdata</Placeholder>
          <Placeholder>pwn.pl</Placeholder>
          <Placeholder>cararena.pl</Placeholder>
        </Grid>
      </FlexColumn>
    </PartnershipsStyle>
  );
};

export default Partnerships;
