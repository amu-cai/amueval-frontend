import React from 'react';
import PropsTypes from 'prop-types';
import Button from "./Button";
import {SET_PAGE} from "../../utils/globals";
import {FlexRow} from "../../utils/containers";
import theme from "../../utils/theme";
import {ThemeProvider} from "@mui/material/styles";

const PagerButtons = (props) => {
  return (
        <FlexRow gap="6px">
          <ThemeProvider theme={theme.customTheme}>
          {Array.from({ length: props.totalPages }, (_, index) => (
                <Button
                    key={index}
                    handler={() => SET_PAGE(index + 1, props.setPageNr)}
                    backgroundColor={props.currentPage === index +1 ? theme.colors.green700 : theme.colors.white}
                    color={props.currentPage === index +1 ? theme.colors.white : '#5E5E5E'}
                    borderColor={theme.colors.green700}
                    height="32px"
                    width="32px"
                >{index + 1}
                </Button>
          ))}
          </ThemeProvider>
        </FlexRow>
  );
};

PagerButtons.propTypes = {
  currentPage: PropsTypes.number,
  totalPage: PropsTypes.number,
  setPageNr: PropsTypes.func

};

PagerButtons.defaultProps = {
  currentPage: 1,
};

export default PagerButtons;
