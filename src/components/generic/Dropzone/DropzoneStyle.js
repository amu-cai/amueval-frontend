import styled from 'styled-components';
import {Container} from "../../../utils/containers";
import theme from "../../../utils/theme";

const DropzoneStyle = styled(Container)`
  #dropzoneWrapper {
    width: 100%;
  }
  
  .dropzoneArea {
    border: 1px dashed ${theme.colors.black900};
    border-radius: 8px;
    height: 206px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${theme.colors.black700};
  }
  
  .dropzoneArea:hover {
    cursor: pointer;
  }
  
  .onDragEnter {
    background: ${theme.colors.gray200};
  }

  .onError {
    border: 1px dashed ${theme.colors.red};
  }

  .dropzoneText1 {
    font-size: 22px;
    margin: 16px 0;
  }

  .dropzoneText2 {
    font-size: 16px;
    margin: 0;
  }
  
  .dropzoneFilesWrapper {
    border: 1px solid ${theme.colors.black900};
    border-radius: 8px;
    margin-top: 16px;
    position: relative;
  }
  
  .dropzoneFiles {
    list-style-type: none;
    margin: 0;
    padding: 10px;
  }

  .dropzoneFile {
    display: flex;
    align-items: center;
    margin-left: 24px;
  }
  
  .dropzoneFile p {
    color: ${theme.colors.black700};
  }

  .dropzoneFile svg {
    margin-right: 4px;
  }
  
  .dropzoneFileFileName {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 4px;
  }

  .dropzoneFileFileSize {
    font-weight: lighter;
    font-size: 11px;
    margin-top: 0;
  }
  
  .dropzoneFileRemove {
    position: absolute;
    right: 12px;
    top: 16px;
  }
  
  .dropzoneFileRemove:hover {
    cursor: pointer;
  }
`;

export default DropzoneStyle;