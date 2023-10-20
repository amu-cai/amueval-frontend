import React from 'react';
import ChallengesStyle from '../ChallengesStyle';
import { FlexColumn, FlexRow } from '../../../utils/containers';
import Pager from '../../../components/generic/Pager';
import { H1, Body } from '../../../utils/fonts';
import Search from '../../../components/generic/Search';
import { CALC_PAGES } from '../../../utils/globals';
import renderChallenges from '../functions/renderChallenges';
import Loading from '../../../components/generic/Loading';
import cupIco from '../../../assets/icons/cup_ico.svg';
import { Svg } from '../../../utils/containers';

const ChallengesDesktop = (props) => {
  return (
    <>
      {props.filtersMenuRender()}
      <ChallengesStyle as="main" id="start">
        <FlexColumn className="ChallengesStyle__page-container">
          <FlexRow className="ChallengesStyle__page-header-container">
            <FlexColumn className="ChallengesStyle__page-header">
              <H1 as="h1">Challenges</H1>
              <Body className="ChallengesStyle__header-content">
                Increase your machine learning skills by competing in our
                exciting challenges.
              </Body>
              <Search searchQueryHandler={props.searchQueryHandler} />
            </FlexColumn>
            <Svg src={cupIco} className="ChallengesStyle__main-image" />
          </FlexRow>
          <FlexColumn width="100%">
            <Loading visible={props.loading} />
            {renderChallenges(props.pageNr, props.challengesFiltered)}
          </FlexColumn>
        </FlexColumn>
        {!props.loading && (
          <Pager
            pageNr={props.pageNr}
            setPageNr={props.setPageNr}
            elements={props.challengesFiltered}
            pages={CALC_PAGES(props.challengesFiltered)}
            width="72px"
            borderRadius="64px"
            number={`${props.pageNr} / ${CALC_PAGES(props.challengesFiltered)}`}
          />
        )}
      </ChallengesStyle>
    </>
  );
};

export default ChallengesDesktop;
