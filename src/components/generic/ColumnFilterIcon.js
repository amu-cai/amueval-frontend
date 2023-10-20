import React from 'react';
import { Svg } from '../../utils/containers';
import arrow from '../../assets/icons/arrow.svg';
import filterIco from '../../assets/icons/filter_direction.svg';
import theme from '../../utils/theme';

const ColumnFilterIcon = (props) => {
  const renderSecondIcon = () => {
    if (props.index === props.active) {
      return (
        <Svg
          minWidth="8px"
          maxWidth="8px"
          src={filterIco}
          cursor={props.cursor}
          backgroundColor={theme.colors.dark}
          margin="0 0 0 2px"
          rotate={props.rotateIcon ? '0' : '180deg'}
        />
      );
    } else {
      return (
        <Svg
          minWidth="8px"
          maxWidth="8px"
          src={arrow}
          cursor={props.cursor}
          backgroundColor={theme.colors.dark}
          margin="0 0 2px 0"
        />
      );
    }
  };

  return (
    <>
      <Svg
        minWidth="8px"
        maxWidth="8px"
        rotate="180deg"
        src={arrow}
        cursor={props.cursor}
        backgroundColor={theme.colors.dark}
        margin="2px 0 0 0"
      />
      {renderSecondIcon()}
    </>
  );
};

export default ColumnFilterIcon;
