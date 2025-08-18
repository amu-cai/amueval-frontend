import React from 'react';
import { Container, FlexColumn } from '../../utils/containers';
import { Medium } from '../../utils/fonts';
import Pager from '../../components/generic/Pager';
import getYourSubmissions from '../../api/getYourSubmissions';
import Table from '../../components/generic/Table';
import Loading from '../../components/generic/Loading';
import { CALC_PAGES, ELEMENTS_PER_PAGE } from '../../utils/globals';

const YourSubmissions = (props) => {
  const [submissions, setSubmissions] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [submissionsAll, setSubmissionsAll] = React.useState(null);
  const [mainMetricResultSorted, setMainMetricResultSorted] = React.useState(false);
  const [yourSubmissionsResult, setYourSubmissionsResult] = React.useState(null);

  const n = (pageNr - 1) * (ELEMENTS_PER_PAGE);
  let elements = submissions?.map((item) => {
    return {
      ...item,
      [`dev_${props.mainMetric}`]: parseFloat(item.dev_result).toFixed(5),
      [`test_${props.mainMetric}`]: parseFloat(item.test_result).toFixed(5),
    };
  });
  elements = elements?.slice(n, n + ELEMENTS_PER_PAGE);

  React.useEffect(() => {
    if (props.challengeName) {
      getYourSubmissions(props.challengeName, setSubmissionsAll, setLoading);
    }
  }, [props.challengeName]);

  React.useEffect(() => {
    if (!submissions?.length) {
      setSubmissions(submissionsAll);
    }
  }, [submissionsAll, submissions]);

  React.useEffect(() => {
    if (yourSubmissionsResult === 'null') {
      window.location.reload();
    }
  }, [yourSubmissionsResult]);

  const sortByUpdate = (elem) => {
    let submissionsUpdated = elements.slice();
    switch (elem) {
      case 'timestamp': {
        if (whenSorted) {
          setWhenSorted(false);
          submissionsUpdated = submissionsUpdated.sort((a, b) =>
            a['timestamp'] < b['timestamp'] ? 1 : b['timestamp'] < a['timestamp'] ? -1 : 0
          );
        } else {
          setWhenSorted(true);
          submissionsUpdated = submissionsUpdated.sort((a, b) =>
            a['timestamp'] > b['timestamp'] ? 1 : b['timestamp'] > a['timestamp'] ? -1 : 0
          );
        }
        break;
      }
      case 'main_metric_result': {
        if (mainMetricResultSorted) {
          setMainMetricResultSorted(false);
          submissionsUpdated = submissionsUpdated.sort(
            (a, b) =>
              (b ? b['main_metric_result'] : -1) -
              (a ? a['main_metric_result'] : -1)
          );
        } else {
          setMainMetricResultSorted(true);
          submissionsUpdated = submissionsUpdated.sort(
            (a, b) =>
              (a ? a['main_metric_result'] : -1) -
              (b ? b['main_metric_result'] : -1)
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
    let orderedKeys = [
      { key: 'index', name: '#', sortable: false },
      { key: 'main_metric_result', name: props.mainMetric, sortable: true },
    ];

    if (elements?.length > 0) {
      const additionalKeys = elements[0].additional_metrics_results.map((metric, index) => ({
        key: 'additional_metric',
        additionalMetricName: metric.name,
        name: metric.name,
        sortable: true
      }));
      orderedKeys = orderedKeys.concat(additionalKeys);
    }
    orderedKeys.push({ key: 'description', name: 'Description' });
    orderedKeys.push({ key: 'timestamp', name: 'Submission Date', sortable: true });

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
                rowFooter={true}
                setYourSubmissionsResult={setYourSubmissionsResult}
                subpage={pageNr}
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

export default YourSubmissions;
