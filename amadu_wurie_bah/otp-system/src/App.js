import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OTPSystem from './components/OTPSystem';
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OTPSystem />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
