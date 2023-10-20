import React from 'react';
import { FlexColumn, FlexRow } from '../../../../utils/containers';
import { Body, H2 } from '../../../../utils/fonts';
import cubeIconRender from './functions/cubeIconRender';
import ellipse from '../../../../assets/icons/ellipse.svg';
import MotivationStyle from './MotivationStyle';
import { IS_MOBILE } from '../../../../utils/globals';
import { MOTIVATION__CONTENT } from './utils';

const Motivation = () => {
  return (
    <MotivationStyle as="section" image={IS_MOBILE() ? null : ellipse}>
      <H2 as="h2">Motivation</H2>
      <FlexColumn as="ul" className="MotivationStyle__list">
        {MOTIVATION__CONTENT.map((paragraph, index) => {
          return (
            <FlexRow
              key={`motivation-${index}`}
              as="li"
              className="MotivationStyle__item"
            >
              {cubeIconRender()}
              <Body as="p" className="MotivationStyle__paragraph">
                {paragraph}
              </Body>
            </FlexRow>
          );
        })}
      </FlexColumn>
    </MotivationStyle>
  );
};

export default Motivation;
