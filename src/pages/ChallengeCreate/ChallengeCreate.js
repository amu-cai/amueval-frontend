import React from 'react';
import { FlexColumn } from '../../utils/containers';
import SubmitInput from '../../components/generic/SubmitInput';
import { H2 } from '../../utils/fonts';
// import TagsChoose from '../Submit/components/TagsChoose';
import theme from '../../utils/theme';
import Button from '../../components/generic/Button';
import { Menu } from '../../utils/fonts';

const ChallengeCreate = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [type, setType] = React.useState('');
  const [mainMetric, setMainMetric] = React.useState('');
  const [award, setAward] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [challengeFile, setChallengeFile] = React.useState(null);

  const [result, setResult] = React.useState(null);

  // const [metrics, setMetrics] = React.useState(["Accuracy", "BLEU", "F-score"]);
  // const [metricsToSend, setMetricsToSend] = React.useState([]);

  React.useEffect(() => {
    if (result) {
      alert(result);
    }
  }, [result]);

  const challengeCreateSubmit = (setResult) => {
    const challengeInput = {
      title: title,
      description: description,
      type: type,
      main_metric: mainMetric,
      award: award,
      deadline: deadline,
    };

    fetch(`http://localhost:8000/challenges/create-challenge`, {
      method: 'post',
      body: JSON.stringify(challengeInput),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(
        (res) => {
          if (res.ok) {
            console.log('sending pdf ok');
            return res.json();
          } else {
            console.log('something went wrong');
            console.log(res);
          }
        },
        (error) => {
          console.log(error);
          console.error('failed due to network error or cross domain');
        }
      )
      .then((json) => {
        console.log('json response processing');
        console.log(json);
        setResult(json);
      });
  };

  const challengeDetailsCreateSubmit = () => {
    const formData = new FormData();
    formData.append('challenge_file', challengeFile);

    fetch(`http://localhost:8000/challenges/create-challenge-details`, {
      method: 'post',
      body: formData,
    })
      .then(
        (res) => {
          if (res.ok) {
            console.log('sending pdf ok');
            return res.json();
          } else {
            console.log('something went wrong');
            console.log(res);
          }
        },
        (error) => {
          console.log(error);
          console.error('failed due to network error or cross domain');
        }
      )
      .then((json) => {
        console.log('json response processing');
        console.log(json);
        setResult(json);
      });
  };

  console.log(challengeCreateSubmit);

  return (
    <FlexColumn width="100%" minHeight="100vh" gap="32px">
      <H2 as="h1">Challenge Create</H2>
      <FlexColumn maxWidth="600px" width="100%" gap="20px">
        <SubmitInput
          label="Title"
          handler={(value) => {
            setTitle(value);
          }}
        />
        <SubmitInput
          label="Description"
          handler={(value) => {
            setDescription(value);
          }}
        />
        <SubmitInput
          label="Type"
          handler={(value) => {
            setType(value);
          }}
        />
        {/* <TagsChoose // TODO: Refactor TagsChoose do MultiChoose, głównie przez strukturę tag.name zamiast po prostu tag się psuje
          label="Metrics"
          tags={metrics}
          submissionTags={metricsToSend}
          updateTags={(metricsToSend, metrics) => {
            setMetricsToSend(metricsToSend);
            setMetrics(metrics);
          }}
        /> */}
        <SubmitInput
          label="Main metric"
          handler={(value) => {
            setMainMetric(value);
          }}
        />
        <SubmitInput
          label="Deadline"
          handler={(value) => {
            setDeadline(value);
          }}
        />
        <SubmitInput
          label="Award"
          handler={(value) => {
            setAward(value);
          }}
        />
        <SubmitInput
          label="Challenge Zip File"
          type="file"
          accept='accept="zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"'
          handler={(e) => {
            setChallengeFile(e.target.files[0]);
          }}
        />
        <Button
          width="122px"
          height="44px"
          margin="16px auto 0 0"
          handler={() => challengeDetailsCreateSubmit()}
        >
          <Menu color={theme.colors.white}>Submit</Menu>
        </Button>
      </FlexColumn>
    </FlexColumn>
  );
};

export default ChallengeCreate;
