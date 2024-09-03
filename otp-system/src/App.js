import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OTPSystem from './components/OTPSystem';
import Home from './components/Home';
import { OtpProvider } from './components/OtpContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <OtpProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<OTPSystem />} />
                    <Route
                        path="/Home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </OtpProvider>
    );
}

export default App;
