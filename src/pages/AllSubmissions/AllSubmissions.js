import React from 'react';
import { Container, FlexColumn } from '../../utils/containers';
import { Medium } from '../../utils/fonts';
import Pager from '../../components/generic/Pager';
import getAllSubmissions from '../../api/getAllSubmissions';
import Table from '../../components/generic/Table';
import Loading from '../../components/generic/Loading';
import { CALC_PAGES, ELEMENTS_PER_PAGE } from '../../utils/globals';

const AllSubmissions = (props) => {
  const [submissions, setSubmissions] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [idSorted, setIdSorted] = React.useState([]);
  const [submitterSorted, setSubmitterSorted] = React.useState(false);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [submissionsAll, setSubmissionsAll] = React.useState(null);
  const [devSorted, setDevSorted] = React.useState(false);
  const [testSorted, setTestSorted] = React.useState(false);
  const [descriptionSorted, setDescriptionSorted] = React.useState(false);

  const n = (pageNr - 1) * (ELEMENTS_PER_PAGE );

  let elements = submissions?.map((item) => {
    return {
      ...item,
      [`dev_${props.mainMetric}`]: parseFloat(item.dev_result).toFixed(5),
      [`test_${props.mainMetric}`]: parseFloat(item.test_result).toFixed(5),
    };
  });
  console.log(elements);
  elements = elements?.slice(n, n + ELEMENTS_PER_PAGE);

  React.useEffect(() => {
    if (props.challengeName) {
      getAllSubmissions(props.challengeName, setSubmissionsAll, setLoading);
    }
  }, [props.challengeName]);

  React.useEffect(() => {
    if (!submissions?.length) {
      setSubmissions(submissionsAll);
    }
  }, [submissionsAll, submissions]);

  const sortByUpdate = (elem) => {
    let submissionsUpdated = elements.slice();
    switch (elem) {
      case 'id': {
        if (idSorted) {
          setIdSorted(false);
          submissionsUpdated = submissionsUpdated.sort((a, b) =>
            a.id > b.id ? 1 : b.id > a.id ? -1 : 0
          );
        } else {
          setIdSorted(true);
          submissionsUpdated = submissionsUpdated.sort((a, b) =>
            a.id < b.id ? 1 : b.id < a.id ? -1 : 0
          );
        }
        break;
      }
      case 'submitter': {
        if (submitterSorted) {
          setSubmitterSorted(false);
          submissionsUpdated = submissionsUpdated.sort((a, b) =>
            a.submitter.toLowerCase() < b.submitter.toLowerCase()
              ? 1
              : b.submitter.toLowerCase() < a.submitter.toLowerCase()
              ? -1
              : 0
          );
        } else {
          setSubmitterSorted(true);
          submissionsUpdated = submissionsUpdated.sort((a, b) =>
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
          submissionsUpdated = submissionsUpdated.sort((a, b) =>
            a.description.toLowerCase() < b.description.toLowerCase()
              ? 1
              : b.description.toLowerCase() < a.description.toLowerCase()
              ? -1
              : 0
          );
        } else {
          setDescriptionSorted(true);
          submissionsUpdated = submissionsUpdated.sort((a, b) =>
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
          submissionsUpdated = submissionsUpdated.sort((a, b) =>
            a.when < b.when ? 1 : b.when < a.when ? -1 : 0
          );
        } else {
          setWhenSorted(true);
          submissionsUpdated = submissionsUpdated.sort((a, b) =>
            a.when > b.when ? 1 : b.when > a.when ? -1 : 0
          );
        }
        break;
      }
      case `dev_${props.mainMetric}`: {
        if (devSorted) {
          setDevSorted(false);
          submissionsUpdated = submissionsUpdated.sort(
            (a, b) =>
              (b ? b[`dev_${props.mainMetric}`] : -1) -
              (a ? a[`dev_${props.mainMetric}`] : -1)
          );
        } else {
          setDevSorted(true);
          submissionsUpdated = submissionsUpdated.sort(
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
          submissionsUpdated = submissionsUpdated.sort(
            (a, b) =>
              (b ? b[`test_${props.mainMetric}`] : -1) -
              (a ? a[`test_${props.mainMetric}`] : -1)
          );
        } else {
          setTestSorted(true);
          submissionsUpdated = submissionsUpdated.sort(
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
    setSubmissions(submissionsUpdated);
  };

  const allSubmissionsTableRender = () => {
    const tableNotEmpty = elements?.length;
    const orderedKeys = [
      { key: 'index', name: '#', sortable: false },
      { key: 'submitter', name: 'User', sortable: false },
      { key: 'main_metric_result', name: `Main Metric`, sortable: true },
      { key: 'timestamp', name: 'Timestamp', sortable: true }
    ];
    if (!loading) {
      if (tableNotEmpty) {
        return (
          <>
            <Container width="100%" overflowX="auto">
              <Table
                items={elements}
                orderedKeys={orderedKeys}
                sortByUpdate={sortByUpdate}
                challengeName={props.challengeName}
              />
            </Container>
            <Pager
              pageNr={pageNr}
              setPageNr={setPageNr}
              elements={submissions}
              pages={submissions}
              width="72px"
              borderRadius="64px"
              currentPage={pageNr}
              totalPages={CALC_PAGES(submissions)}
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
      as="section"
      width="100%"
    >
      {allSubmissionsTableRender()}
    </FlexColumn>
  );
};

export default AllSubmissions;
