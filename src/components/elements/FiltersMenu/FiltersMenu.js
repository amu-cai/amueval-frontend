import React from 'react';
import {FlexColumn, FlexRow, TransBack} from '../../../utils/containers';
import Button from '../Button';
import theme from '../../../utils/theme';
import styled from 'styled-components';
import FilterBy from '../../sections/FilterBy';
import filterOptions from './filterOptions';
import Media from 'react-media';
import PropsTypes from 'prop-types';

const FiltersMenuStyle = styled(FlexColumn)`
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: auto;
  width: 260px;
  height: 100vh;
  max-height: 650px;
  justify-content: flex-start;
  padding: 14px 16px 14px 24px;
  box-shadow: ${({theme}) => theme.shadowLeft};
  background-color: ${({theme}) => theme.colors.white};
  transition: transform 0.5s ease-in-out;
  z-index: 3;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({theme}) => theme.overMobile}) {
    width: 310px;
    max-height: none;
    top: 50px;
    right: auto;
    left: 0;
    box-shadow: ${({theme}) => theme.shadowRight};
    padding: 32px 32px 64px;
  }
`;

const FiltersMenu = (props) => {
    const resetHandler = () => {
        props.sortByHandler(0);
        props.statusHandler(0);
        props.challengeTypeHandler(0);
        props.commercialHandler(0);
    };

    return (
        <>
            <TransBack backgroundColor={theme.colors.dark03} translateX={props.translateX}
                       opacity={props.opacity} onClick={props.toggleFiltersMenu}
                       display={props.transBackDisplay ? props.transBackDisplay : 'flex'}/>
            <FiltersMenuStyle translateX={props.translateX} gap='16px'>
                <FilterBy header='Sort by' options={filterOptions[0]}
                          handler={props.sortByHandler} option={props.sortBy}/>
                <FilterBy header='Status' options={filterOptions[1]}
                          handler={props.statusHandler} option={props.status}/>
                <FilterBy header='Challenge type' options={filterOptions[2]}
                          handler={props.challengeTypeHandler} option={props.challengeType}/>
                <FilterBy header='Commercial' options={filterOptions[3]}
                          handler={props.commercialHandler} option={props.commercial}/>
                <Media query={theme.mobile}>
                    <FlexRow gap='16px' margin='14px 0 0 0'>
                        <Button width='64px' height='28px' handler={props.toggleFiltersMenu}>
                            Done
                        </Button>
                        <Button width='64px' height='28px' backgroundColor={theme.colors.dark} handler={resetHandler}>
                            Reset
                        </Button>
                    </FlexRow>
                </Media>
                <Media query={theme.desktop}>
                    <FlexRow margin='20px 0 0 0' width='94%' alignmentX='flex-start'>
                        <Button width='72px' height='34px' backgroundColor={theme.colors.green} handler={resetHandler}>
                            Reset
                        </Button>
                    </FlexRow>
                </Media>
            </FiltersMenuStyle>
        </>
    );
};

FiltersMenu.propTypes = {
    translateX: PropsTypes.string,
    opacity: PropsTypes.string,
    transBackDisplay: PropsTypes.string,
    toggleFiltersMenu: PropsTypes.func,
    sortByHandler: PropsTypes.func,
    statusHandler: PropsTypes.func,
    challengeTypeHandler: PropsTypes.func,
    commercialHandler: PropsTypes.func,
    sortBy: PropsTypes.number,
    status: PropsTypes.number,
    challengeType: PropsTypes.number,
    commercial: PropsTypes.number,
};

FiltersMenu.defaultProps = {
    translateX: '',
    opacity: '',
    transBackDisplay: 'flex',
    toggleFiltersMenu: null,
    sortByHandler: null,
    statusHandler: null,
    challengeTypeHandler: null,
    commercialHandler: null,
    sortBy: 0,
    status: 0,
    challengeType: 0,
    commercial: 0,
};

export default FiltersMenu;