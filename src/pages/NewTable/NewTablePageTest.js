import React from 'react';
import { FlexColumn } from '../../utils/containers';
import { H2 } from '../../utils/fonts';
import Pager from '../../components/generic/Pager';
import Search from '../../components/generic/Search';
import getAllEntries from '../../api/getAllEntries';
import NewTable from './NewTable';

// const orderedKeys = [
//   'id',
//   'submitter',
//   'Accuracy-dev-0',
//   'Likelihood-dev-0',
//   'Accuracy-dev-1',
//   'Likelihood-dev-1',
//   'Accuracy-test-A',
//   'Likelihood-test-A',
//   'when',
// ];

// const tableItems = [
//   {
//     id: '7962',
//     submitter: 'wirus wirus',
//     'Accuracy-dev-0': '0.68248',
//     'Likelihood-dev-0': '0.00000',
//     'Accuracy-dev-1': '0.65028',
//     'Likelihood-dev-1': '0.00000',
//     'Accuracy-test-A': '0.65503',
//     'Likelihood-test-A': '0.00000',
//     when: '2023-01-05 21:47',
//     tags: ['tag1', 'siema siema', 'dluuuuuggiiiiiiiiiiiiiii tag', 'eloelo'],
//   },
//   {
//     id: '7371',
//     submitter: 'Kamil Guttmann',
//     'Accuracy.dev-0': '0.68248',
//     'Likelihood.dev-0': '0.00000',
//     'Accuracy.dev-1': '0.67544',
//     'Likelihood.dev-1': '0.00000',
//     'Accuracy.test-A': '0.67034',
//     'Likelihood-test-A': '0.00000',
//     when: '2023-01-05 21:47',
//     tags: ['tag2', 'siema2 siem2', 'looooooooooonggggg tag_tag', 'eloelo3'],
//   },
// ];

const NewTablePageTest = (props) => {
  const [entriesFromApi, setEntriesFromApi] = React.useState([]);
  const [entriesAll, setEntriesAll] = React.useState([]);
  const [entries, setEntries] = React.useState([]);
  // eslint-disable-next-line
  const [pageNr, setPageNr] = React.useState(1);
  // eslint-disable-next-line
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

  console.log(entriesFromApi);
  console.log(entriesAll);
  console.log(entries);
  if (entries[0]) console.log(entries[0].keys);

  return (
    <FlexColumn padding="24px" as="section" width="100%" maxWidth="1600px">
      <H2 as="h2" margin="0 0 32px 0">
        New Table Test
      </H2>
      <Search searchQueryHandler={() => console.log('siema')} />
      {entries.length > 0 && (
        <NewTable items={entries} orderedKeys={orderKeys(entries[0])} />
      )}
      <Pager />
    </FlexColumn>
  );
};

export default NewTablePageTest;
