import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { login } from '../api'; // Placeholder for backend API integration

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return emailRegex.test(email);
    };


    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, letters, and numbers
        return passwordRegex.test(password);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // Frontend validation
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage('Password must be at least 8 characters long and contain both letters and numbers');
            return;
        }

        // Clear error message before proceeding
        setErrorMessage('');

        // Placeholder for backend login logic
        {/*try {
            const response = await login(email, password); // Replace with actual API call
            localStorage.setItem('token', response.data.token); // Store the JWT token
            console.log('Login successful:', response.data);
        } catch (error) {
            setErrorMessage('Invalid login credentials or server error');
        }*/}
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-800">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handleLogin}>
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

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        Login
                    </button>
                </form>
                {/* Sign Up Link */}
                <p className="mt-6 text-center">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-semibold text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
