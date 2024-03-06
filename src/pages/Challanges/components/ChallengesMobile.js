import React from 'react';
import ChallengesStyle from '../ChallengesStyle';
import { FlexColumn } from '../../../utils/containers';
import Pager from '../../../components/generic/Pager';
import { H1 } from '../../../utils/fonts';
import Search from '../../../components/generic/Search';
import { CALC_PAGES } from '../../../utils/globals';
import renderChallenges from '../functions/renderChallenges';
import Loading from '../../../components/generic/Loading';

const ChallengesMobile = (props) => {
  return (
    <>
      {props.filtersMenuRender(
        props.filtersMenu ? '0' : '100vw',
        props.filtersMenu ? '1' : '0',
        'flex'
      )}
      <ChallengesStyle as="main" id="start">
        <FlexColumn className="ChallengesStyle__page-container">
          <H1 as="h1">Challenges</H1>
          <Search
            searchQueryHandler={props.searchQueryHandler}
            filterButton
            toggleFiltersMenu={() => props.setFiltersMenu(!props.filtersMenu)}
          />
          <FlexColumn width="100%">
            <Loading visible={props.loading} />
            {renderChallenges(props.pageNr, props.challengesFiltered)}
          </FlexColumn>
        </FlexColumn>
        {!props.loading && (
          <Pager
            width="48px"
            borderRadius="64px"
            elements={props.challengesFiltered}
            pageNr={props.pageNr}
            setPage={props.setPage}
            pages={CALC_PAGES(props.challengesFiltered)}
            number={`${props.pageNr} / ${CALC_PAGES(props.challengesFiltered)}`}
          />
        )}
      </ChallengesStyle>
    </>
  );
};

export default ChallengesMobile;
