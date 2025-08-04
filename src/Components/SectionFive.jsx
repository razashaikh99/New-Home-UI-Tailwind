import React from 'react';
import ProfileImg01 from "../assets/images/profile-01.png";
import ProfileImg02 from "../assets/images/profile-02.png";
import Container from './Container';

const testimonials = [
    {
        img: ProfileImg01,
        name: "Guy Hawkins.",
        title: "Vacation Host",
        message:
            "Lorem ipsum dolor sit amet consectetur. Id laoreet netus vel id pellentesque tristique massa. Purus quis eleifend enim vestibulum. Lacus posuere orci elit viverra nunc elementum. Viverra.",
    },
    {
        img: ProfileImg02,
        name: "Emily R.",
        title: "Vacation Host",
        message:
            "Lorem ipsum dolor sit amet consectetur. Id laoreet netus vel id pellentesque tristique massa. Purus quis eleifend enim vestibulum. Lacus posuere orci elit viverra nunc elementum. Viverra.",
    },
    {
        img: ProfileImg02,
        name: "James T.",
        title: "Vacation Host",
        message:
            "Lorem ipsum dolor sit amet consectetur. Id laoreet netus vel id pellentesque tristique massa. Purus quis eleifend enim vestibulum. Lacus posuere orci elit viverra nunc elementum. Viverra.",
    },
    {
        img: ProfileImg01,
        name: "Sophia L.",
        title: "Business Host",
        message:
            "Lorem ipsum dolor sit amet consectetur. Id laoreet netus vel id pellentesque tristique massa. Purus quis eleifend enim vestibulum. Lacus posuere orci elit viverra nunc elementum. Viverra.",
    },
];

export default function SectionFive() {
    return (
        <div className="overflow-x-hidden py-20 bg-gray-100  w-[98%] mx-auto rounded-xl">
            <Container className='mx-auto'>
                <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12">
                    What Our Hosts Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((a, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md"
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-offset="200"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="flex items-center mb-4">
                                <img src={a.img} alt={a.name} className="h-16 w-16 rounded-full object-cover" />
                                <div className="ml-4">
                                    <p className="text-lg font-semibold">{a.name}</p>
                                    <p className="text-sm text-gray-500">{a.title}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-[15px]">{a.message}</p>
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className='flex justify-center gap-8 mt-12'>
                    <span className='p-2 bg-[#FB8053] rounded-full'></span>
                    <span className='p-2 bg-[#FB8053] opacity-50 rounded-full'></span>
                    <span className='p-2 bg-[#FB8053] opacity-50 rounded-full'></span>
                    <span className='p-2 bg-[#FB8053] opacity-50 rounded-full'></span>
                </div>
            </Container>
        </div >
    );
}

