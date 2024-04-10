import styled from 'styled-components';
import { Container } from './containers';
import theme from "./theme";

const H1 = styled(Container)`
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
  margin-right: ${({ textLeft }) => (textLeft ? 'auto' : 'none')};
  @media (${theme.mobile}) {
   font-size: ${({ fontSize }) => (fontSize ? fontSize : '30px')};
  }
  @media (${theme.tablet}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '40px')};
  }
  @media (${theme.desktop}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '60px')};
  }
`;

const Body = styled(Container)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-decoration: ${({ underlineText }) => (underlineText ? 'underline' : 'none')};
  @media (${theme.mobile}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};  
    line-height: 24px;
  }
  @media (${theme.tablet}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '19px')};
    line-height: 30px;
  }
  @media (${theme.desktop}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '22px')};
    line-height: 30px;
  }
`;


const H2 = styled(H1)`
  margin-bottom: 32px;
  @media (${theme.mobile}) {
   font-size: ${({ fontSize }) => (fontSize ? fontSize : '24px')};
  }
  @media (${theme.tablet}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '32px')};
  }
  @media (${theme.desktop}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '40px')};
  }
`;

const H3 = styled(H1)`
  font-size: 18px;
  line-height: 22px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-size: 24px;
    line-height: 26px;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '24px')};
  }
`;

const Medium = styled(Body)`
  @media (${theme.mobile}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '20px')};
    line-height: 24px;
  }
  @media (${theme.tablet}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '25px')};
    line-height: 30px;
  }
  @media (${theme.desktop}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '34px')};
    line-height: 40px;
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
  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-size: 22px;
    line-height: 24px;
    font-weight: 400;
  }
`;

const Code = styled(Container)`
  display: inline-block;
  font-family: 'Ubuntu', sans-serif;
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  max-width: 600px;
  overflow-wrap: break-word;

  &:before {
    display: ${({ before }) => (before ? 'inline-block' : 'none')};
    content: '~$';
    color: ${({ theme }) => theme.colors.green};
    font-weight: 400;
    margin: 0 4px 0 0;
    @media (min-width: ${({ theme }) => theme.overMobile}) {
      font-weight: 500;
    }
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
`;

const CodeMedium = styled(Code)`
  color: ${({ theme }) => theme.colors.green};
  font-weight: 400;
  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-weight: 500;
  }
`;

export { H1, H2, H3, Body, Medium, Menu, Label, Code, CodeMedium };
