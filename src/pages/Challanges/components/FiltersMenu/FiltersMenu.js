import React from 'react';
import { FlexColumn, FlexRow, TransBack } from '../../../../utils/containers';
import Button from '../../../../components/generic/Button';
import theme from '../../../../utils/theme';
import styled from 'styled-components';
import FilterBy from '../FilterBy';
import filterOptions from './filterOptions';
import Media from 'react-media';

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
  box-shadow: ${({ theme }) => theme.shadowLeft};
  background-color: ${({ theme }) => theme.colors.white};
  transition: transform 0.5s ease-in-out;
  z-index: 5;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.overMobile}) {
    width: 310px;
    max-height: none;
    top: 50px;
    right: auto;
    left: 0;
    box-shadow: ${({ theme }) => theme.shadowRight};
    padding: 32px 32px 64px;
  }
`;

const FiltersMenu = (props) => {
  const resetHandler = () => {
    props.setSortBy(0);
    props.setStatusFilter(0);
    props.setChallengeTypeFilter(0);
    props.setCommercialFilter(0);
  };

  return (
    <>
      <TransBack
        backgroundColor={theme.colors.dark03}
        translateX={props.translateX}
        opacity={props.opacity}
        onClick={() => props.setFiltersMenu(!props.filtersMenu)}
        display={props.transBackDisplay ? props.transBackDisplay : 'flex'}
      />
      <FiltersMenuStyle translateX={props.translateX} gap="16px">
        <FilterBy
          header="Sort by"
          options={filterOptions[0]}
          handler={props.setSortBy}
          option={props.sortBy}
        />
        <FilterBy
          header="Status"
          options={filterOptions[1]}
          handler={props.setStatusFilter}
          option={props.status}
        />
        <FilterBy
          header="Challenge type"
          options={filterOptions[2]}
          handler={props.setChallengeTypeFilter}
          option={props.challengeTypeFilter}
        />
        <FilterBy
          header="Commercial"
          options={filterOptions[3]}
          handler={props.setCommercialFilter}
          option={props.commercialFilter}
        />
        <Media query={theme.mobile}>
          <FlexRow gap="16px" margin="14px 0 0 0">
            <Button
              width="64px"
              height="28px"
              handler={() => props.setFiltersMenu(!props.filtersMenu)}
            >
              Done
            </Button>
            <Button
              width="64px"
              height="28px"
              backgroundColor={theme.colors.dark}
              handler={resetHandler}
            >
              Reset
            </Button>
          </FlexRow>
        </Media>
        <Media query={theme.desktop}>
          <FlexRow margin="8px 0 0 0" width="94%" alignmentX="flex-start">
            <Button
              width="72px"
              height="34px"
              backgroundColor={theme.colors.green}
              handler={resetHandler}
            >
              Reset
            </Button>
          </FlexRow>
        </Media>
      </FiltersMenuStyle>
    </>
  );
};

export default FiltersMenu;
