import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <Navbar />
            <main className="pt-16 min-h-[calc(100vh-64px)]">
                <Outlet />
            </main>
            <footer className="bg-white border-t border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Professional React Portfolio. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
