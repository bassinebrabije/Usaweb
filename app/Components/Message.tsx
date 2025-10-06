// components/Notification.js
import { useState, useEffect } from 'react';

export default function Notification() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 5000); // 5 seconds delay

        return () => clearTimeout(timer);
    }, []);

    const hideMessage = () => {
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="hidden md:block rounded-lg shadow-lg p-4 bg-[#cc1f23] fixed bottom-4 left-4 z-50">
            <div className="relative mb-2">
                <div className="flex items-center">
                    <img src="/logo-white.png" className="w-12 mr-4 rounded-full" alt="Logo" />
                </div>
                <button
                    className="absolute top-0 right-0 text-white hover:text-white focus:outline-none cursor-pointer"
                    onClick={hideMessage}
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <p className="text-white text-sm">
                Limited spots available for our 90-Day Executive Career Program. {' '}
                <a
                    href="#book-demo"
                    target="_blank"
                    className="underline"
                >
                    Schedule your call now!
                </a>
            </p>
        </div>
    );
}
