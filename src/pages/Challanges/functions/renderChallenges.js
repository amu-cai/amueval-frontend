import { ELEMENTS_PER_PAGE } from '../../../utils/globals';
import MiniChallenge from '../components/MiniChallenge';
import { Grid } from '../../../utils/containers';
import styled from 'styled-components';
import { Medium } from '../../../utils/fonts';

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

const renderChallenges = (pageNr, challenges) => {
  const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
  if (challenges && challenges.length) {
    console.log(challenges);
    return (
      <ChallengesGrid margin="32px 0" gridGap="32px 0">
        {challenges
          .slice(n, n + ELEMENTS_PER_PAGE)
          .map(
            (
              {
                title,
                type,
                description,
                mainMetric,
                bestScore,
                baseline,
                award,
                deadline,
                name,
              },
              index
            ) => {
              return (
                <MiniChallenge
                  key={`challenge-${index}`}
                  title={title}
                  type={type}
                  description={description}
                  metric={mainMetric}
                  bestScore={bestScore}
                  baseline={baseline}
                  award={award}
                  deadline={deadline}
                  name={name}
                />
              );
            }
          )}
      </ChallengesGrid>
    );
  }
  return <Medium margin="72px 0">No results</Medium>;
};

export default renderChallenges;
