import React from 'react';
import { Container, FlexColumn } from '../../utils/containers';
import { Medium } from '../../utils/fonts';
import Pager from '../../components/generic/Pager';
import Table from '../../components/generic/Table';
import Loading from '../../components/generic/Loading';
import { CALC_PAGES, ELEMENTS_PER_PAGE } from '../../utils/globals';
import getLeaderboard from '../../api/getLeaderboard';

const Leaderboard = (props) => {
  const [submissions, setSubmissions] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [submissionsAll, setSubmissionsAll] = React.useState(null);

  const n = (pageNr - 1) * (ELEMENTS_PER_PAGE * 2);

  let elements = submissions?.map((item) => {
    return {
      ...item,
      [`test_${props.mainMetric}`]: parseFloat(item['test_result']).toFixed(5),
    };
  });

  elements?.sort((a, b) => {
    const key = 'test_result';
    return parseFloat(b[key]) - parseFloat(a[key]);
  });

  elements = elements?.slice(n, n + ELEMENTS_PER_PAGE * 2);
  React.useEffect(() => {
    if (props.challengeName) {
      getLeaderboard(props.challengeName, setSubmissionsAll, setLoading);
    }
  }, [props.challengeName]);

  React.useEffect(() => {
    if (!submissions?.length) {
      setSubmissions(submissionsAll);
    }
  }, [submissionsAll, submissions]);

  const leaderboardRender = () => {
    const tableNotEmpty = elements?.length;
    const orderedKeys = [
      { key: 'id', name: 'Place', sortable: false},
      { key: 'submitter', name: 'User', sortable: false },
      { key: `test_${props.mainMetric}`, name: `Main Metric`, sortable: false },
      { key: 'timestamp', name: 'Timestamp', sortable: false }
    ];
    if (!loading) {
      if (tableNotEmpty) {
        return (
          <>
            <Container width="100%" overflowX="auto">
              <Table
                items={elements}
                orderedKeys={orderedKeys}
                challengeName={props.challengeName}
              />
            </Container>
            <Pager
              pageNr={pageNr}
              elements={submissions}
              setPageNr={setPageNr}
              width="72px"
              borderRadius="64px"
              pages={CALC_PAGES(submissions, 2)}
              number={`${pageNr} / ${CALC_PAGES(submissions, 2)}`}
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
      width="100%"
    >
      {leaderboardRender()}
    </FlexColumn>
  );
};

export default Leaderboard;
