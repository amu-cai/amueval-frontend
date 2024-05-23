import React from 'react';
import { Container, FlexColumn } from '../../utils/containers';
import { H2, Medium } from '../../utils/fonts';
import Pager from '../../components/generic/Pager';
import Search from '../../components/generic/Search';
import getAllSubmissions from '../../api/getAllSubmissions';
import Table from '../../components/generic/Table';
import Loading from '../../components/generic/Loading';
import { CALC_PAGES, ELEMENTS_PER_PAGE } from '../../utils/globals';
import searchQueryHandler from './searchHandler';

const AllEntries = (props) => {
  const [entries, setEntries] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [idSorted, setIdSorted] = React.useState([]);
  const [submitterSorted, setSubmitterSorted] = React.useState(false);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [entriesAll, setEntriesAll] = React.useState(null);
  const [devSorted, setDevSorted] = React.useState(false);
  const [testSorted, setTestSorted] = React.useState(false);
  const [descriptionSorted, setDescriptionSorted] = React.useState(false);

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
      getAllSubmissions(props.challengeName, setEntriesAll, setLoading);
    }
  }, [props.challengeName]);

  React.useEffect(() => {
    if (!entries?.length) {
      setEntries(entriesAll);
    }
  }, [entriesAll, entries]);

  const sortByUpdate = (elem) => {
    let entriesUpdated = elements.slice();
    switch (elem) {
      case 'id': {
        if (idSorted) {
          setIdSorted(false);
          entriesUpdated = entriesUpdated.sort((a, b) =>
            a.id > b.id ? 1 : b.id > a.id ? -1 : 0
          );
        } else {
          setIdSorted(true);
          entriesUpdated = entriesUpdated.sort((a, b) =>
            a.id < b.id ? 1 : b.id < a.id ? -1 : 0
          );
        }
        break;
      }
      case 'submitter': {
        if (submitterSorted) {
          setSubmitterSorted(false);
          entriesUpdated = entriesUpdated.sort((a, b) =>
            a.submitter.toLowerCase() < b.submitter.toLowerCase()
              ? 1
              : b.submitter.toLowerCase() < a.submitter.toLowerCase()
              ? -1
              : 0
          );
        } else {
          setSubmitterSorted(true);
          entriesUpdated = entriesUpdated.sort((a, b) =>
            a.submitter.toLowerCase() > b.submitter.toLowerCase()
              ? 1
              : b.submitter.toLowerCase() > a.submitter.toLowerCase()
              ? -1
              : 0
          );
        }
        break;
      }
      case 'description': {
        if (descriptionSorted) {
          setDescriptionSorted(false);
          entriesUpdated = entriesUpdated.sort((a, b) =>
            a.description.toLowerCase() < b.description.toLowerCase()
              ? 1
              : b.description.toLowerCase() < a.description.toLowerCase()
              ? -1
              : 0
          );
        } else {
          setDescriptionSorted(true);
          entriesUpdated = entriesUpdated.sort((a, b) =>
            a.description.toLowerCase() > b.description.toLowerCase()
              ? 1
              : b.description.toLowerCase() > a.description.toLowerCase()
              ? -1
              : 0
          );
        }
        break;
      }
      case 'timestamp': {
        if (whenSorted) {
          setWhenSorted(false);
          entriesUpdated = entriesUpdated.sort((a, b) =>
            a.when < b.when ? 1 : b.when < a.when ? -1 : 0
          );
        } else {
          setWhenSorted(true);
          entriesUpdated = entriesUpdated.sort((a, b) =>
            a.when > b.when ? 1 : b.when > a.when ? -1 : 0
          );
        }
        break;
      }
      case `dev_${props.mainMetric}`: {
        if (devSorted) {
          setDevSorted(false);
          entriesUpdated = entriesUpdated.sort(
            (a, b) =>
              (b ? b[`dev_${props.mainMetric}`] : -1) -
              (a ? a[`dev_${props.mainMetric}`] : -1)
          );
        } else {
          setDevSorted(true);
          entriesUpdated = entriesUpdated.sort(
            (a, b) =>
              (a ? a[`dev_${props.mainMetric}`] : -1) -
              (b ? b[`dev_${props.mainMetric}`] : -1)
          );
        }
        break;
      }
      case `test_${props.mainMetric}`: {
        if (testSorted) {
          setTestSorted(false);
          entriesUpdated = entriesUpdated.sort(
            (a, b) =>
              (b ? b[`test_${props.mainMetric}`] : -1) -
              (a ? a[`test_${props.mainMetric}`] : -1)
          );
        } else {
          setTestSorted(true);
          entriesUpdated = entriesUpdated.sort(
            (a, b) =>
              (a ? a[`test_${props.mainMetric}`] : -1) -
              (b ? b[`test_${props.mainMetric}`] : -1)
          );
        }
        break;
      }
      default:
        break;
    }
    setEntries(entriesUpdated);
  };

  const allEntriesTableRender = () => {
    const tableNotEmpty = elements?.length;
    if (!loading) {
      if (tableNotEmpty) {
        return (
          <>
            <Search
              searchQueryHandler={(event) =>
                searchQueryHandler(event, entriesAll, setPageNr, setEntries)
              }
            />
            <Container width="100%" overflowX="auto">
              <Table
                items={elements}
                orderedKeys={[
                  'id',
                  'submitter',
                  'description',
                  // `dev_${props.mainMetric}`,
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
      return <Medium margin="72px 0">No results in AllEntries ;c</Medium>;
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
      <H2 as="h2">All Submissions</H2>
      {allEntriesTableRender()}
    </FlexColumn>
  );
};

export default AllEntries;
