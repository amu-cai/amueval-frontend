import styled from 'styled-components';
import {Container} from './containers';

const H1 = styled(Container)`
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 48px;
    line-height: 52px;
  }
`;

const H2 = styled(Container)`
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 32px;
    line-height: 36px;
  }
`;

const H3 = styled(Container)`
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 24px;
    line-height: 26px;
  }
`;

const Body = styled(Container)`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

const Medium = styled(Container)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
  }
`;

const Menu = styled(Container)`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

const Label = styled(Menu)`
  font-weight: 300;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 22px;
    line-height: 24px;
  }
`;

export {H1, H2, H3, Body, Medium, Menu, Label};