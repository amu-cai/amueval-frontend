import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { H2 } from '../../utils/fonts';
import Table from '../../components/generic/Table/Table';
import getChallengeLeaderboard from '../../api/getChallengeLeaderboard';
import leaderboardSearchQueryHandler from './leaderboardSearchQueryHandler';
import { CALC_PAGES } from '../../utils/globals';
import Search from '../../components/generic/Search';
import Pager from '../../components/generic/Pager';
import Loading from '../../components/generic/Loading';
import orderKeys from './orderKeys';
import { ELEMENTS_PER_PAGE } from '../../utils/globals';

const Leaderboard = (props) => {
  const [entriesFromApi, setEntriesFromApi] = React.useState([]);
  const [entries, setEntries] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [submitterSorted, setSubmitterSorted] = React.useState(false);
  const [descriptionSorted, setDescriptionSorted] = React.useState(false);
  const [entriesSorted, setEntriesSorted] = React.useState(false);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [scoresSorted, setScoresSorted] = React.useState([]);
  const [idSorted, setIdSorted] = React.useState([]);

  React.useMemo(() => {
    getChallengeLeaderboard(
      'leaderboard',
      props.challengeName,
      [setEntries, setEntriesFromApi],
      setLoading,
      setScoresSorted
    );
  }, [props.challengeName]);

  const searchQueryHandler = (event) => {
    leaderboardSearchQueryHandler(event, entriesFromApi, setPageNr, setEntries);
  };

  const sortByUpdate = React.useCallback(
    (elem) => {
      let newEntries = entries.slice();
      const possibleMetrics = orderKeys(entries[0]).filter(
        (key) =>
          !['id', 'submitter', 'when', 'description', 'times'].includes(key)
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
        case 'description':
          if (descriptionSorted) {
            newEntries = newEntries.sort((a, b) =>
              a.description.toLowerCase() < b.description.toLowerCase()
                ? 1
                : b.description.toLowerCase() < a.description.toLowerCase()
                ? -1
                : 0
            );
            setDescriptionSorted(false);
          } else {
            newEntries = newEntries.sort((a, b) =>
              a.description.toLowerCase() > b.description.toLowerCase()
                ? 1
                : b.description.toLowerCase() > a.description.toLowerCase()
                ? -1
                : 0
            );
            setDescriptionSorted(true);
          }
          break;
        case 'times':
          if (entriesSorted) {
            newEntries = newEntries.sort((a, b) =>
              a.times > b.times ? 1 : b.times > a.times ? -1 : 0
            );
            setEntriesSorted(false);
          } else {
            newEntries = newEntries.sort((a, b) =>
              a.times < b.times ? 1 : b.times < a.times ? -1 : 0
            );
            setEntriesSorted(true);
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
    [
      descriptionSorted,
      entries,
      entriesSorted,
      idSorted,
      scoresSorted,
      submitterSorted,
      whenSorted,
    ]
  );

  const n = (pageNr - 1) * (ELEMENTS_PER_PAGE * 2);
  const elements = entries.slice(n, n + ELEMENTS_PER_PAGE * 2);
  console.log(entries);

  return (
    <FlexColumn
      padding="24px"
      gap="32px"
      as="section"
      width="100%"
      maxWidth="1600px"
    >
      <H2 as="h2">Leaderboard</H2>
      {!loading ? (
        <>
          <Search
            searchQueryHandler={(event) =>
              searchQueryHandler(event, entries, setPageNr, setEntries)
            }
          />
          {elements.length > 0 && entries[0] && (
            <div style={{ width: '100%', overflowX: 'auto' }}>
              <Table
                items={elements}
                orderedKeys={orderKeys(entries[0])}
                sortByUpdate={sortByUpdate}
                rowFooter={false}
              />
            </div>
          )}
          <Pager
            pageNr={pageNr}
            elements={elements}
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

export default Leaderboard;
