import React from 'react';
import BgImage03 from "../assets/images/bg-03.png";

export default function SectionSeven() {
    return (
        <div
            className="w-[96%] md:w-[98%] lg:w-full max-w-[1340px] h-[110%] mx-2 lg:mx-auto mb-6 rounded-xl bg-cover bg-center flex items-center px-4 sm:px-8 md:px-12 lg:px-20 py-12"
            style={{ backgroundImage: `url(${BgImage03})`, height: '100%', minHeight: '300px' }}
        >
            <div className="text-white max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 text-shadow-lg">
                    Ready To Start Your <br /> Hosting Journey?
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 text-shadow-lg">
                    Join Our Growing Community And Start Earning Today.
                </p>
                <button
                    data-aos="fade-right"
                    className="bg-yellow transition-all text-black font-medium px-6 py-3 w-full lg:w-[220px] sm:w-auto"
                >
                    Sign Up As A Host
                </button>
            </div>
        </div>
    );
}
