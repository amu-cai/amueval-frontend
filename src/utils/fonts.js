import styled from 'styled-components';
import {Container} from './containers';

const H1 = styled(Container)`
  display: inline-block;
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 48px;
    line-height: 52px;
  }
`;

const H2 = styled(H1)`
  font-size: 20px;
  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 32px;
    line-height: 36px;
  }
`;

const H3 = styled(H1)`
  font-size: 18px;
  line-height: 22px;
  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 24px;
    line-height: 26px;
  }
`;

const Body = styled(Container)`
  display: inline-block;
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

const Medium = styled(Body)`
  font-weight: 400;
  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-weight: 500;
  }
`;

const Menu = styled(Container)`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

const Label = styled(Menu)`
  display: inline-block;
  font-weight: 300;
  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 22px;
    line-height: 24px;
  }
`;

const Code = styled(Container)`
  display: inline-block;
  font-family: 'Ubuntu', sans-serif;
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
  color: ${({theme}) => theme.colors.white};

  &:before {
    display: ${({before}) => before ? 'inline-block' : 'none'};
    content: '~$';
    color: ${({theme}) => theme.colors.green};
    font-weight: 400;
    margin: 0 4px 0 0;
    @media (min-width: ${({theme}) => theme.overMobile}) {
      font-weight: 500;
    }
  }

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
`;

const CodeMedium = styled(Code)`
  color: ${({theme}) => theme.colors.green};
  font-weight: 400;
  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-weight: 500;
  }
`;

export {H1, H2, H3, Body, Medium, Menu, Label, Code, CodeMedium};