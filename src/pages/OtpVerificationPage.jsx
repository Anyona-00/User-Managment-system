import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpVerificationPage = () => {
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // To redirect after successful OTP verification

    // Function to validate the OTP (assuming it's 6 digits for this example)
    const validateOtp = (otp) => {
        const otpRegex = /^[0-9]{6}$/; // Ensures OTP is 6 digits
        return otpRegex.test(otp);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();

        // Validate OTP
        if (!validateOtp(otp)) {
            setErrorMessage('Please enter a valid 6-digit OTP');
            return;
        }

        // Clear error message if OTP is valid
        setErrorMessage('');

        // Simulate API call to verify OTP (this will be replaced with actual API call)
        console.log('OTP entered:', otp);

        // Simulate successful OTP verification
        // Redirect to another page (e.g., dashboard) after successful verification
        navigate('/dashboard'); // Replace '/dashboard' with the actual route
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">OTP Verification</h2>
                <form onSubmit={handleOtpSubmit}>
                    {/* OTP Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Enter OTP</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <p className="text-red-500 mb-4">{errorMessage}</p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Verify OTP
                    </button>
                </form>

                {/* If needed, provide a "Resend OTP" link */}
                <p className="mt-6 text-center text-blue-500 hover:underline cursor-pointer">
                    Resend OTP
                </p>
            </div>
        </div>
    );
};

export default OtpVerificationPage;
