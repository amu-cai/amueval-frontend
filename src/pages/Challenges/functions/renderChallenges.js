import styled from "styled-components";
import { FlexColumn } from "../../../utils/containers";
import { H2New } from "../../../utils/fonts";
import { ELEMENTS_PER_PAGE } from "../../../utils/globals";
import MiniChallenge from "../components/MiniChallenge";

const renderChallenges = (pageNr, challenges, isOwn = false) => {
  const RenderChallengeStyle = styled(FlexColumn)`
    .odd {
      background: #e0fff4;
    }

    .even {
      background: #f5fffd;
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
                  main_metric,
                  bestScore,
                  baseline,
                  award,
                  deadline,
                  name,
                  participants,
                },
                index
              ) => {
                const className = index % 2 === 0 ? "even" : "odd";
                return (
                  <div className={className}>
                    <MiniChallenge
                      key={`challenge-${index}`}
                      title={title}
                      type={type}
                      description={description}
                      main_metric={main_metric}
                      bestScore={bestScore}
                      baseline={baseline}
                      award={award}
                      deadline={deadline}
                      name={name}
                      participants={participants}
                      isOwn={isOwn}
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
