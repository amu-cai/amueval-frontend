import {ELEMENTS_PER_PAGE} from "../../utils/globals";
import MiniChallenge from "../../components/elements/MiniChallenge";

const _renderChallenges = (pageNr, challenges) => {
    const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
    return (
        challenges.slice(n, n + ELEMENTS_PER_PAGE).map((challenge, index) => {
            return (
                <MiniChallenge key={`challenge-${index}`} title={challenge.title} type={challenge.type}
                               description={challenge.description} metric={challenge.mainMetric}
                               bestScore={challenge.bestScore} baseline={challenge.baseline}
                               prize={challenge.prize} deadline={challenge.deadline}/>
            );
        })
    )
}

export default _renderChallenges;