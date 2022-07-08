import React from "react";
import {FlexRow, Svg} from "../../utils/containers";
import CircleNumber from "./CircleNumber";
import polygon from '../../assets/polygon.svg';
import styled from "styled-components";
import theme from "../../utils/theme";

const LeftArrow = styled(Svg)`
  background-color: ${({backgroundColor}) => backgroundColor};
  cursor: ${({backgroundColor}) => (backgroundColor === 'transparent') ? 'auto' : 'pointer'};
`;

const RightArrow = styled(Svg)`
  display: ${({display}) => display};
  transform: rotate(180deg);
  cursor: ${({backgroundColor}) => (backgroundColor === 'transparent') ? 'auto' : 'pointer'};
`;

const Pager = (props) => {
    const [page, setPage] = React.useState(1);

    const nextPage = () => {
        if (page !== props.pages) {
            let newPage = page + 1;
            setPage(newPage);
        }
    }

    const previousPage = () => {
        if (page !== 1) {
            let newPage = page - 1;
            setPage(newPage);
        }
    }

    return (
        <FlexRow gap='14px'>
            <LeftArrow as='button' src={polygon} onClick={previousPage}
                       backgroundColor={(page === 1) ? 'transparent' : theme.colors.dark}/>
            <CircleNumber number={page}/>
            <RightArrow as='button' src={polygon} onClick={nextPage}
                        backgroundColor={(page === props.pages) ? 'transparent' : theme.colors.dark}/>
        </FlexRow>
    );
}

export default Pager;