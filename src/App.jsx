import React from 'react';
import MainPage from "./pages/mainPage/index.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./pages/about/index.jsx";
import Portfolios from "./pages/portfolios/index.jsx";
import Navbar from "./components/navbar/index.jsx";

function App(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/portfolios" element={<Portfolios/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;