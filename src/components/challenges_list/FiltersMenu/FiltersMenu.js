import React from 'react';
import { FlexColumn, FlexRow, TransBack } from '../../../utils/containers';
import Button from '../../generic/Button';
import theme from '../../../utils/theme';
import styled from 'styled-components';
import FilterBy from '../FilterBy';
import filterOptions from './filterOptions';
import Media from 'react-media';
import CHALLENGES_ACTION from '../../../pages/Challanges/model/ChallengesActionEnum';

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
  const sortByHandler = (value) => {
    props.dispatch({ type: CHALLENGES_ACTION.SET_SORT_BY, payload: value });
  };

  const statusHandler = (value) => {
    props.dispatch({
      type: CHALLENGES_ACTION.SET_STATUS_FILTER,
      payload: value,
    });
  };

  const challengeTypeHandler = (value) => {
    props.dispatch({
      type: CHALLENGES_ACTION.SET_CHALLENGE_TYPE_FILTER,
      payload: value,
    });
  };

  const commercialHandler = (value) => {
    props.dispatch({
      type: CHALLENGES_ACTION.SET_COMMERCIAL_FILTER,
      payload: value,
    });
  };

  const resetHandler = () => {
    sortByHandler(0);
    statusHandler(0);
    challengeTypeHandler(0);
    commercialHandler(0);
  };

  return (
    <>
      <TransBack
        backgroundColor={theme.colors.dark03}
        translateX={props.translateX}
        opacity={props.opacity}
        onClick={() =>
          props.dispatch({ type: CHALLENGES_ACTION.TOGGLE_FILTERS_MENU })
        }
        display={props.transBackDisplay ? props.transBackDisplay : 'flex'}
      />
      <FiltersMenuStyle translateX={props.translateX} gap="16px">
        <FilterBy
          header="Sort by"
          options={filterOptions[0]}
          handler={sortByHandler}
          option={props.sortBy}
        />
        <FilterBy
          header="Status"
          options={filterOptions[1]}
          handler={statusHandler}
          option={props.status}
        />
        <FilterBy
          header="Challenge type"
          options={filterOptions[2]}
          handler={challengeTypeHandler}
          option={props.challengeTypeFilter}
        />
        <FilterBy
          header="Commercial"
          options={filterOptions[3]}
          handler={commercialHandler}
          option={props.commercialFilter}
        />
        <Media query={theme.mobile}>
          <FlexRow gap="16px" margin="14px 0 0 0">
            <Button
              width="64px"
              height="28px"
              handler={() =>
                props.dispatch({ type: CHALLENGES_ACTION.TOGGLE_FILTERS_MENU })
              }
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
