import React from 'react';
import { FlexColumn } from '../../../utils/containers';
import { H2 } from '../../../utils/fonts';
import getMyEntries from '../../../api/getMyEntries';
import Pager from '../../generic/Pager';
import {
  CALC_PAGES,
  EVALUATIONS_FORMAT,
  RENDER_WHEN,
} from '../../../utils/globals';
import Media from 'react-media';
import theme from '../../../utils/theme';
import Loading from '../../generic/Loading';
import Table from '../Table';
import myEntriesSearchQueryHandler from './myEntriesSearchQueryHandler';
import Search from '../../generic/Search';

const MyEntries = (props) => {
  const [myEntriesFromAPI, setMyEntriesFromAPI] = React.useState({});
  const [myEntriesAll, setMyEntriesAll] = React.useState({});
  const [myEntries, setMyEntries] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [pageNr, setPageNr] = React.useState(1);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [scoresSorted, setScoresSorted] = React.useState([]);

  React.useEffect(() => {
    challengesRequest();
    // eslint-disable-next-line
  }, []);

  const searchQueryHandler = (event) => {
    myEntriesSearchQueryHandler(event, myEntriesAll, setPageNr, setMyEntries);
  };

  const getPossibleMetrics = () => {
    let metrics = [];
    for (let test of myEntriesFromAPI.tests) {
      let myEval = `${test.metric}.${test.name}`;
      if (myEval && !metrics.includes(myEval)) {
        metrics.push(myEval);
      }
    }
    return metrics;
  };

  const nextPage = () => {
    if (pageNr !== CALC_PAGES(myEntries ? myEntries : [])) {
      let newPage = pageNr + 1;
      setPageNr(newPage);
    }
  };

  const previousPage = () => {
    if (pageNr !== 1) {
      let newPage = pageNr - 1;
      setPageNr(newPage);
    }
  };

  const getMyEntriesHeader = () => {
    let header = ['#'];
    for (let myEval of getPossibleMetrics()) {
      header.push(myEval);
    }
    header.push('when');
    return header;
  };

  const challengesRequest = () => {
    getMyEntries(
      props.challengeName,
      setMyEntriesFromAPI,
      setMyEntriesAll,
      setMyEntries,
      setLoading,
      setScoresSorted
    );
  };

  const mobileRender = () => {};

  const sortByUpdate = (elem, i) => {
    let newEntries = myEntries;
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
    setMyEntries(newEntries);
  };

  const desktopRender = () => {
    return (
      <FlexColumn padding="24px" as="section" width="100%" maxWidth="1400px">
        <H2 as="h2" margin="0 0 32px 0">
          My entries
        </H2>
        {myEntries && !loading ? (
          <>
            <Search searchQueryHandler={searchQueryHandler} />
            <Table
              challengeName={props.challengeName}
              headerElements={getMyEntriesHeader()}
              possibleMetrics={getPossibleMetrics()}
              gridTemplateColumns={
                '1fr ' + '4fr '.repeat(getMyEntriesHeader().length - 1)
              }
              staticColumnElements={[
                { name: 'id', format: null, order: 1, align: 'left' },
                { name: 'when', format: RENDER_WHEN, order: 3, align: 'right' },
              ]}
              iterableColumnElement={{
                name: 'evaluations',
                format: EVALUATIONS_FORMAT,
                order: 2,
                align: 'left',
              }}
              pageNr={pageNr}
              elements={myEntries}
              sortByUpdate={sortByUpdate}
            />
            <Pager
              pageNr={pageNr}
              width="72px"
              borderRadius="64px"
              pages={CALC_PAGES(myEntries, 2)}
              nextPage={nextPage}
              previousPage={previousPage}
              number={`${pageNr} / ${CALC_PAGES(myEntries, 2)}`}
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

export default MyEntries;
