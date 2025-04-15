import React from 'react';
import PropsTypes from 'prop-types';
import Button from "./Button";
import { SET_PAGE } from "../../utils/globals";
import { FlexRow } from "../../utils/containers";
import theme from "../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";

const PagerButtons = ({ totalPages, currentPage, setPageNr }) => {
    const getPageList = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const first = 1;
            const last = totalPages;

            if (currentPage <= 3) {
                pages.push(first, 2, 3, 'right-ellipsis', last);
            } else if (currentPage >= totalPages - 2) {
                pages.push(first, 'left-ellipsis', totalPages - 2, totalPages - 1, last);
            } else {
                pages.push(first, 'left-ellipsis', currentPage, 'right-ellipsis', last);
            }
        }

        return pages;
    };

    return (
        <FlexRow gap="6px">
            <ThemeProvider theme={theme.customTheme}>
                {getPageList().map((page, index) => {
                    if (page === 'left-ellipsis' || page === 'right-ellipsis') {
                        return (
                            <Button
                                key={`ellipsis-${index}`}
                                backgroundColor={theme.colors.white}
                                color="#5E5E5E"
                                borderColor="transparent"
                                height="32px"
                                width="32px"
                                disabled
                            >
                                ...
                            </Button>
                        );
                    }

                    const isSelected = page === currentPage;

                    return (
                        <Button
                            key={page}
                            handler={() => SET_PAGE(page, setPageNr)}
                            backgroundColor={isSelected ? theme.colors.green700 : theme.colors.white}
                            color={isSelected ? theme.colors.white : '#5E5E5E'}
                            borderColor={theme.colors.green700}
                            height="32px"
                            width="32px"
                        >
                            {page}
                        </Button>
                    );
                })}
            </ThemeProvider>
        </FlexRow>
    );
};

PagerButtons.propTypes = {
    currentPage: PropsTypes.number,
    totalPages: PropsTypes.number,
    setPageNr: PropsTypes.func,
};

PagerButtons.defaultProps = {
    currentPage: 1,
};

export default PagerButtons;
