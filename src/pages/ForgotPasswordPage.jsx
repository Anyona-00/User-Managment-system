import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return emailRegex.test(email);
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        // Validate email
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        // Clear error message if validation is successful
        setErrorMessage('');
        setSuccessMessage('Password reset link has been sent to your email');


        setTimeout(() => {
            navigate('/reset-password'); // Redirect to password reset page after 5 seconds
        }, 5000);

        // API call to send password reset link
        /*
        try {
            const response = await axios.post('https://api.example.com/forgot-password', {
                email,
            });

            if (response.status === 200) {
                // Show success message when email is sent
                setSuccessMessage('Password reset link has been sent to your email');
                setErrorMessage('');
                
                // Redirect to password reset page after 5 seconds
                setTimeout(() => {
                    navigate('/password-reset');
                }, 5000);
            } else {
                setErrorMessage('Email not found');
            }
        } catch (error) {
            setErrorMessage('There was an error processing your request. Please try again later.');
        }
        */
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
                <form onSubmit={handleForgotPassword}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

                    {/* Success Message */}
                    {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Reset Password
                    </button>
                </form>

                {/* Link back to login */}
                <p className="mt-6 text-center text-blue-500 hover:underline cursor-pointer">
                    Go back to <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
