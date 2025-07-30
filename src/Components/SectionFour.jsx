import React from 'react';
import BgImage from "../assets/images/bg-img.png";

export default function SectionFour() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      desc: "Create your free hosting profile in just a few clicks."
    },
    {
      number: "02",
      title: "List Your Space",
      desc: "Add details, upload high-quality photos, and set your availability."
    },
    {
      number: "03",
      title: "Set Your Preferences",
      desc: "Choose pricing, house rules, and guest requirements that work for you."
    },
    {
      number: "04",
      title: "Welcome Guests",
      desc: "Connect with travelers, approve bookings, and provide a great experience."
    },
    {
      number: "05",
      title: "Get Paid Securely",
      desc: "Receive payments hassle-free through our secure system."
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <div className='hidden lg:block'>
        <div className='mb-50 pt-16'>
          <p className='text-center text-[45px] font-semibold'>How It Works</p>
        </div>
        <div className="bg-cover mx-30">
          <div className='absolute ml-12'>
            <img className='' src={BgImage} alt="" />
          </div>

          <div className="relative bottom-29.5 right-2">
            <div className='flex justify-center items-center gap-70'>

              {/* DIV 01 */}
              <div data-aos="zoom-in-right" className='flex flex-col'>
                <span className='text-[105.24px] leading-27 font-semibold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent'>01</span>
                <span className='w-8 h-8 ml-10 bg-white border-4 border-black rounded-full'></span>
                <div className='ml-6'>
                  <p className='font-semibold text-[30px]'>Sign Up</p>
                  <p className='text-[18px]'>Create your free hosting <br /> profile in just a few clicks.</p>
                </div>
              </div>

              {/* DIV 02 */}
              <div data-aos="zoom-in-left" className='flex flex-col'>
                <span className='text-[105.24px] leading-27 font-semibold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent'>02</span>
                <span className='w-8 h-8 ml-12 bg-white border-4 border-black rounded-full'></span>
                <div className='ml-8'>
                  <p className='font-semibold text-[30px]'>List Your Space</p>
                  <p className='text-[18px]'>Add details, upload high-quality <br /> photos, and set your availability.</p>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div className="relative bottom-40 pl-125">
            {/* DIV 03 */}
            <div data-aos="zoom-in-up" className='flex flex-col'>
              <span className='text-[105.24px] leading-27 font-semibold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent'>03</span>
              <span className='w-8 h-8 ml-14 bg-white border-4 border-black rounded-full'></span>
              <div className='ml-8'>
                <p className='font-semibold text-[30px]'>Set Your Preferences</p>
                <p className='text-[18px]'>Choose pricing, house rules, and <br /> guest requirements <br /> that work for you.</p>
              </div>
            </div>
          </div>

          <div className="relative bottom-51 left-5">
            <div className='flex justify-center items-center gap-70'>

              {/* DIV 04 */}
              <div data-aos="zoom-in-right" className='flex flex-col'>
                <span className='text-[105.24px] leading-27 font-semibold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent'>04</span>
                <span className='w-8 h-8 ml-14 bg-white border-4 border-black rounded-full'></span>
                <div className='ml-8'>
                  <p className='font-semibold text-[30px]'>Welcome Guests</p>
                  <p className='text-[18px]'>Connect with travelers, approve bookings, <br /> and provide a great experience.</p>
                </div>
              </div>

              {/* DIV 05 */}
              <div data-aos="zoom-in-left" className='flex flex-col'>
                <span className='text-[105.24px] leading-27 font-semibold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent'>05</span>
                <span className='w-8 h-8 ml-14 bg-white border-4 border-black rounded-full'></span>
                <div className='ml-8'>
                  <p className='font-semibold text-[30px]'>Get Paid Securely</p>
                  <p className='text-[18px]'>Receive payments hassle-free <br /> through our secure system.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className='lg:hidden px-6 py-12'>
        <p className='text-center text-3xl font-semibold mb-10'>How It Works</p>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-gradient-to-b from-gray-700 to-white bg-clip-text text-transparent text-4xl font-bold">
                {step.number}
              </div>
              <div>
                <p className="text-xl font-semibold">{step.title}</p>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-80 lg:w-full lg:flex justify-center pb-10 mx-auto lg:relative bottom-28'>
        <button
          data-aos="fade-up"
          className="bg-yellow transition-colors font-medium px-6 py-3 w-full sm:w-[221px]"
        >
          Start Hosting Today
        </button>
      </div>
    </>
  );
}
