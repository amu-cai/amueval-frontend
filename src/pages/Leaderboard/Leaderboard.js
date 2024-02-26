import React from 'react';
import { Container, FlexColumn } from '../../utils/containers';
import { H2, Medium } from '../../utils/fonts';
import Pager from '../../components/generic/Pager';
import Search from '../../components/generic/Search';
import Table from '../../components/generic/Table';
import Loading from '../../components/generic/Loading';
import { CALC_PAGES, ELEMENTS_PER_PAGE } from '../../utils/globals';
import orderKeys from './orderKeys';
import leaderboardSearchQueryHandler from './leaderboardSearchQueryHandler';
import getLeaderboard from '../../api/getLeaderboard';

const Leaderboard = (props) => {
  const [entries, setEntries] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [idSorted, setIdSorted] = React.useState([]);
  const [scoresSorted, setScoresSorted] = React.useState([]);
  const [submitterSorted, setSubmitterSorted] = React.useState(false);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [entriesAll, setEntriesAll] = React.useState(null);

  const n = (pageNr - 1) * (ELEMENTS_PER_PAGE * 2);

  let elements = entries?.map((item) => {
    return {
      ...item,
      [`dev_${props.mainMetric}`]: parseFloat(item.dev_result).toFixed(5),
      [`test_${props.mainMetric}`]: parseFloat(item.test_result).toFixed(5),
    };
  });
  elements = elements?.slice(n, n + ELEMENTS_PER_PAGE * 2);

  React.useEffect(() => {
    if (props.challengeName) {
      getLeaderboard(props.challengeName, setEntriesAll, setLoading);
    }
  }, [props.challengeName]);

  React.useEffect(() => {
    if (!entries?.length) {
      setEntries(entriesAll);
    }
  }, [entriesAll, entries]);

  const sortByUpdate = React.useCallback(
    (elem) => {
      let newEntries = elements.slice();
      const possibleMetrics = orderKeys(elements[0]).filter(
        (key) => !['id', 'submitter', 'when'].includes(key)
      );
      let metricIndex = possibleMetrics.indexOf(elem);
      let newScoresSorted = scoresSorted.slice();
      switch (elem) {
        case 'id':
          if (idSorted) {
            setIdSorted(false);
            newEntries = newEntries.sort((a, b) =>
              a.id > b.id ? 1 : b.id > a.id ? -1 : 0
            );
          } else {
            setIdSorted(true);
            newEntries = newEntries.sort((a, b) =>
              a.id < b.id ? 1 : b.id < a.id ? -1 : 0
            );
          }
          break;
        case 'submitter':
          if (submitterSorted) {
            setSubmitterSorted(false);
            newEntries = newEntries.sort((a, b) =>
              a.submitter.toLowerCase() < b.submitter.toLowerCase()
                ? 1
                : b.submitter.toLowerCase() < a.submitter.toLowerCase()
                ? -1
                : 0
            );
          } else {
            setSubmitterSorted(true);
            newEntries = newEntries.sort((a, b) =>
              a.submitter.toLowerCase() > b.submitter.toLowerCase()
                ? 1
                : b.submitter.toLowerCase() > a.submitter.toLowerCase()
                ? -1
                : 0
            );
          }
          break;
        case 'when':
          if (whenSorted) {
            setWhenSorted(false);
            newEntries = newEntries.sort((a, b) =>
              a.when < b.when ? 1 : b.when < a.when ? -1 : 0
            );
          } else {
            setWhenSorted(true);
            newEntries = newEntries.sort((a, b) =>
              a.when > b.when ? 1 : b.when > a.when ? -1 : 0
            );
          }
          break;
        default:
          if (scoresSorted[metricIndex]) {
            newEntries = newEntries.sort(
              (a, b) => (b ? b[elem] : -1) - (a ? a[elem] : -1)
            );
            newScoresSorted[metricIndex] = false;
            setScoresSorted(newScoresSorted);
          } else {
            newEntries = newEntries.sort(
              (a, b) => (a ? a[elem] : -1) - (b ? b[elem] : -1)
            );
            newScoresSorted[metricIndex] = true;
            setScoresSorted(newScoresSorted);
          }
          break;
      }
      setEntries(newEntries);
    },
    [elements, idSorted, scoresSorted, submitterSorted, whenSorted]
  );

  const leaderboardRender = () => {
    const tableNotEmpty = elements?.length;
    if (!loading) {
      if (tableNotEmpty) {
        return (
          <>
            <Search
              searchQueryHandler={(event) =>
                leaderboardSearchQueryHandler(
                  event,
                  entriesAll,
                  setPageNr,
                  setEntriesAll
                )
              }
            />
            <Container width="100%" overflowX="auto">
              <Table
                items={elements}
                orderedKeys={[
                  'id',
                  'submitter',
                  'description',
                  `dev_${props.mainMetric}`,
                  `test_${props.mainMetric}`,
                  'timestamp',
                ]}
                sortByUpdate={sortByUpdate}
                challengeName={props.challengeName}
              />
            </Container>
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
        );
      }
      return <Medium margin="72px 0">No results in Leaderboard ;c</Medium>;
    }
    return <Loading />;
  };

  return (
    <FlexColumn
      as="section"
      padding="24px"
      gap="32px"
      width="100%"
      maxWidth="1600px"
    >
      <H2 as="h2">Leaderboard</H2>
      {leaderboardRender()}
    </FlexColumn>
  );
};

export default Leaderboard;
