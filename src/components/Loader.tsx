
import React, { useState, useEffect } from 'react';

interface LoaderProps {
    onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + 1;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onLoadingComplete(), 500); // Now outside logic
                }
                return Math.min(next, 100);
            });

            setNumber(prev => Math.min(prev + 1, 100));
        }, 50);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);


    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            {/* Main loader container */}
            <div className="relative w-full h-full flex items-center justify-center">

                {/* Progress bar container - centered */}
                <div className="absolute">
                    <div className="w-48 h-6 bg-gray-800 rounded overflow-hidden">
                        <div
                            className="h-full bg-white transition-all duration-100 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Number in bottom left */}
                <div className="absolute bottom-8 left-8">
                    <span className="text-white text-6xl font-light tracking-wider">
                        {number.toString().padStart(3, '0')}
                    </span>
                </div>

                {/* Background images as subtle references */}
                <div className="absolute inset-0 opacity-5">
                    <img
                        src="/lovable-uploads/c399ebb7-4f93-4a92-adee-97651b031199.png"
                        alt=""
                        className="absolute top-10 left-10 w-64 h-32 object-cover"
                    />
                    <img
                        src="/lovable-uploads/66afd234-129a-418f-ba13-e2346752adf9.png"
                        alt=""
                        className="absolute bottom-20 right-10 w-80 h-40 object-cover"
                    />
                    <img
                        src="/lovable-uploads/5becfead-e141-4ad2-ad27-ea7065cb1d94.png"
                        alt=""
                        className="absolute top-1/2 right-20 w-48 h-48 object-cover transform -translate-y-1/2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Loader;