import cubeIcon from '../../../../../assets/icons/cube_ico.svg';
import theme from '../../../../../utils/theme';
import { IS_MOBILE } from '../../../../../utils/globals';
import { Svg } from '../../../../../utils/containers';

const cubeIconRender = () => {
  if (IS_MOBILE()) {
    return (
      <Svg
        src={cubeIcon}
        width="14px"
        height="14px"
        margin="4px 0 0 0"
        backgroundColor={theme.colors.green}
      />
    );
  }
  return (
    <Svg
      src={cubeIcon}
      width="20px"
      height="20px"
      size="cover"
      margin="2px 0 0 0"
      backgroundColor={theme.colors.green}
    />
  );
};

export default cubeIconRender;
