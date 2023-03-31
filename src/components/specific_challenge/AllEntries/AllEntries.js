import React from 'react';
import theme from '../../../utils/theme';
import Media from 'react-media';
import { FlexColumn } from '../../../utils/containers';
import { H2 } from '../../../utils/fonts';
import {
  // CALC_PAGES,
  EVALUATIONS_FORMAT,
  RENDER_WHEN,
} from '../../../utils/globals';
import Loading from '../../generic/Loading';
import Pager from '../../generic/Pager';
import Table from '../Table';
import Search from '../../generic/Search';
import allEntriesSearchQueryHandler from './allEntriesSearchQueryHandler';
import getAllEntries from '../../../api/getAllEntries';

const AllEntries = (props) => {
  const [entriesFromApi, setEntriesFromApi] = React.useState([]);
  const [entries, setEntries] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  // const [submitterSorted, setSubmitterSorted] = React.useState(false);
  // const [entriesSorted, setEntriesSorted] = React.useState(false);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [scoresSorted, setScoresSorted] = React.useState([]);

  React.useEffect(() => {
    challengeDataRequest(props.challengeName);
  }, [props.challengeName]);

  const challengeDataRequest = (challengeName) => {
    getAllEntries(setEntriesFromApi, challengeName);
    getAllEntries(setEntries, challengeName, setLoading);
  };

  const getPossibleMetrics = () => {
    let metrics = [];
    // for (let test of entriesFromApi.tests) {
    //   let myEval = `${test.metric}.${test.name}`;
    //   if (myEval && !metrics.includes(myEval)) {
    //     metrics.push(myEval);
    //   }
    // }
    return metrics;
  };

  const getAllEntriesHeader = () => {
    let header = ['#', 'submitter'];
    for (let metric of getPossibleMetrics()) {
      header.push(metric);
    }
    header.push('entries');
    header.push('when');
    return header;
  };

  const searchQueryHandler = (event) => {
    allEntriesSearchQueryHandler(event, entriesFromApi, setPageNr, setEntries);
  };

  const nextPage = () => {
    // if (pageNr !== CALC_PAGES(entries ? entries : [])) {
    //   let newPage = pageNr + 1;
    //   setPageNr(newPage);
    // }
  };

  const previousPage = () => {
    if (pageNr !== 1) {
      let newPage = pageNr - 1;
      setPageNr(newPage);
    }
  };

  const sortByUpdate = (elem, i) => {
    let newEntries = entries;
    switch (elem) {
      case '#':
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
        // eslint-disable-next-line no-case-declarations
        let metricIndex = getPossibleMetrics().indexOf(elem);
        // eslint-disable-next-line no-case-declarations
        let newScoresSorted = scoresSorted;
        if (scoresSorted[metricIndex]) {
          newEntries = newEntries.sort(
            (a, b) =>
              (b.evaluations ? b.evaluations[elem] : -1) -
              (a.evaluations ? a.evaluations[elem] : -1)
          );
          newScoresSorted[metricIndex] = false;
          setScoresSorted(newScoresSorted);
        } else {
          newEntries = newEntries.sort(
            (a, b) =>
              (a.evaluations ? a.evaluations[elem] : -1) -
              (b.evaluations ? b.evaluations[elem] : -1)
          );
          newScoresSorted[metricIndex] = true;
          setScoresSorted(newScoresSorted);
        }
        break;
    }
    setEntries(newEntries);
  };

  const mobileRender = () => {
    return <></>;
  };

  const desktopRender = () => {
    return (
      <FlexColumn padding="24px" as="section" width="100%" maxWidth="1200px">
        <H2 as="h2" margin="0 0 32px 0">
          All Entries
        </H2>
        {!loading ? (
          <>
            <Search searchQueryHandler={searchQueryHandler} />
            <Table
              challengeName={props.challengeName}
              headerElements={getAllEntriesHeader()}
              // gridTemplateColumns={
              //   entries[0]
              //     ? '1fr 3fr ' +
              //       '2fr '.repeat(entries[0].evaluations.length) +
              //       '1fr 2fr'
              //     : ''
              // }
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
              elements={[]}
              sortByUpdate={sortByUpdate}
            />
            <Pager
              pageNr={pageNr}
              width="72px"
              borderRadius="64px"
              pages={2} //CALC_PAGES(entries, 2)
              nextPage={nextPage}
              previousPage={previousPage}
              number={1} //`${pageNr} / ${CALC_PAGES(entries, 2)}`}
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

export default AllEntries;
