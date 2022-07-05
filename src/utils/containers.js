import styled from 'styled-components';

const Container = styled.div`
  padding: ${({setPadding}) => setPadding ? setPadding : '0'};
  margin: ${({setMargin}) => setMargin ? setMargin : '0'};
  width: ${({setWidth}) => setWidth ? setWidth : 'auto'};
  max-width: ${({setMaxWidth}) => setMaxWidth ? setMaxWidth : 'auto'};
  min-width: ${({setMinWidth}) => setMinWidth ? setMinWidth : 'auto'};
  height: ${({setHeight}) => setHeight ? setHeight : 'auto'};
  max-height: ${({setMaxHeight}) => setMaxHeight ? setMaxHeight : 'auto'};
  min-height: ${({setMinHeight}) => setMinHeight ? setMinHeight : 'auto'};
  background-color: ${({setBackgroundColor}) => setBackgroundColor ? setBackgroundColor : 'transparent'};
  border-radius: ${({setBorderRadius}) => setBorderRadius ? setBorderRadius : '0'};
  box-shadow: ${({shadow}) => shadow ? shadow : 'none'};
  gap: ${({setGap}) => setGap ? setGap : '0'};
  border: ${({setBorder}) => setBorder ? setBorder : 'none'};
  cursor: ${({setCursor}) => setCursor ? setCursor : 'auto'};
  display: ${({setDisplay}) => setDisplay ? setDisplay : 'block'};
  opacity: ${({setOpacity}) => setOpacity ? setOpacity : '1'};
  outline: ${({setOutline}) => setOutline ? setOutline : 'none'};
  transition: opacity 0.3s ease-in-out;
`;

const FlexRow = styled(Container)`
  display: ${({setDisplay}) => setDisplay ? setDisplay : 'flex'};
  justify-content: ${({alignment}) => alignment ? alignment : 'center'};
  align-items: ${({alignmentY}) => alignmentY ? alignmentY : 'center'};
`;

const FlexColumn = styled(FlexRow)`
  flex-direction: column;
  justify-content: ${({alignmentY}) => alignmentY ? alignmentY : 'center'};
  align-items: ${({alignment}) => alignment ? alignment : 'center'};
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: ${({setTemplateColumns}) => setTemplateColumns ? setTemplateColumns : 'auto'};
  grid-template-rows: ${({setTemplateRows}) => setTemplateRows ? setTemplateRows : 'auto'};
`;

export {Container, FlexRow, FlexColumn, Grid};