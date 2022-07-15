import {ELEMENTS_PER_PAGE} from "../../utils/globals";
import MiniChallenge from "../../components/sections/MiniChallenge";
import {Grid} from "../../utils/containers";
import styled from "styled-components";

const ChallengesGrid = styled(Grid)`
  margin: 32px 0;
  grid-gap: 32px 0;

  @media (min-width: 1200px) {
    margin: 96px 0;
    grid-gap: 64px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const _renderChallenges = (pageNr, challenges) => {
    const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
    return (
        <ChallengesGrid margin='32px 0' gridGap='32px 0'>
            {challenges.slice(n, n + ELEMENTS_PER_PAGE).map((challenge, index) => {
                return (
                    <MiniChallenge key={`challenge-${index}`} title={challenge.title} type={challenge.type}
                                   description={challenge.description} metric={challenge.mainMetric}
                                   bestScore={challenge.bestScore} baseline={challenge.baseline}
                                   prize={challenge.prize} deadline={challenge.deadline}
                                   name={challenge.name}/>
                );
            })}
        </ChallengesGrid>
    )
}

export default _renderChallenges;