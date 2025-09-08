import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-green-700 text-white p-2 flex justify-between items-center z-50">
            <span className="text-sm">We ve just launched a new feature! Check out the new dashboard.</span>
            <button className="text-sm hover:text-gray-200 focus:outline-none">
                ✕
            </button>
        </div>
    );
};

export default Banner;