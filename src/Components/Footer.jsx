import React from 'react';
import Logo from "../assets/images/logo.png";

export default function Footer() {
    return (
        <div className='mt-6 bg-gray mx-auto px-4 sm:px-6 lg:px-24 pt-20 pb-8 mb-4 rounded-xl'>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-8">
                {/* Left Block */}
                <div className="max-w-lg">
                    <div data-aos="flip-up" className="flex items-center mb-4">
                        <img className='h-[60px] w-auto' src={Logo} alt="Logo" />
                        <p className='font-bold text-xl pl-4'>New Home</p>
                    </div>
                    <p className='text-[16px] text-[#333333] mb-6'>
                        A Contemporary Theme We Designed Specifically For <br />
                        Real Estate And Property Showcase Websites, <br />
                        Equipped With Every Option, Element And Feature <br />
                        Your Site May Need.
                    </p>
                    <p className='text-[16px] cursor-pointer'>
                        Read More
                    </p>
                </div>

                {/* Contact Us */}
                <div>
                    <ul>
                        <li data-aos="flip-up" className='text-[20px] font-medium pb-2'>Contact Us</li>
                        <li className='text-[#333333] text-[16px] py-1'>Staten Island, NY 10314, USA</li>
                        <li className='text-[#333333] text-[16px] py-1'>+111 222 369 45</li>
                        <li className='text-[#333333] text-[16px] py-1'>+123 456 789 11</li>
                        <li className='text-[#333333] text-[16px] py-1'>newhome@example.com</li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <ul>
                        <li data-aos="flip-up" className='text-[20px] font-medium pb-2'>Categories</li>
                        <li className='text-[#333333] text-[16px] py-1'>Recent Property</li>
                        <li className='text-[#333333] text-[16px] py-1'>To Sell</li>
                        <li className='text-[#333333] text-[16px] py-1'>To Buy</li>
                        <li className='text-[#333333] text-[16px] py-1'>To Rent</li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <ul>
                        <li data-aos="flip-up" className='text-[20px] font-medium pb-2'>Links</li>
                        <li className='text-[#333333] text-[16px] py-1'>Latest News</li>
                        <li className='text-[#333333] text-[16px] py-1'>About Us</li>
                        <li className='text-[#333333] text-[16px] py-1'>FAQ Page</li>
                        <li className='text-[#333333] text-[16px] py-1'>Contact Us</li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <hr className='border-t mt-4 mb-6' />

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center text-[#333333] text-[16px] gap-4">
                <div>
                    © 2023 Qode Interactive, All Rights Reserved
                </div>
                <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
                    <span className='font-semibold'>Follow Us:</span>
                    <span className='hover:text-gray-600 cursor-pointer'>Instagram</span>
                    <span className='hover:text-gray-600 cursor-pointer'>Facebook</span>
                    <span className='hover:text-gray-600 cursor-pointer'>Twitter</span>
                    <span className='hover:text-gray-600 cursor-pointer'>Youtube</span>
                </div>
            </div>
        </div>
    );
}
