import React, { createContext, useContext, useState } from 'react';


const OtpContext = createContext();


export const OtpProvider = ({ children }) => {
    const [isOtpVerified, setIsOtpVerified] = useState(false);

    const verifyOtp = () => setIsOtpVerified(true);
    const resetOtpVerification = () => setIsOtpVerified(false);

    return (
        <OtpContext.Provider value={{ isOtpVerified, verifyOtp, resetOtpVerification }}>
            {children}
        </OtpContext.Provider>
    );
};


export const useOtp = () => useContext(OtpContext);
