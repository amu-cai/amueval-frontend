import React from 'react';
import { FlexColumn, Grid } from '../../../utils/containers';
import { H2 } from '../../../utils/fonts';
import Placeholder from '../../../components/generic/Placeholder';
import styled from 'styled-components';

const PartnershipsStyle = styled(FlexColumn)`
  justify-content: flex-start;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    gap: 64px;

    .grid {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 64px;
    }
  }
`;

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
