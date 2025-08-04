import React from 'react'
import Mask01 from "../assets/images/mask-01.svg"
import Mask02 from "../assets/images/mask-02.svg"
import Mask03 from "../assets/images/mask-03.svg"
import Mask04 from "../assets/images/mask-04.svg"

export default function SectionTwo() {
    return (
        <div className="overflow-x-hidden my-20 max-w-[1200px] px-4 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <p className="w-full text-[30px] sm:text-[36px] md:text-[45px] font-semibold leading-12 lg:leading-18">
                        Why join the myspaces <br />
                        host community?
                    </p>
                </div>
                <div className='lg:w-[221px] w-full'>
                    <button
                        data-aos="fade-left"
                        className="bg-orange transition-colors font-medium px-6 py-3 w-full sm:w-[221px] text-white text-shadow-lg"
                    >
                        Sign Up As A Host
                    </button>
                </div>
            </div>

            {/* Card grid section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    data-aos="fade-right"
                    className="h-[158px] flex flex-col justify-center items-center border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm"
                >
                    <img className="w-[55px]" src={Mask01} alt="" />
                    <p className="text-[18px] font-medium pt-2 text-center">No upfront costs</p>
                </div>
                <div
                    data-aos="fade-right"
                    className="h-[158px] flex flex-col justify-center items-center border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm"
                >
                    <img className="w-[55px]" src={Mask02} alt="" />
                    <p className="text-[18px] font-medium pt-2 text-center">Our customers, your users</p>
                </div>
                <div
                    data-aos="fade-left"
                    className="h-[158px] flex flex-col justify-center items-center border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm"
                >
                    <img className="w-[55px]" src={Mask03} alt="" />
                    <p className="text-[18px] font-medium pt-2 text-center">Guaranteed sales growth</p>
                </div>
                <div
                    data-aos="fade-left"
                    className="h-[158px] flex flex-col justify-center items-center border-2 border-gray-100 rounded-2xl p-4 bg-white shadow-sm"
                >
                    <img className="w-[55px]" src={Mask04} alt="" />
                    <p className="text-[18px] font-medium pt-2 text-center capitalize">Full control</p>
                </div>
            </div>
        </div>
    )
}
