import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const WelcomePage = () => {
    // Get the window size to ensure the confetti covers the entire screen
    const { width, height } = useWindowSize();

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            {/* Confetti Effect */}
            <Confetti width={width} height={height} />

            {/* Welcome Message */}
            <div className="text-center">
                <h1 className="text-5xl font-bold text-blue-800 mb-6">
                    Welcome, User!
                </h1>
                <p className="text-xl text-gray-700">
                    We're glad to have you here. Enjoy your journey!
                </p>
            </div>
        </div>
    );
};

export default WelcomePage;
