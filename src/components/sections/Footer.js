import React from "react";
import {Container, FlexRow} from "../../utils/containers";
import styled from "styled-components";
import {Medium} from "../../utils/fonts";
import {Link} from "react-router-dom";

const FooterStyle = styled(FlexRow)`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.green};

  * {
    color: ${({theme}) => theme.colors.white}
  }

  a {
    text-decoration: underline;
    cursor: pointer;
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
}

export default Footer;