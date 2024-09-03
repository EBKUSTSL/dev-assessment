import React from 'react';

const SuccessPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-green-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-green-700">Welcome!</h1>
                <p className="mt-4 text-lg text-green-600">You have successfully logged in.</p>
            </div>
        </div>
    );
};

export default SuccessPage;
