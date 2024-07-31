import { ELEMENTS_PER_PAGE } from '../../../utils/globals';
import MiniChallenge from '../components/MiniChallenge';
import {H2New} from '../../../utils/fonts';
import {FlexColumn} from "../../../utils/containers";
import styled from "styled-components";


const renderChallenges = (pageNr, challenges) => {
  const RenderChallengeStyle = styled(FlexColumn)`
    .odd {
      background: #E0FFF4;
    }

    .even {
      background: #F5FFFD;
    }

`;
  const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
  if (challenges && challenges.length) {
    return (
        <RenderChallengeStyle>
          <FlexColumn>
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
                          participants
                        },
                        index
                    ) => {
                      const className = index % 2 === 0 ? 'even' : 'odd';
                      return (
                          <div className={className}>
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
                                participants={participants}
                            />
                          </div>
                      );
                    }
                )}
          </FlexColumn>
        </RenderChallengeStyle>
    );
  }
  return <H2New margin="72px 0">No results</H2New>;
};

export default renderChallenges;
