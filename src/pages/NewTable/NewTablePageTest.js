import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { H2 } from '../../utils/fonts';
import Pager from '../../components/generic/Pager';
import Search from '../../components/generic/Search';
import getAllEntries from '../../api/getAllEntries';
import NewTable from './NewTable';
import Loading from '../../components/generic/Loading';
import { CALC_PAGES, ELEMENTS_PER_PAGE } from '../../utils/globals';
import searchQueryHandler from './searchHandler';

const NewTablePageTest = (props) => {
  // eslint-disable-next-line
  const [entriesFromApi, setEntriesFromApi] = React.useState([]);
  const [entriesAll, setEntriesAll] = React.useState([]);
  const [entries, setEntries] = React.useState([]);
  const [pageNr, setPageNr] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  // eslint-disable-next-line
  const [scoresSorted, setScoresSorted] = React.useState([]);
  // eslint-disable-next-line
  const [submitterSorted, setSubmitterSorted] = React.useState(false);
  // eslint-disable-next-line
  const [whenSorted, setWhenSorted] = React.useState(false);

  React.useEffect(() => {
    if (props.challengeName) challengeDataRequest(props.challengeName);
  }, [props.challengeName]);

  const challengeDataRequest = (challengeName) => {
    getAllEntries(challengeName, setEntriesFromApi, setEntriesAll);
    getAllEntries(
      challengeName,
      undefined,
      setEntries,
      setLoading,
      setScoresSorted
    );
  };

  const orderKeys = (elem) => {
    if (elem) {
      let result = ['id', 'submitter'];
      const elemKeys = Object.keys(elem);
      const dev0keys = elemKeys
        .filter((key) => key.split('.')[1] === 'dev-0')
        .sort();
      const dev1keys = elemKeys
        .filter((key) => key.split('.')[1] === 'dev-1')
        .sort();
      const testAkeys = elemKeys
        .filter((key) => key.split('.')[1] === 'test-A')
        .sort();
      result = result.concat(dev0keys);
      result = result.concat(dev1keys);
      result = result.concat(testAkeys);
      result.push('when');
      return result;
    }
    return null;
  };

  const n = (pageNr - 1) * (ELEMENTS_PER_PAGE * 2);
  let elements = entries.slice(n, n + ELEMENTS_PER_PAGE * 2);

  if (!loading) {
    return (
      <FlexColumn
        padding="24px"
        gap="32px"
        as="section"
        width="100%"
        maxWidth="1600px"
      >
        <H2 as="h2">New Table Test</H2>
        <Search
          searchQueryHandler={(event) =>
            searchQueryHandler(event, entriesAll, setPageNr, setEntries)
          }
        />
        {elements.length > 0 && entries[0] && (
          <NewTable items={elements} orderedKeys={orderKeys(entries[0])} />
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
      </FlexColumn>
    );
  } else return <Loading />;
};

export default NewTablePageTest;
