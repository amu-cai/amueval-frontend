import React from 'react';
import { FlexColumn } from '../../utils/containers';
import SubmitInput from '../../components/generic/SubmitInput';
import { H2, Medium } from '../../utils/fonts';
import theme from '../../utils/theme';
import Button from '../../components/generic/Button';
import { Menu } from '../../utils/fonts';
import challengeCreate from '../../api/challengeCreate';
import getMetrics from '../../api/getMetrics';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
import { useDispatch } from 'react-redux';
import LOCAL_STORAGE from '../../utils/localStorage';

const ChallengeCreate = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [award, setAward] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [type, setType] = React.useState('image');
  const [metric, setMetric] = React.useState('Accuracy');
  const [challengeSource, setChallengeSource] = React.useState(null);
  const [challengeFile, setChallengeFile] = React.useState(null);
  const [uploadResult, setUploadResult] = React.useState(null);

  const [metrics, setMetrics] = React.useState(null);

  React.useEffect(() => {
    getMetrics(setMetrics);
  }, []);

  React.useEffect(() => {
    if (uploadResult) {
      if (uploadResult?.detail) {
        dispatch(
          popUpMessageHandler({
            header: 'Challenge create error',
            message: `Error: ${uploadResult.detail}`,
            borderColor: theme.colors.red,
          })
        );
      } else {
        dispatch(
          popUpMessageHandler({
            header: 'Challenge create success',
            message: `${uploadResult.challenge}: ${uploadResult.message}`,
          })
        );
      }
    }
  }, [uploadResult, dispatch]);

  const challengeCreateSubmit = async () => {
    const challengeInput = {
      title: title,
      description: description,
      source: challengeSource,
      type: type,
      main_metric: metric,
      award: award,
      deadline: deadline,
    };
    await challengeCreate(
      challengeFile,
      challengeInput,
      setUploadResult,
      localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)
    );
  };

  const deadlineFormat = new RegExp(
    '[0-3][0-9].[0-1][0-9].[0-9][0-9][0-9][0-9]'
  );

  return (
    <FlexColumn padding="80px 0" width="100%" minHeight="100vh" gap="32px">
      <H2 as="h1">Challenge Create</H2>
      <FlexColumn maxWidth="600px" width="100%" gap="20px">
        <FlexColumn gap="10px" width="100%">
          <SubmitInput
            label="Title"
            handler={(value) => {
              setTitle(value);
            }}
          />
          {!title && (
            <Medium fontSize="14px" width="100%" color={theme.colors.red}>
              Title required
            </Medium>
          )}
        </FlexColumn>
        <FlexColumn gap="10px" width="100%">
          <SubmitInput
            label="Challenge source link"
            handler={(value) => {
              setChallengeSource(value);
            }}
          />
          {!challengeSource && (
            <Medium fontSize="14px" width="100%" color={theme.colors.red}>
              Challenge source required
            </Medium>
          )}
        </FlexColumn>
        <SubmitInput
          label="Description"
          type="textarea"
          handler={(value) => {
            setDescription(value);
          }}
        />
        <FlexColumn gap="10px" width="100%">
          <SubmitInput
            label="Deadline"
            handler={(value) => {
              setDeadline(value);
            }}
          />
          {deadline.length > 0 && !deadlineFormat.test(deadline) && (
            <Medium fontSize="14px" width="100%" color={theme.colors.red}>
              Deadline format: dd.mm.yyyy
            </Medium>
          )}
        </FlexColumn>
        <SubmitInput
          label="Award"
          handler={(value) => {
            setAward(value);
          }}
        />
        <SubmitInput
          label="Type"
          type="select"
          options={['image', 'text', 'tabular']}
          handler={(value) => {
            setType(value);
          }}
        />
        <SubmitInput
          label="Metric"
          type="select"
          options={metrics ? metrics.map((m) => m.name) : []}
          handler={(value) => {
            setMetric(value); // TODO: ToggleTags component refactor and use
          }}
        />
        <FlexColumn gap="10px" width="100%">
          <SubmitInput
            label="Challenge Zip File"
            type="file"
            accept='accept="zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"'
            handler={(e) => {
              setChallengeFile(e.target.files[0]);
            }}
          />
          {!challengeFile && (
            <Medium fontSize="14px" width="100%" color={theme.colors.red}>
              Challenge file required
            </Medium>
          )}
        </FlexColumn>
        <Button
          width="122px"
          height="44px"
          margin="16px auto 0 0"
          handler={() => challengeCreateSubmit()}
          disabled={
            !challengeFile ||
            !title ||
            (!deadlineFormat.test(deadline) && deadline.length > 0)
          }
        >
          <Menu color={theme.colors.white}>Submit</Menu>
        </Button>
      </FlexColumn>
    </FlexColumn>
  );
};

export default ChallengeCreate;
