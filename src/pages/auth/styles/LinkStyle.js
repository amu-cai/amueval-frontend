import styled from 'styled-components';
import { Medium } from '../../../utils/fonts';

const LinkStyle = styled(Medium)`
  cursor: pointer;
  color: ${({ theme, color }) => (color ? color : theme.colors.green)};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default LinkStyle;
