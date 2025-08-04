import React from 'react'
import MinusIcon from "../assets/images/minus-icon.svg"
import PlusIcon from "../assets/images/plus-icon.svg"
import Container from './Container'

export default function SectionSix() {
    return (
        <Container className='w-full mt-10 mb-16'>
            <div className='py-12'>
                <p className='text-3xl sm:text-4xl text-center font-semibold'>Frequently Asked Questions</p>
            </div>
            <hr />

            {/* Question 1 */}
            <div className="flex flex-row justify-between items-start sm:items-center py-5 gap-4">
                <div data-aos="fade-right">
                    <p className='text-lg sm:text-xl font-medium'>How Do I Become A Host?</p>
                </div>
                <div>
                    <div className="bg-[#EFEEEE] rounded w-8 h-8 flex items-center">
                        <img className='p-2' src={MinusIcon} alt="Minus Icon" />
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className="pb-5">
                <p className='text-base sm:text-[18px] leading-7'>
                    Simply sign up, create your profile, list your space, and start receiving <br className='hidden sm:block' />
                    bookings. It’s free to get started!
                </p>
            </div>
            {/* <hr /> */}

            {/* Repeatable Questions */}
            {[
                "Is Hosting Safe?",
                "How Much Can I Earn As A Host?",
                "Can I Choose Who Stays At My Place?",
                "What Kind Of Support Is Available For Hosts?"
            ].map((question, index) => (
                <div key={index}>
                    <hr />
                    <hr className='mt-6' />
                    <div className="flex flex-row justify-between items-start sm:items-center py-5 gap-4">
                        <div data-aos="fade-right">
                            <p className='text-lg sm:text-xl font-medium'>{question}</p>
                        </div>
                        <div>
                            <div className="bg-[#EFEEEE] rounded w-8 h-8">
                                <img className='p-2' src={PlusIcon} alt="Plus Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <hr />
        </Container>
    )
}
