import React from 'react';
import Mask01 from "../assets/images/mask-01.svg";
import Mask02 from "../assets/images/mask-02.svg";
import Mask03 from "../assets/images/mask-03.svg";
import Mask04 from "../assets/images/mask-04.svg";
import Container from './Container';

export default function SectionTwo() {
    return (
        <Container className="overflow-x-hidden overflow-y-hidden my-20">
            {/* Heading & Button Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-[30px] sm:text-[36px] md:text-[45px] font-semibold leading-tight text-black">
                        Why join the myspaces <br /> host community?
                    </h2>
                </div>
                <div>
                    <button
                        data-aos="fade-left"
                        className="bg-orange text-white text-base font-medium px-6 py-3 w-full sm:w-auto shadow-md hover:bg-orange/90 transition-all duration-300"
                    >
                        Sign Up As A Host
                    </button>
                </div>
            </div>

            {/* Features Card Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: Mask01, title: "No upfront costs", anim: "fade-right" },
                    { icon: Mask02, title: "Our customers, your users", anim: "fade-right" },
                    { icon: Mask03, title: "Guaranteed sales growth", anim: "fade-left" },
                    { icon: Mask04, title: "Full control", anim: "fade-left" },
                ].map((card, i) => (
                    <div
                        key={i}
                        data-aos={card.anim}
                        className="h-[158px] flex flex-col justify-center items-center border border-gray-200 rounded-2xl p-4 bg-white shadow-sm transition-transform hover:scale-[1.02]"
                    >
                        <img src={card.icon} className="w-[55px] mb-2" alt={card.title} />
                        <p className="text-[18px] font-medium text-center capitalize">{card.title}</p>
                    </div>
                ))}
            </div>
        </Container>
    );
}
