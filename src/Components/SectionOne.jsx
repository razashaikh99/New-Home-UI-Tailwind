import BgImage from "../assets/images/bg-01.png";
import Container from "./Container";

export default function SectionOne() {
    return (
        <div
            className="mt-23 lg:mt-24 md:w-[98.4%] h-120 lg:h-140 mb-3 mx-2 lg:mx-3 rounded-xl bg-cover bg-center flex items-center"
            style={{
                backgroundImage: `url(${BgImage})`,
                minHeight: "300px",
            }}
        >
            <Container className="w-full py-12 flex flex-col justify-center">
                <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-12 lg:leading-tight mb-4 text-shadow-lg">
                    Earn More Host Smarter <br />
                    Join The Community.
                </h1>
                <p className="text-white text-base sm:text-lg md:text-[18px] mb-6 max-w-2xl text-shadow-lg">
                    Turn your space into an opportunity, join a network of trusted hosts and start earning today.
                </p>
                <button
                    data-aos="fade-right"
                    className="bg-yellow transition-colors font-medium px-6 py-3 w-full sm:w-[221px]"
                >
                    Sign Up As A Host
                </button>
            </Container>
        </div>
    );
}

// import BgImage from "../assets/images/bg-01.png"

// export default function SectionOne() {
//     return (
//         <div
//             className="w-374 mx-auto mb-3 ml-3 rounded-xl bg-cover bg-center flex items-center"
//             style={{ backgroundImage: `url(${BgImage})` }}
//         >
//             <div className="w-full h-150 pl-24 flex flex-col justify-center">
//                 <h1 className="text-white text-6xl font-bold leading-18 mb-4">
//                     Earn More Host Smarter <br />
//                     Join The Community.
//                 </h1>
//                 <p className="text-white text-[18px] mb-6">
//                     Turn your space into an opportunity, join a network of trusted hosts and start earning today.
//                 </p>
//                 <button data-aos="fade-right" className="bg-yellow w-[221px] font-medium px-6 py-3">
//                     Sign Up As A Host
//                 </button>
//             </div>
//         </div>
//     );
// }

