import React from 'react';

const Footer = () => (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                Salman Ajmal
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                &copy; {new Date().getFullYear()} Salman Ajmal. All rights reserved.
            </div>
            <div className="text-gray-400 dark:text-gray-500 text-xs mt-2 md:mt-0">
                Building digital experiences with precision and purpose.
            </div>
        </div>
    </footer>
);

export default Footer; 