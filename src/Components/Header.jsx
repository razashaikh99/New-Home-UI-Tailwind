import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";
import Icon_01 from "../assets/images/icon-01.svg";
import Icon_02 from "../assets/images/icon-02.svg";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white top-0 left-0 z-50">
            <div className="max-w-7xl mx-4 lg:mx-auto px-4 sm:px-6 lg:px-5 flex justify-between items-center h-20">
                {/* Logo */}
                <div>
                    <img src={Logo} alt="Logo" className="w-10 lg:w-12 lg:mr-12" />
                </div>

                {/* Desktop Menu (only lg and above) */}
                <nav className="hidden lg:flex gap-10 text-lg pl-0 lg:ml-40">
                    <ul className='flex justify-center items-center gap-10'>
                        <li className='cursor-pointer hover:text-gray-700 hover:underline transition-all duration-300 underline-offset-4'>HOME</li>
                        <li className='cursor-pointer hover:text-gray-700 hover:underline transition-all duration-300 underline-offset-4'>PAGES</li>
                        <li className='cursor-pointer hover:text-gray-700 hover:underline transition-all duration-300 underline-offset-4'>PROPERTY</li>
                        <li className='cursor-pointer hover:text-gray-700 hover:underline transition-all duration-300 underline-offset-4'>BLOG</li>
                    </ul>
                </nav>

                {/* Action buttons (only lg and above) */}
                <div className="hidden lg:flex gap-6 text-lg items-center">
                    <div className="flex items-center gap-2">
                        <img src={Icon_01} alt="Join Us" className="w-4" />
                        <button className="hover:text-gray-700 cursor-pointer">JOIN US</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={Icon_02} alt="Add Property" className="w-5" />
                        <button className="hover:text-gray-700 cursor-pointer">ADD PROPERTY</button>
                    </div>
                </div>

                {/* Hamburger Button (visible on sm & md) */}
                <div className="block lg:hidden">
                    {/* <button onClick={() => setMenuOpen(!menuOpen)}> */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl font-bold cursor-pointer">
                        {menuOpen ? '✕' : '☰'}
                    </button>
                    {/* </button> */}
                </div>
            </div>

            {/* Mobile Menu (visible on sm & md only) */}
            {menuOpen && (
                <div className="block lg:hidden bg-white px-4 py-4 space-y-4 text-center text-gray-700 font-medium shadow">
                    <ul className="space-y-2">
                        <li className="block cursor-pointer hover:underline underline-offset-4">HOME</li>
                        <li className="block cursor-pointer hover:underline underline-offset-4">PAGES</li>
                        <li className="block cursor-pointer hover:underline underline-offset-4">PROPERTY</li>
                        <li className="block cursor-pointer hover:underline underline-offset-4">BLOG</li>
                    </ul>
                    <hr className="my-2" />
                    <div className="flex justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <img src={Icon_01} alt="Join Us" className="w-4" />
                            <button className="cursor-pointer">JOIN US</button>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Icon_02} alt="Add Property" className="w-4" />
                            <button className="cursor-pointer">ADD PROPERTY</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
