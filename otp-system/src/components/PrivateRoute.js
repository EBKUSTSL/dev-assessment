import React from 'react';
import { Navigate } from 'react-router-dom';
import { useOtp } from './OtpContext';

const PrivateRoute = ({ children }) => {
    const { isOtpVerified } = useOtp();

    return isOtpVerified ? children : <Navigate to="/" />;
};

export default PrivateRoute;
