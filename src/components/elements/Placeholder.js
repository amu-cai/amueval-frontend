import React from "react";
import {FlexColumn} from "../../utils/containers";
import theme from "../../utils/theme";

const Placeholder = (props) => {
    return (
        <FlexColumn width='200px' height='200px'
                    backgroundColor={theme.colors.dark} color={theme.colors.white}>
            {props.children}
        </FlexColumn>
    );
}

export default Placeholder;