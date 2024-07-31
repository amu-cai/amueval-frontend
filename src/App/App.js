import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../utils/theme';
import PopUpMessageManager from './components/PopUpMessageManager';
import RoutingManager from './components/RoutingManager';
import {BrowserRouter} from 'react-router-dom';
import NavBar from '../components/navigation/NavBar';
import LoggedBar from '../components/navigation/LoggedBar';
import LoggedBarCompressed from '../components/navigation/LoggedBarCompresssed';
import {IS_MOBILE} from '../utils/globals';
import {useSelector} from "react-redux";

const App = () => {
    const toggleLoggedBarCompressedValue = useSelector(
        (state) => state.navigation.toggleLoggedBarCompressed
    );
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <PopUpMessageManager>
                    <NavBar/>
                    {!IS_MOBILE() && toggleLoggedBarCompressedValue && <LoggedBarCompressed/>}
                    {!IS_MOBILE() && !toggleLoggedBarCompressedValue && <LoggedBar/>}
                    <RoutingManager/>
                </PopUpMessageManager>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
