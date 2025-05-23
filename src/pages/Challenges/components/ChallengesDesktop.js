import React from "react";
import Loading from "../../../components/generic/Loading";
import Pager from "../../../components/generic/Pager";
import { FlexColumn, FlexRow } from "../../../utils/containers";
import { H1New } from "../../../utils/fonts";
import { CALC_PAGES } from "../../../utils/globals";
import ChallengesStyle from "../ChallengesStyle";
import Filters from "../Filters";
import renderChallenges from "../functions/renderChallenges";
// import amus from '../../../assets/amus.svg';

const ChallengesDesktop = (props) => {
  return (
    <>
      <ChallengesStyle as="main" id="start">
        {/*<FlexColumn className="amus">*/}
        {/*    <img src={amus} alt="Amuś"/>*/}
        {/*</FlexColumn>*/}
        <FlexRow>
          <FlexColumn>
            <FlexColumn>
              {props.yourChallenges ? (
                <H1New as="h1">Your Challenges</H1New>
              ) : (
                <H1New as="h1">Challenges</H1New>
              )}
              <FlexRow width="100%">
                <Filters
                  // searchQueryHandler={props.searchQueryHandler}
                  // filterByTypeHandler={props.filterByTypeHandler}
                  filtersHandler={props.filtersHandler}
                />
              </FlexRow>
              <FlexColumn>
                <Loading visible={props.loading} />
                {renderChallenges(
                  props.pageNr,
                  props.challengesToRender,
                  !!props.yourChallenges
                )}
              </FlexColumn>
            </FlexColumn>
            {!!(!props.loading && props.challengesToRender.length) && (
              <Pager
                pageNr={props.pageNr}
                setPageNr={props.setPageNr}
                elements={props.challengesToRender}
                pages={props.challengesToRender}
                width="72px"
                borderRadius="64px"
                currentPage={props.pageNr}
                totalPages={CALC_PAGES(props.challengesToRender)}
              />
            )}
          </FlexColumn>
        </FlexRow>
      </ChallengesStyle>
    </>
  );
};

export default ChallengesDesktop;
