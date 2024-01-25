import React from 'react';
import { FlexColumn } from '../../utils/containers';
import SubmitInput from '../../components/generic/SubmitInput';
import { H2 } from '../../utils/fonts';
import theme from '../../utils/theme';
import Button from '../../components/generic/Button';
import { Menu } from '../../utils/fonts';
import challengeMetaDataSubmit from '../../api/challengeMetaDataSubmit';
import challengeUpload from '../../api/challengeUpload';

const ChallengeCreate = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [award, setAward] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [type, setType] = React.useState('');
  const [metric, setMetric] = React.useState('');
  const [challengeFile, setChallengeFile] = React.useState(null);
  const [uploadResult, setUploadResult] = React.useState(null);

  React.useEffect(() => {
    if (uploadResult) {
      alert(`${uploadResult.challenge}: ${uploadResult.message}`);
    }
  }, [uploadResult]);

  const challengeCreateSubmit = async () => {
    const challengeInput = {
      title: title,
      description: description,
      type: type,
      main_metric: metric,
      award: award,
      deadline: deadline,
    };
    await challengeMetaDataSubmit(challengeInput);
    await challengeUpload(challengeFile, setUploadResult);
  };

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
          label="Type"
          type="select"
          options={["image", "text", "tabular"]}
          handler={(value) => {
            setType(value);
          }}
        />
        <SubmitInput
          label="Metric"
          type="select"
          options={["Accuracy", "Recall", "Precision", "F-Score"]}
          handler={(value) => {
            setMetric(value); // TODO: ToggleTags component refactor and use
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
          handler={() => challengeCreateSubmit()}
        >
          <Menu color={theme.colors.white}>Submit</Menu>
        </Button>
      </FlexColumn>
    </FlexColumn>
  );
};

export default ChallengeCreate;
