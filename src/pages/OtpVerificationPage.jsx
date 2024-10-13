import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OtpVerificationPage = () => {
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    // Function to validate the OTP (assuming it's 6 digits for this example)
    const validateOtp = (otp) => {
        const otpRegex = /^[0-9]{6}$/; // Ensures OTP is 6 digits
        return otpRegex.test(otp);
    };

    // Function to handle OTP submission
    const handleOtpSubmit = async (e) => {
        e.preventDefault();

        // Validate OTP
        if (!validateOtp(otp)) {
            setErrorMessage('Please enter a valid 6-digit OTP');
            return;
        }

        // Clear error message if OTP is valid
        setErrorMessage('');

        navigate('/welcome');

        // API call to verify OTP
        // try {
        //     const response = await axios.post('https://api.example.com/verify-otp', {
        //         otp,
        //         userId: localStorage.getItem('userId'), // Assuming userId is stored in localStorage after signup
        //     });

        //     // If OTP verification is successful
        //     if (response.status === 200) {
        //         setSuccessMessage('OTP verified successfully!');
        //         navigate('/welcome'); // Redirect to welcome screen after successful OTP verification
        //     } else {
        //         setErrorMessage('Invalid OTP. Please try again.');
        //     }
        // } catch (error) {
        //     setErrorMessage('Server error. Please try again later.');
        // }
    };

    // Function to resend the OTP
    const handleResendOtp = async () => {
        // try {
        //     const response = await axios.post('https://api.example.com/resend-otp', {
        //         userId: localStorage.getItem('userId'), // Assuming userId is stored in localStorage after signup
        //     });

        //     if (response.status === 200) {
        //         setSuccessMessage('OTP has been resent successfully.');
        //     } else {
        //         setErrorMessage('Failed to resend OTP. Please try again.');
        //     }
        // } catch (error) {
        //     setErrorMessage('Server error. Please try again later.');
        // }
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

                    {/* Success Message */}
                    {successMessage && (
                        <p className="text-green-500 mb-4">{successMessage}</p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Verify OTP
                    </button>
                </form>

                {/* Resend OTP Link */}
                <p
                    className="mt-6 text-center text-blue-500 hover:underline cursor-pointer"
                    onClick={handleResendOtp}
                >
                    Resend OTP
                </p>
            </div>
        </div>
    );
};

export default OtpVerificationPage;
