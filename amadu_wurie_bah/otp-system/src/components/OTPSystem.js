import React from 'react';
import OtpInputWithValidation from './OtpInputWithValidation';

const OTPSystem = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                < OtpInputWithValidation numberOfDigits={5} />
            </div>
        </div>

    );
};

export default OTPSystem;
