import {createTheme} from "@mui/material/styles";
import colors from './colors';

const customTheme = createTheme({
    palette: {
        primary: {
            main: colors.green700
        },
    },
});

export default customTheme;
