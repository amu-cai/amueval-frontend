import { Svg, FlexRow } from '../../utils/containers';
import styled from 'styled-components';

const ImageButtonStyle = styled(FlexRow)`
  cursor: pointer;
  transition: transform ease-in-out 0.3s;
  transform: rotate(${({ rotate }) => (rotate ? rotate : '0')});
  * {
    cursor: pointer;
  }
  &:hover {
    transform: rotate(${({ rotate }) => (rotate ? rotate : '0')}), scale(1.2);
  }
`;

const ImageButton = ({
  handler,
  src,
  alt,
  width,
  height,
  as,
  href,
  download,
  rotate,
  margin,
  position,
  top,
  left,
}) => {
  return (
    <ImageButtonStyle
      as={as ? as : 'button'}
      href={href ? href : undefined}
      download={download ? download : undefined}
      onClick={handler}
      rotate={rotate}
      margin={margin}
      position={position}
      top={top}
      left={left}
    >
      <Svg src={src} alt={alt} size="cover" width={width} height={height} />
    </ImageButtonStyle>
  );
};

export default ImageButton;
