import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const PasswordResetPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate to redirect the user

    // Toggle the password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Password validation function (at least 8 characters, letters, and numbers)
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handlePasswordReset = (e) => {
        e.preventDefault();

        // Validate password
        if (!validatePassword(password)) {
            setErrorMessage('Password must be at least 8 characters long and contain both letters and numbers');
            return;
        }

        // Ensure passwords match
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        // Clear error message if validation is successful
        setErrorMessage('');

        // Simulate API call for password reset (this will be replaced with actual API call later)
        try {
            // Simulate API response
            const response = { status: 200 }; // Simulated response (200: success, 400: failure)

            if (response.status === 200) {
                setSuccessMessage('Your password has been reset successfully');
                setErrorMessage('');

                // Redirect to the dashboard after successful password reset
                setTimeout(() => {
                    navigate('/dashboard'); // Navigate to the dashboard route
                }, 2000); // Adding a delay of 2 seconds before redirection to show the success message
            } else {
                setErrorMessage('There was an error resetting your password. Please try again.');
            }
        } catch (error) {
            setErrorMessage('There was an error processing your request. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
                <form onSubmit={handlePasswordReset}>
                    {/* New Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">New Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 px-3 flex items-center"
                            >
                                {showPassword ? '🙈' : '👁️'} {/* You can use icons here */}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 px-3 flex items-center"
                            >
                                {showPassword ? '🙈' : '👁️'} {/* You can use icons here */}
                            </button>
                        </div>
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
            </div>
        </div>
    );
};

export default PasswordResetPage;
