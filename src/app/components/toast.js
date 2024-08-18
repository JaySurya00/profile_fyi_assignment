'use client'
import React, { useState, useEffect } from 'react';

const Toast = ({ message, onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
                if (onClose) onClose();
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!visible) return null;

    return (
        <div className="fixed top-4 right-4 z-50 p-2 bg-gray-400 text-white rounded-lg shadow-lg flex items-center">
            <p className="text-sm flex-grow">{message}</p>
            <button onClick={() => setVisible(false)} className="ml-4 text-lg font-semibold">&times;</button>
        </div>
    );
};

export default Toast;
