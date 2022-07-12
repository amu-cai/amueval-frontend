import {ThemeProvider} from 'styled-components';
import theme from "./utils/theme";
import LandingPage from "./pages/LandingPage";
import Challenges from "./pages/Challanges/Challenges";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/elements/NavBar";
import Footer from "./components/sections/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <NavBar/>
                <Routes>
                    <Route path='/challenges' element={<Challenges/>}/>
                    <Route exact path='/' element={<LandingPage/>}/>
                    <Route element={<LandingPage/>}/>
                </Routes>
                <Footer/>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
