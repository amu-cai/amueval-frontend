import React from "react";
import {FlexColumn, FlexRow, Grid} from "../../../utils/containers";
import getChallengeSubmissions from "../../../api/getChallengeSubmissions";
import {H3, Medium} from "../../../utils/fonts";
import _renderSubmissions from "./_renderSubmissions";
import Pager from "../Pager";
import {CALC_PAGES} from "../../../utils/globals";
import Media from "react-media";
import theme from "../../../utils/theme";

const Table = (props) => {
    const headerElements = ['#', 'submitter', 'when', 'result', 'entries'];
    const [challengeData, setChallengeData] = React.useState({});
    const [pageNr, setPageNr] = React.useState(1);

    React.useEffect(() => {
        challengeDataRequest();
    });

    const challengeDataRequest = () => {
        getChallengeSubmissions(setChallengeData, props.challengeName);
    }

    const renderSubmissions = () => {
        return _renderSubmissions(pageNr, challengeData.submissions
            ? challengeData.submissions : []);
    }

    const nextPage = () => {
        if (pageNr !== CALC_PAGES(challengeData.submissions ? challengeData.submissions : [])) {
            let newPage = pageNr + 1;
            setPageNr(newPage);
        }
    }

    const previousPage = () => {
        if (pageNr !== 1) {
            let newPage = pageNr - 1;
            setPageNr(newPage);
        }
    }

    const mobileRender = () => {
        return (
            <FlexColumn as='table' margin='0 0 32px 0' minHeight='380px'>
                <Grid as='thead' gridTemplateColumns='1fr 3fr 3fr 1fr 1fr'
                      gridGap='10px' width='100%'>
                    {headerElements.map((elem, index) => {
                        return (
                            <FlexRow as='tr' key={`leaderboard-header-${index}`}
                                     alignmentX={elem === 'entries' ? 'flex-end' : 'flex-start'}>
                                <Medium as='th'>{elem}</Medium>
                            </FlexRow>
                        )
                    })}
                </Grid>
                {renderSubmissions()}
            </FlexColumn>

        );
    }

    const desktopRender = () => {
        return (
            <FlexColumn as='table' margin='0 0 72px 0' minHeight='438px'>
                <Grid as='thead' gridTemplateColumns='1fr 3fr 3fr 1fr 1fr'
                      gridGap='10px' width='100%' margin='0 0 28px 0'>
                    {headerElements.map((elem, index) => {
                        return (
                            <FlexRow as='tr' key={`leaderboard-header-${index}`}
                                     alignmentX={elem === 'entries' ? 'flex-end' : 'flex-start'}>
                                <H3 as='th'>{elem}</H3>
                            </FlexRow>
                        )
                    })}
                </Grid>
                {renderSubmissions()}
            </FlexColumn>
        );
    }

    return (
        <>
            <Media query={theme.mobile}>
                {mobileRender()}
            </Media>
            <Media query={theme.desktop}>
                {desktopRender()}
            </Media>
            <Pager pageNr={pageNr} nextPage={nextPage} previousPage={previousPage}
                   pages={CALC_PAGES(challengeData.submissions ? challengeData.submissions : [])}/>
        </>
    );
}

export default Table;