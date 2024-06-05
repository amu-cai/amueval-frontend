import React from 'react';
import { Container, FlexColumn } from '../../utils/containers';
import { H2 } from '../../utils/fonts';
import Pager from '../../components/generic/Pager';
import { CALC_PAGES } from '../../utils/globals';
import Loading from '../../components/generic/Loading';
import Table from '../../components/generic/Table/Table';
import Search from '../../components/generic/Search';
import orderKeys from './orderKeys';
import { ELEMENTS_PER_PAGE } from '../../utils/globals';
import searchHandler from './searchHandler';
import { Medium } from '../../utils/fonts';
import getMySubmissions from '../../api/getMySubmissions';

const MyEntries = (props) => {
  const [myEntriesAll, setMyEntriesAll] = React.useState([]);
  const [myEntries, setMyEntries] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [pageNr, setPageNr] = React.useState(1);
  const [idSorted, setIdSorted] = React.useState([]);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [scoresSorted, setScoresSorted] = React.useState([]);

  const n = (pageNr - 1) * (ELEMENTS_PER_PAGE * 2);
  let elements = myEntries?.map((item) => {
    return {
      ...item,
      [`dev_${props.mainMetric}`]: parseFloat(item.dev_result).toFixed(5),
      [`test_${props.mainMetric}`]: parseFloat(item.test_result).toFixed(5),
    };
  });
  elements = elements?.slice(n, n + ELEMENTS_PER_PAGE * 2);

  React.useEffect(() => {
    if (props.challengeName) {
      getMySubmissions(
        props.challengeName,
        [setMyEntries, setMyEntriesAll],
        setLoading,
      );
    }
  }, [props.challengeName]);

  const sortByUpdate = React.useCallback(
    (elem) => {
      let newEntries = myEntries?.slice();
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

  const myEntriesTableRender = () => {
    console.log(123, props);
    const tableNotEmpty = elements.length && myEntries[0];
    if (!loading) {
      if (tableNotEmpty) {
        return (
          <>
            <Search
              searchQueryHandler={(event) =>
                searchHandler(event, myEntriesAll, setPageNr, setMyEntries)
              }
            />
            <Container width="100%" overflowX="auto">
              <Table
                items={elements}
                orderedKeys={[
                  'id',
                  'description',
                  // `dev_${props.mainMetric}`,
                  `test_${props.mainMetric}`,
                  'timestamp',
                ]}
                sortByUpdate={sortByUpdate}
                subpage={'MY_ENTRIES'}
                challengeName={props.challengeName}
              />
            </Container>
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
        );
      }
      return <Medium margin="72px 0">No results</Medium>;
    }
    return <Loading />;
  };

  return (
    <FlexColumn
      padding="24px"
      gap="32px"
      as="section"
      width="100%"
      maxWidth="1600px"
    >
      <H2 as="h2">My Submissions</H2>
      {myEntriesTableRender()}
    </FlexColumn>
  );
};

export default MyEntries;
