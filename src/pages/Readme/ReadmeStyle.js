import styled from 'styled-components';

const ReadmeStyle = styled.section`
  padding: 20px;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    gap: 64px;
  }

  /* .ReadmeStyle__content { */
  * {
    font-weight: inherit;
  }

  h2 {
    font-family: 'Kanit', sans-serif;
    margin: 32px 0;
  }

  h3 {
    font-family: 'Kanit', sans-serif;
    font-weight: inherit;
    font-size: 18px;
    line-height: 22px;
    margin: 24px 0;

    @media (min-width: ${({ theme }) => theme.overMobile}) {
      font-size: 22px;
      line-height: 26px;
    }
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;

    @media (min-width: ${({ theme }) => theme.overMobile}) {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;

    @media (min-width: ${({ theme }) => theme.overMobile}) {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
    }
  }
  /* } */
`;

export default ReadmeStyle;
