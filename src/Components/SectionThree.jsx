import BgImage02 from "../assets/images/bg-02.png";
import Frame01 from "../assets/images/frame-01.svg";
import Frame02 from "../assets/images/frame-02.svg";
import Frame03 from "../assets/images/frame-03.svg";

export default function SectionThree() {
    const stats = [
        { icon: Frame01, value: "38K", label: "Location" },
        { icon: Frame02, value: "30K", label: "Daily visited user" },
        { icon: Frame03, value: "50", label: "Workspaces" },
    ];

    return (
        <section className="bg-gray w-full py-20 px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
                {/* Left Side (Text + Stats) */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Why Become a Host?
                    </h2>
                    <div className="flex flex-col gap-4 mt-10 lg:mt-16 ">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                data-aos="flip-left"
                                className="bg-white w-full lg:w-90 rounded-xl flex items-center gap-4 shadow-sm hover:shadow-md transition duration-300 px-5 py-4"
                            >
                                <img src={item.icon} alt={item.label} className="w-10 h-12 object-contain" />
                                <div>
                                    <p className="text-3xl font-bold text-gray-800">{item.value}</p>
                                    <p className="text-gray-600 text-base capitalize">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side (Image) */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={BgImage02}
                        alt="Host Illustration"
                        className="w-full max-w-[600px] h-auto object-contain"
                    />
                </div>
                
            </div>
        </section>
    );
}
