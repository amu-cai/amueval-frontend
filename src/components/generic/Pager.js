import React from 'react';
import { FlexRow, Svg } from '../../utils/containers';
import CircleNumber from './CircleNumber';
import polygon from '../../assets/polygon.svg';
import doubleArrow from '../../assets/double_arrow.svg';
import styled from 'styled-components';
import theme from '../../utils/theme';
import PropsTypes from 'prop-types';
import { NEXT_PAGE, PREVIOUS_PAGE, FIRST_PAGE, LAST_PAGE } from '../../utils/globals';


const PagerStyle = styled(FlexRow)`
  gap: 14px;

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    gap: 20px;
  }
`;

const LeftArrow = styled(Svg)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: ${({ backgroundColor }) => (backgroundColor === 'transparent') ? 'auto' : 'pointer'};
  width: 10px;
  height: 10px;
  transition: background-color, transform 0.3s ease-in-out;

  &:hover, &:focus {
    background-color: ${({
  theme,
  backgroundColor
}) => (backgroundColor === 'transparent') ? 'transparent' : theme.colors.green};
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    width: 12px;
    height: 12px;
  }
`;

const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);

  &:hover, &:focus {
    background-color: ${({
  theme,
  backgroundColor
}) => (backgroundColor === 'transparent') ? 'transparent' : theme.colors.green};
    transform: scale(1.1) rotate(180deg);
  }
`;

const BegginingArrow = styled(LeftArrow)`
transform: rotate(180deg);
width: 32px; 


  &:hover, &:focus {
    background-color: ${({
  theme,
  backgroundColor
}) => (backgroundColor === 'transparent') ? 'transparent' : theme.colors.green};
    transform: scale(1.1) rotate(180deg);
  }
`;

const EndArrow = styled(LeftArrow)`
width: 32px;

 

  &:hover, &:focus {
    background-color: ${({
  theme,
  backgroundColor
}) => (backgroundColor === 'transparent') ? 'transparent' : theme.colors.green};
    transform: scale(1.1) ;
  }
`;

const Pager = (props) => {
  const leftArrowVisible = () => {
    if (props.pageNr === 1)
      return 'transparent';
    return theme.colors.dark;
  };

  const rightArrowVisible = () => {
    if (props.pageNr === props.pages)
      return 'transparent';
    return theme.colors.dark;
  };

  const begginingArrowVisible = () => {
    if (props.pageNr === 1)
      return 'transparent';
    return theme.colors.dark;
  };

  const endArrowVisible = () => {
    if (props.pageNr === props.pages)
      return 'transparent';
    return theme.colors.dark;
  };

  return (
    <PagerStyle>
      <BegginingArrow as='a' href='#start' src={doubleArrow} onClick={() => FIRST_PAGE(props.pageNr, props.setPageNr)} size='cover'
        backgroundColor={begginingArrowVisible()} />
      <LeftArrow as='a' href='#start' src={polygon} onClick={() => PREVIOUS_PAGE(props.pageNr, props.setPageNr)} size='cover'
        backgroundColor={leftArrowVisible()} />
      <CircleNumber number={props.number} width={props.width} borderRadius={props.borderRadius} />
      <RightArrow as='a' href='#start' src={polygon} onClick={() => NEXT_PAGE(props.elements, props.pageNr, props.setPageNr)} size='cover'
        backgroundColor={rightArrowVisible()} />
      <EndArrow as='a' href='#start' src={doubleArrow} onClick={() => LAST_PAGE(props.elements, props.pageNr, props.setPageNr)} size='cover'
        backgroundColor={endArrowVisible()} />
    </PagerStyle>
  );
};

Pager.propTypes = {
  previousPage: PropsTypes.func,
  pageNr: PropsTypes.number,
  nextPage: PropsTypes.func,
  pages: PropsTypes.number,
  number: PropsTypes.string,
  width: PropsTypes.string,
  borderRadius: PropsTypes.string
};

Pager.defaultProps = {
  previousPage: null,
  pageNr: 1,
  nextPage: null,
  pages: 1,
  number: '',
  width: null,
  borderRadius: null
};

export default Pager;