"use client"
import React from 'react';
import  Link  from 'next/link';
import { FaBox } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-white shadow-md flex items-center justify-between px-4 py-2">
            <img src="https://api.logo.com/api/v2/images?logo=logo_d3420865-ea4b-410b-a2cd-51343c0c55e1&u=1715125842&width=500&height=400&fit=contain&margins=100&format=webp&quality=60" alt="Logo" className="w-10 h-10 rounded-md" />
            <Link href="/" className="text-xl font-semibold">HayMilda</Link>
            <button className="btn flex items-center">
                <FaBox className="mr-1" />
                Connect Wallet
            </button>
        </header>
    );
};

export default Header;
