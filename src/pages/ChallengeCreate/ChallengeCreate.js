import React from 'react';
import { FlexColumn, FlexRow } from '../../utils/containers';
import SubmitInput from '../../components/generic/SubmitInput';
import { H2, Medium, Body } from '../../utils/fonts';
import theme from '../../utils/theme';
import Button from '../../components/generic/Button';
import { Menu } from '../../utils/fonts';
import challengeCreate from '../../api/challengeCreate';
import getMetrics from '../../api/getMetrics';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
import { useDispatch } from 'react-redux';
import LOCAL_STORAGE from '../../utils/localStorage';
import { Link } from 'react-router-dom';
import { CHALLENGE_CREATE_HOW_TO_PAGE } from '../../utils/globals';

const ChallengeCreate = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [award, setAward] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [type, setType] = React.useState('image');
  const [metric, setMetric] = React.useState('accuracy');
  const [parameters, setParameters] = React.useState(null);
  const [challengeSource, setChallengeSource] = React.useState(null);
  const [metricSorting, setMetricSorting] = React.useState('descending');
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
      main_metric_parameters: parameters ? JSON.stringify(parameters) : null,
      award: award,
      sorting: metricSorting,
      deadline: deadline.replaceAll(' ', '') + ', 23:59:59',
    };

    await challengeCreate(
      challengeFile,
      challengeInput,
      setUploadResult,
      localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)
    );
  };

  const deadlineFormat = new RegExp(
    '(([0-2][0-9])|(3[0-1]))-((0[0-9])|(1[0-2]))-[1-9][0-9][0-9][0-9]'
  );

  const parametersListRender = () => {
    const choosenMetric = metrics?.find((m) => m['name'] === metric);
    if (choosenMetric) {
      return choosenMetric.parameters.map((parameter, index) => {
        return (
          <Body
            as="li"
            listStyle="inside"
            key={`metric-param-${index}-${parameter['name']}`}
            margin="0 0 4px 0"
          >
            - {`${parameter['name']} (${parameter['data_type']})`}
          </Body>
        );
      });
    }
  };

  const deadlineValidationRender = () => {
    const render = deadline?.length && !deadlineFormat.test(deadline);
    if (render) {
      return (
        <Medium fontSize="14px" width="100%" color={theme.colors.red}>
          Deadline format: dd-mm-yyyy
        </Medium>
      );
    }
  };

  return (
    <FlexColumn padding="80px 0" width="100%" minHeight="100vh" gap="32px">
      <FlexRow gap="12px">
        <H2 as="h1">Challenge Create</H2>
        <Medium
          margin="4px 0 0 0"
          color={theme.colors.green}
          to={CHALLENGE_CREATE_HOW_TO_PAGE}
          as={Link}
          cursor="pointer"
        >
          How To
        </Medium>
      </FlexRow>
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
          {deadlineValidationRender()}
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
            setMetric(value);
          }}
        />
        <FlexColumn width="100%" gap="8px">
          <Medium width="100%">Metric parameters</Medium>
          <FlexColumn width="100%" alignmentX="flex-start" as="ol">
            {parametersListRender()}
          </FlexColumn>
          <SubmitInput
            label="input params as json string"
            type="textarea"
            placeholder='for example: {"normalize": true, "sample_weight": [1, 2, 3]}'
            handler={(value) => setParameters(value)}
          />
          <Medium width="100%">
            Metric documentation&nbsp;
            <Medium
              as="a"
              cursor="pointer"
              target="__blank"
              textDecoration="underline"
              color={theme.colors.blue}
              href={metrics?.find((m) => m['name'] === metric).link}
            >
              link
            </Medium>
          </Medium>
        </FlexColumn>
        <SubmitInput
          label="Metric sorting"
          type="select"
          options={['descending', 'ascending']}
          handler={(value) => {
            setMetricSorting(value);
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
        <FlexRow width="100%" alignmentX="flex-start" gap="48px">
          <Button
            width="122px"
            height="44px"
            margin="16px 0 0 0"
            handler={() => challengeCreateSubmit()}
            disabled={
              !challengeFile ||
              !title ||
              !challengeSource ||
              (deadline?.length && !deadlineFormat.test(deadline))
            }
          >
            <Menu color={theme.colors.white}>Submit</Menu>
          </Button>
          <Button
            width="82px"
            height="36px"
            margin="16px 0 0 0"
            as={Link}
            to={CHALLENGE_CREATE_HOW_TO_PAGE}
            backgroundColor={theme.colors.blue}
            target="__blank"
          >
            <Body color={theme.colors.white}>How to</Body>
          </Button>
        </FlexRow>
      </FlexColumn>
    </FlexColumn>
  );
};

export default ChallengeCreate;
