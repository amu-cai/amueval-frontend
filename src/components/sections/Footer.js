import React from 'react';
import {Container, FlexRow} from '../../utils/containers';
import styled from 'styled-components';
import {Medium} from '../../utils/fonts';

const FooterStyle = styled(FlexRow)`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.green};
  z-index: 1000;
  position: relative;

  p, a {
    color: ${({theme}) => theme.colors.white}
  }

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({theme}) => theme.overMobile}) {
    height: 72px;
  }
`;

const Footer = () => {
    return (
        <FooterStyle as='footer'>
            <Medium as='p'>
                Read more about&nbsp;
                <Container as='a' display='inline' target='_blank'
                           href='https://wmi.amu.edu.pl/wiadomosci/wmi-w-mediach/centrum-sztucznej-inteligencji'>
                    CSI
                </Container>
            </Medium>
        </FooterStyle>
    );
};

export default Footer;