import React from 'react';
import BgImage03 from "../assets/images/bg-03.png";
import Container from './Container';

export default function SectionSeven() {
    return (
        <div
            className="md:w-[98.4%] h-100 lg:h-110 mb-3 mx-2 lg:mx-3 rounded-xl bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${BgImage03})` }}
        >
            <Container className="w-400 text-white">
                <div className="max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 drop-shadow-lg">
                        Ready To Start Your <br /> Hosting Journey?
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6 drop-shadow-lg">
                        Join Our Growing Community And Start Earning Today.
                    </p>
                    <button
                        data-aos="fade-right"
                        className="bg-yellow transition-all text-black font-medium px-6 py-3 w-full sm:w-auto"
                    >
                        Sign Up As A Host
                    </button>
                </div>
            </Container>
        </div>
    );
}
