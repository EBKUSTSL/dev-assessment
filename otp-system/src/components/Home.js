import React from 'react';

const Home = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-semibold mb-4">Welcome to EBK Management System</h1>
                <button
                    onClick={handleGoBack}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default Home;
