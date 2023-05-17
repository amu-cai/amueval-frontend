import React from 'react';
import Loading from '../../../../components/generic/Loading';
import { H2 } from '../../../../utils/fonts';
import SubmissionLoadingStyle from './SubmissionLoadingStyle';

const SubmissionLoading = () => {
  return (
    <SubmissionLoadingStyle>
      <H2 as="h1">Submission processing...</H2>
      <Loading />
    </SubmissionLoadingStyle>
  );
};

export default SubmissionLoading;
