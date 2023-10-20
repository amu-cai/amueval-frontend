import React from 'react';
import { FlexColumn } from '../../utils/containers';
import InfoItem from './InfoItem';
import textIco from '../../assets/icons/text_ico.svg';
import metricIco from '../../assets/icons/metric_ico.svg';
import bestScoreIco from '../../assets/icons/cup_ico.svg';
import baselineIco from '../../assets/icons/baseline_ico.svg';
import timeIco from '../../assets/icons/clock_ico.svg';
import { RENDER_DEADLINE_TIME } from '../../utils/globals';
import coinsIco from '../../assets/icons/coins_ico.svg';
import Media from 'react-media';
import theme from '../../utils/theme';
import PropsTypes from 'prop-types';

const InfoList = (props) => {
  const itemsRender = (gap, iconsSize) => {
    return (
      <>
        <InfoItem icon={textIco} gap={gap} size={iconsSize}>
          The word-processing challenge
        </InfoItem>
        <InfoItem icon={metricIco} gap={gap} size={iconsSize}>
          Metrics: {props.metric ? props.metric : 'xxx'}
        </InfoItem>
        <InfoItem icon={bestScoreIco} gap={gap} size={iconsSize}>
          Best score: {props.bestScore ? props.bestScore : 'xxx'}
        </InfoItem>
        <InfoItem icon={baselineIco} gap={gap} size={iconsSize}>
          Baseline: {props.baseline ? props.baseline : 'xxx'}
        </InfoItem>
        <InfoItem icon={timeIco} gap={gap} size={iconsSize}>
          Deadline:{' '}
          {props.deadline ? RENDER_DEADLINE_TIME(props.deadline) : 'xxx'}
        </InfoItem>
        <InfoItem icon={coinsIco} gap={gap} size={iconsSize}>
          Prize: {props.prize ? props.prize : 'xxx'}
        </InfoItem>
      </>
    );
  };

  return (
    <>
      <Media query={theme.mobile}>
        <FlexColumn gap="10px" as="ul" alignmentX="flex-start">
          {itemsRender('10px', props.iconsSize)}
        </FlexColumn>
      </Media>
      <Media query={theme.desktop}>
        <FlexColumn
          as="ul"
          gap="10px"
          padding="24px 30px"
          shadow={theme.shadow}
          alignmentX="flex-start"
          border={`1px solid ${theme.colors.dark05}`}
        >
          {itemsRender('20px', props.iconsSize)}
        </FlexColumn>
      </Media>
    </>
  );
};

InfoList.propTypes = {
  iconsSize: PropsTypes.string,
  metric: PropsTypes.string,
  bestScore: PropsTypes.string,
  baseline: PropsTypes.string,
  deadline: PropsTypes.string,
  prize: PropsTypes.string,
};

InfoList.defaultProps = {
  iconsSize: '',
  metric: '',
  bestScore: '',
  baseline: '',
  deadline: '',
  prize: '',
};

export default InfoList;
