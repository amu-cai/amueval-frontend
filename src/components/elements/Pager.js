import React from 'react';
import {FlexRow, Svg} from '../../utils/containers';
import CircleNumber from './CircleNumber';
import polygon from '../../assets/polygon.svg';
import styled from 'styled-components';
import theme from '../../utils/theme';
import PropsTypes from 'prop-types';

const PagerStyle = styled(FlexRow)`
  gap: 14px;

  @media (min-width: ${({theme}) => theme.overMobile}) {
    gap: 20px;
  }
`;

const LeftArrow = styled(Svg)`
  background-color: ${({backgroundColor}) => backgroundColor};
  cursor: ${({backgroundColor}) => (backgroundColor === 'transparent') ? 'auto' : 'pointer'};
  width: 10px;
  height: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: ${({theme}) => theme.overMobile}) {
    width: 12px;
    height: 12px;
  }
`;

const RightArrow = styled(Svg)`
  background-color: ${({backgroundColor}) => backgroundColor};
  transform: rotate(180deg);
  cursor: ${({backgroundColor}) => (backgroundColor === 'transparent') ? 'auto' : 'pointer'};
  width: 10px;
  height: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(180deg) scale(1.1);
  }

  @media (min-width: ${({theme}) => theme.overMobile}) {
    width: 12px;
    height: 12px;
  }
`;

const Pager = (props) => {
    if (props.visible) {
        return (
            <PagerStyle>
                <LeftArrow as='button' src={polygon} onClick={props.previousPage} size='cover'
                           backgroundColor={(props.pageNr === 1) ? 'transparent' : theme.colors.dark}/>
                <CircleNumber number={props.number} width={props.width} borderRadius={props.borderRadius}/>
                <RightArrow as='button' src={polygon} onClick={props.nextPage} size='cover'
                            backgroundColor={(props.pageNr === props.pages)
                                ? 'transparent' : theme.colors.dark}/>
            </PagerStyle>
        );
    }
    return '';
};

Pager.propTypes = {
    visible: PropsTypes.bool,
    previousPage: PropsTypes.func,
    pageNr: PropsTypes.number,
    nextPage: PropsTypes.func,
    pages: PropsTypes.number,
    number: PropsTypes.string,
    width: PropsTypes.string,
    borderRadius: PropsTypes.string
};

Pager.defaultProps = {
    visible: false,
    previousPage: null,
    pageNr: 1,
    nextPage: null,
    pages: 1,
    number: '',
    width: null,
    borderRadius: null
};

export default Pager;