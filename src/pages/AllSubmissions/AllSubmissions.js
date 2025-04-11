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
  const [whenSorted, setWhenSorted] = React.useState(false);
  const [submissionsAll, setSubmissionsAll] = React.useState(null);

  const n = (pageNr - 1) * (ELEMENTS_PER_PAGE );

  let elements = submissions?.map((item) => {
    return {
      ...item
    };
  });
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

  const sortByUpdate = (key, metricName = null) => {
    let submissionsUpdated = [...submissions];

    switch (key) {
      case 'timestamp': {
        submissionsUpdated.sort((a, b) => {
          if (whenSorted) {
            return new Date(b.timestamp) - new Date(a.timestamp);
          } else {
            return new Date(a.timestamp) - new Date(b.timestamp);
          }
        });
        break;
      }

      case 'main_metric_result': {
        submissionsUpdated.sort((a, b) => {
          if (whenSorted) {
            return b.main_metric_result - a.main_metric_result;
          } else {
            return a.main_metric_result - b.main_metric_result;
          }
        });
        break;
      }

      case 'additional_metric': {
        if (metricName) {
          submissionsUpdated.sort((a, b) => {
            const aMetric = a.additional_metrics_results.find((metric) => metric.name === metricName)?.score ?? 0;
            const bMetric = b.additional_metrics_results.find((metric) => metric.name === metricName)?.score ?? 0;
            if (whenSorted) {
              return bMetric - aMetric;
            } else {
              return aMetric - bMetric;
            }
          });
        }
        break;
      }

      default:
        break;
    }

    setWhenSorted(!whenSorted);
    setSubmissions(submissionsUpdated);
  };


  const allSubmissionsTableRender = () => {
    const tableNotEmpty = elements?.length;
    let orderedKeys = [
      { key: 'index', name: '#', sortable: false },
      { key: 'submitter', name: 'User', sortable: false },
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
    orderedKeys.push({ key: 'timestamp', name: 'Submission Date', sortable: true });

    if (!loading) {
      if (tableNotEmpty) {
        return (
          <>
            <Container width="100%" overflowX="auto">
              <Table
                  items={elements}
                  orderedKeys={orderedKeys}
                  sortByUpdate={(key, additionalMetricName) => {
                    if (key === 'additional_metric') {
                      sortByUpdate(key, additionalMetricName);
                    } else {
                      sortByUpdate(key);
                    }
                  }}
                  challengeName={props.challengeName}
                  rowFooter={false}
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
