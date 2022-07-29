import React from 'react';
import styled from 'styled-components';
import {FlexRow} from '../../utils/containers';
import PropsTypes from 'prop-types';

const FilterStyle = styled(FlexRow)`
  width: fit-content;
  height: 36px;
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid ${({theme}) => theme.colors.dark};
  box-shadow: ${({theme}) => theme.shadow};
  cursor: pointer;
  background-color: ${({theme, active}) => active ? theme.colors.dark : theme.colors.white};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  p {
    color: ${({theme, active}) => active ? theme.colors.white : theme.colors.dark};
  }

  span {
    background-color: ${({theme, active}) => active ? theme.colors.white : theme.colors.dark};
  }

  * {
    cursor: pointer;
  }
`;

const Filter = (props) => {
    const onCheckHandler = (e) => {
        if (e.target.checked)
            props.handler(Number(e.target.value));
    };

    return (
        <>
            <FilterStyle as='label' htmlFor={props.id}
                         active={props.option === props.index}>
                {props.children}
            </FilterStyle>
            <FlexRow display='none' as='input' type='radio' value={props.index}
                     id={props.id} name={props.name} onChange={(e) => onCheckHandler(e)}/>
        </>
    );
};

Filter.propTypes = {
    index: PropsTypes.number.isRequired,
    option: PropsTypes.number.isRequired,
    handler: PropsTypes.func,
    id: PropsTypes.string.isRequired,
    name: PropsTypes.string.isRequired,
    children: PropsTypes.node,
};

Filter.defaultProps = {
    handler: null,
    children: '',
};

export default Filter;