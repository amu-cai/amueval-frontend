import React from 'react';
import Media from 'react-media';
import theme from '../../../utils/theme';
import { FlexColumn } from '../../../utils/containers';
import { H2 } from '../../../utils/fonts';
import Table from '../Table';
import PropsTypes from 'prop-types';
import getChallengeLeaderboard from '../../../api/getChallengeLeaderboard';
import leaderboardSearchQueryHandler from './leaderboardSearchQueryHandler';
import {
  CALC_PAGES,
  EVALUATIONS_FORMAT,
  RENDER_WHEN,

} from '../../../utils/globals';
import Search from '../../generic/Search';
import Pager from '../../generic/Pager';
import Loading from '../../generic/Loading';

const Leaderboard = (props) => {
  const [entriesFromApi, setEntriesFromApi] = React.useState([]);
  const [entries, setEntries] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [submitterSorted, setSubmitterSorted] = React.useState(false);
  const [entriesSorted, setEntriesSorted] = React.useState(false);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [scoresSorted, setScoresSorted] = React.useState([]);

  React.useEffect(() => {
    challengeDataRequest(props.challengeName);
  }, [props.challengeName]);

  const challengeDataRequest = (challengeName) => {
    getChallengeLeaderboard(setEntriesFromApi, challengeName);
    getChallengeLeaderboard(setEntries, challengeName, setLoading);
  };

  const getMetricIndex = (metricName) => {
    let i = 0;
    for (let evaluation of entriesFromApi[0].evaluations) {
      if (`${evaluation.test.metric}.${evaluation.test.name}` === metricName) {
        return i;
      }
      i++;
    }
  };

  const searchQueryHandler = (event) => {
    leaderboardSearchQueryHandler(event, entriesFromApi, setPageNr, setEntries);
  };

  const getPossibleMetrics = () => {
    let metrics = [];
    for (let entry of entriesFromApi) {
      for (let evaluation of entry.evaluations) {
        let metric = evaluation.test.metric;
        let name = evaluation.test.name;
        if (metric && !metrics.includes(`${metric}.${name}`)) {
          metrics.push(`${metric}.${name}`);
        }
      }
    }
    return metrics;
  };

  const getLeaderboardHeader = () => {
    let header = ['#', 'submitter'];
    for (let metric of getPossibleMetrics()) {
      header.push(metric);
    }
    header.push('entries');
    header.push('when');
    return header;
  };

  const getLeaderboardHeaderMobile = () => {
    let header = ['#', 'submitter', 'entries', 'when'];
    for (let metric of getPossibleMetrics()) {
      header.push(metric);
    }
    return header;
  };

  const sortByUpdate = (elem) => {
    let metricIndex = 0;
    let newEntries = entries;
    switch (elem) {
      case 'submitter':
        if (submitterSorted) {
          newEntries = newEntries.sort((a, b) =>
            a.submitter.toLowerCase() < b.submitter.toLowerCase()
              ? 1
              : b.submitter.toLowerCase() < a.submitter.toLowerCase()
              ? -1
              : 0
          );
          setSubmitterSorted(false);
        } else {
          newEntries = newEntries.sort((a, b) =>
            a.submitter.toLowerCase() > b.submitter.toLowerCase()
              ? 1
              : b.submitter.toLowerCase() > a.submitter.toLowerCase()
              ? -1
              : 0
          );
          setSubmitterSorted(true);
        }
        break;
      case 'entries':
        if (entriesSorted) {
          newEntries = newEntries.sort((a, b) => b.times - a.times);
          setEntriesSorted(false);
        } else {
          newEntries = newEntries.sort((a, b) => a.times - b.times);
          setEntriesSorted(true);
        }
        break;
      case 'when':
        if (whenSorted) {
          newEntries = newEntries.sort((a, b) =>
            a.when < b.when ? 1 : b.when < a.when ? -1 : 0
          );
          setWhenSorted(false);
        } else {
          newEntries = newEntries.sort((a, b) =>
            a.when > b.when ? 1 : b.when > a.when ? -1 : 0
          );
          setWhenSorted(true);
        }
        break;
      default:
        metricIndex = getMetricIndex(elem);
        // eslint-disable-next-line no-case-declarations
        let newScoresSorted = scoresSorted;
        if (scoresSorted[metricIndex]) {
          newEntries = newEntries.sort(
            (a, b) =>
              b.evaluations[metricIndex].score -
              a.evaluations[metricIndex].score
          );
          newScoresSorted[metricIndex] = false;
          setScoresSorted(newScoresSorted);
        } else {
          newEntries = newEntries.sort(
            (a, b) =>
              a.evaluations[metricIndex].score -
              b.evaluations[metricIndex].score
          );
          newScoresSorted[metricIndex] = true;
          setScoresSorted(newScoresSorted);
        }
        break;
    }
    setEntries(newEntries);
  };

  const mobileRender = () => {
    return (
      <FlexColumn padding="24px 12px" width="70%" as="section" id="start">
        <H2 as="h2" margin="0 0 12px 0">
          Leaderboard
        </H2>
        {!loading ? (
          <>
            <Search searchQueryHandler={searchQueryHandler} />
            <Table
              challengeName={props.challengeName}
              headerElements={getLeaderboardHeaderMobile()}
              tableType="Leaderboard"
              gridTemplateColumns={
                entries[0]
                  ? '1fr 3fr ' +
                    '2fr '.repeat(entries[0].evaluations.length) +
                    '1fr 2fr'
                  : ''
              }
              user={props.user}
              staticColumnElements={[
                { name: 'id', format: null, order: 1, align: 'left' },
                { name: 'submitter', format: null, order: 2, align: 'left' },
                { name: 'times', format: null, order: 4, align: 'left' },
                { name: 'when', format: RENDER_WHEN, order: 5, align: 'right' },
              ]}
              metrics={getPossibleMetrics()}
              iterableColumnElement={{
                name: 'evaluations',
                format: EVALUATIONS_FORMAT,
                order: 3,
                align: 'left',
              }}
              pageNr={pageNr}
              elements={entries}
              sortByUpdate={sortByUpdate}
            />
            <Pager
              pageNr={pageNr}
              elements={entries}
              setPageNr={setPageNr}
              width="48px"
              borderRadius="64px"
              pages={CALC_PAGES(entries)}
              number={`${pageNr} / ${CALC_PAGES(entries)}`}
            />
          </>
        ) : (
          <Loading />
        )}
      </FlexColumn>
    );
  };

  const desktopRender = () => {
    return (
      <FlexColumn padding="24px" as="section" width="100%" maxWidth="1200px">
        <H2 as="h2" margin="0 0 32px 0">
          Leaderboard
        </H2>
        {!loading ? (
          <>
            <Search searchQueryHandler={searchQueryHandler} />
            <Table
              challengeName={props.challengeName}
              headerElements={getLeaderboardHeader()}
              gridTemplateColumns={
                entries[0]
                  ? '1fr 3fr ' +
                    '2fr '.repeat(entries[0].evaluations.length) +
                    '1fr 2fr'
                  : ''
              }
              user={props.user}
              staticColumnElements={[
                { name: 'id', format: null, order: 1, align: 'left' },
                { name: 'submitter', format: null, order: 2, align: 'left' },
                { name: 'times', format: null, order: 4, align: 'left' },
                { name: 'when', format: RENDER_WHEN, order: 5, align: 'right' },
              ]}
              metrics={getPossibleMetrics()}
              iterableColumnElement={{
                name: 'evaluations',
                format: EVALUATIONS_FORMAT,
                order: 3,
                align: 'left',
              }}
              pageNr={pageNr}
              elements={entries}
              setPageNr={setPageNr}
              sortByUpdate={sortByUpdate}
            />
            <Pager
              pageNr={pageNr}
              elements={entries}
              setPageNr={setPageNr}
              width="72px"
              borderRadius="64px"
              pages={CALC_PAGES(entries, 2)}
              
              number={`${pageNr} / ${CALC_PAGES(entries, 2)}`}
            />
          </>
        ) : (
          <Loading />
        )}
      </FlexColumn>
    );
  };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

Leaderboard.propsTypes = {
  challengeName: PropsTypes.string,
};

Leaderboard.defaultProps = {
  challengeName: '',
};

export default Leaderboard;
