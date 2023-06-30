import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { H2 } from '../../utils/fonts';
import Pager from '../../components/generic/Pager';
import Search from '../../components/generic/Search';
import getEntries from '../../api/getEntries';
import Table from '../../components/generic/Table';
import Loading from '../../components/generic/Loading';
import { CALC_PAGES, ELEMENTS_PER_PAGE } from '../../utils/globals';
import searchQueryHandler from './searchHandler';
import orderKeys from './orderKeys';

const AllEntries = (props) => {
  const [entriesAll, setEntriesAll] = React.useState([]);
  const [entries, setEntries] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [idSorted, setIdSorted] = React.useState([]);
  const [scoresSorted, setScoresSorted] = React.useState([]);
  const [submitterSorted, setSubmitterSorted] = React.useState(false);
  const [whenSorted, setWhenSorted] = React.useState(false);

  React.useMemo(() => {
    if (props.challengeName) {
      getEntries(
        'challenge-all-submissions',
        props.challengeName,
        [setEntries, setEntriesAll],
        setLoading,
        setScoresSorted
      );
    }
  }, [props.challengeName]);

  const sortByUpdate = React.useCallback(
    (elem) => {
      let newEntries = entries.slice();
      const possibleMetrics = orderKeys(entries[0]).filter(
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
    [entries, idSorted, scoresSorted, submitterSorted, whenSorted]
  );

  const n = (pageNr - 1) * (ELEMENTS_PER_PAGE * 2);
  let elements = entries.slice(n, n + ELEMENTS_PER_PAGE * 2);

  console.log(CALC_PAGES(entries, 2));
  console.log(entries);
  return (
    <FlexColumn
      padding="24px"
      gap="32px"
      as="section"
      width="100%"
      maxWidth="1600px"
    >
      <H2 as="h2">All Entries</H2>
      {!loading ? (
        <>
          <Search
            searchQueryHandler={(event) =>
              searchQueryHandler(event, entriesAll, setPageNr, setEntries)
            }
          />
          {elements.length > 0 && entries[0] && (
            <div style={{ width: '100%', overflowX: 'auto' }}>
              <Table
                items={elements}
                orderedKeys={orderKeys(entries[0])}
                sortByUpdate={sortByUpdate}
                popUpMessageHandler={props.popUpMessageHandler}
              />
            </div>
          )}
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

export default AllEntries;
