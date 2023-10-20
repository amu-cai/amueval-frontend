import React from 'react';
import { FlexRow, Svg } from '../../utils/containers';
import CircleNumber from './CircleNumber';
import polygon from '../../assets/icons/polygon.svg';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { NEXT_PAGE, PREVIOUS_PAGE } from '../../utils/globals';

const PagerStyle = styled(FlexRow)`
  gap: 14px;

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    gap: 20px;
  }
`;

const LeftArrow = styled(Svg)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: ${({ backgroundColor }) =>
    backgroundColor === 'transparent' ? 'auto' : 'pointer'};
  width: 10px;
  height: 10px;
  transition: background-color, transform 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme, backgroundColor }) =>
      backgroundColor === 'transparent' ? 'transparent' : theme.colors.green};
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    width: 12px;
    height: 12px;
  }
`;

const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);

  &:hover,
  &:focus {
    background-color: ${({ theme, backgroundColor }) =>
      backgroundColor === 'transparent' ? 'transparent' : theme.colors.green};
    transform: scale(1.1) rotate(180deg);
  }
`;

const Pager = (props) => {
  const leftArrowVisible = () => {
    if (props.pageNr === 1) return 'transparent';
    return theme.colors.dark;
  };

  const rightArrowVisible = () => {
    if (props.pageNr === props.pages) return 'transparent';
    return theme.colors.dark;
  };

  return (
    <PagerStyle>
      <LeftArrow
        as="a"
        href="#start"
        src={polygon}
        onClick={() => PREVIOUS_PAGE(props.pageNr, props.setPageNr)}
        size="cover"
        backgroundColor={leftArrowVisible()}
      />
      <CircleNumber
        number={props.number}
        width={props.width}
        borderRadius={props.borderRadius}
      />
      <RightArrow
        as="a"
        href="#start"
        src={polygon}
        onClick={() => NEXT_PAGE(props.elements, props.pageNr, props.setPageNr)}
        size="cover"
        backgroundColor={rightArrowVisible()}
      />
    </PagerStyle>
  );
};

export default Pager;
