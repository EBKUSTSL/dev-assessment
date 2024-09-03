import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOtp } from './OtpContext';

const correctOTP = "12345";

function OtpInputWithValidation({ numberOfDigits }) {
    const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
    const [otpError, setOtpError] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const otpBoxReference = useRef([]);
    const navigate = useNavigate();
    const { verifyOtp } = useOtp(); // Use the context

    function handleChange(value, index) {
        let newArr = [...otp];
        newArr[index] = value;
        setOtp(newArr);

        if (value && index < numberOfDigits - 1) {
            otpBoxReference.current[index + 1].focus();
        }
    }

    function handleKeyUp(e, index) {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            otpBoxReference.current[index - 1].focus();
        } else if (e.key === "Enter") {
            handleSubmit();
        }
    }

    function handlePaste(e) {
        const pastedData = e.clipboardData.getData('text').slice(0, numberOfDigits).split('');
        if (pastedData.length > 0) {
            setOtp(pastedData);
            pastedData.forEach((digit, idx) => {
                otpBoxReference.current[idx].value = digit;
            });
            otpBoxReference.current[Math.min(pastedData.length, numberOfDigits) - 1].focus();
        }
    }

    function handleSubmit() {
        setIsSubmitted(true);
        if (otp.includes("")) {
            setOtpError("❌ Please fill in all OTP fields.");
        } else if (otp.join("") !== correctOTP) {
            setOtpError("❌ Wrong OTP!");
            setOtp(new Array(numberOfDigits).fill("")); // Clear input fields
            otpBoxReference.current[0].focus();
        } else {
            setOtpError(null);
            verifyOtp(); // Update context to mark OTP as verified
            navigate('/Home'); // Redirect to the home page
        }
    }

    return (
        <div className="w-full max-w-sm mx-auto">
            <p className="text-2xl font-medium text-gray-800 mt-12 text-center">OTP Input With Validation</p>

            <div className="bg-gray-800 text-white mt-4 p-4 rounded-md">
                <p className="text-base">Enter the OTP below and click Verify.</p>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        value={digit}
                        maxLength={1}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyUp={(e) => handleKeyUp(e, index)}
                        onPaste={handlePaste}
                        ref={(reference) => (otpBoxReference.current[index] = reference)}
                        className="border w-12 h-12 text-white text-center p-2 rounded-md block bg-black focus:border-2 focus:outline-none appearance-none"
                    />
                ))}
            </div>

            {isSubmitted && otpError && (
                <p className="text-lg text-red-500 mt-4 text-center">{otpError}</p>
            )}

            <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
                Verify OTP
            </button>
        </div>
    );
}

export default OtpInputWithValidation;
