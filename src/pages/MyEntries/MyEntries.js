import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { H2 } from '../../utils/fonts';
import Pager from '../../components/generic/Pager';
import { CALC_PAGES } from '../../utils/globals';
import Loading from '../../components/generic/Loading';
import Table from '../../components/generic/Table/Table';
import Search from '../../components/generic/Search';
import orderKeys from './orderKeys';
import { ELEMENTS_PER_PAGE } from '../../utils/globals';
import getEntries from '../../api/getEntries';
import searchHandler from './searchHandler';

const MyEntries = (props) => {
  // const [myEntriesFromAPI, setMyEntriesFromAPI] = React.useState({});
  const [myEntriesAll, setMyEntriesAll] = React.useState([]);
  const [myEntries, setMyEntries] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [pageNr, setPageNr] = React.useState(1);
  const [idSorted, setIdSorted] = React.useState([]);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [scoresSorted, setScoresSorted] = React.useState([]);

  React.useMemo(() => {
    getEntries(
      'challenge-my-submissions',
      props.challengeName,
      [setMyEntries, setMyEntriesAll],
      setLoading,
      setScoresSorted
    );
  }, [props.challengeName]);

  const sortByUpdate = React.useCallback(
    (elem) => {
      let newEntries = myEntries.slice();
      const possibleMetrics = orderKeys(myEntries[0]).filter(
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
      setMyEntries(newEntries);
    },
    [idSorted, myEntries, scoresSorted, whenSorted]
  );

  const n = (pageNr - 1) * (ELEMENTS_PER_PAGE * 2);
  let elements = myEntries.slice(n, n + ELEMENTS_PER_PAGE * 2);

  return (
    <FlexColumn
      padding="24px"
      gap="32px"
      as="section"
      width="100%"
      maxWidth="1600px"
    >
      <H2 as="h2">My Entries</H2>
      {!loading ? (
        <>
          <Search
            searchQueryHandler={(event) =>
              searchHandler(event, myEntriesAll, setPageNr, setMyEntries)
            }
          />
          {elements.length > 0 && myEntries[0] && (
            <Table
              items={elements}
              orderedKeys={orderKeys(myEntries[0])}
              sortByUpdate={sortByUpdate}
            />
          )}
          <Pager
            pageNr={pageNr}
            elements={myEntries}
            setPageNr={setPageNr}
            width="72px"
            borderRadius="64px"
            pages={CALC_PAGES(myEntries, 2)}
            number={`${pageNr} / ${CALC_PAGES(myEntries, 2)}`}
          />
        </>
      ) : (
        <Loading />
      )}
    </FlexColumn>
  );
};

export default MyEntries;
