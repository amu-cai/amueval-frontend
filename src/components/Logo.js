import React from "react";
import {H1} from "../utils/fonts";
import theme from "../utils/theme";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <H1 as={Link} cursor='pointer' to='/' color={theme.colors.green}>
            Gonito.net
        </H1>
    );
}

export default Logo;