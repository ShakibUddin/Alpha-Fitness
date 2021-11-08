import React from 'react';
import mainbg from "../../../images/mainbg.jpg";

const Hero = (props) => {
    const handleOnGetStartedClick = () => {
        if (props.gotoOnGetStartedClick.current) {
            window.scrollTo({
                behavior: "smooth",
                top: props.gotoOnGetStartedClick.current.offsetTop
            });
        }
    }
    return (
        <div className="w-full h-screen object-cover bg-fixed bg-gray-500 bg-blend-multiply" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="w-full h-80 flex flex-col justify-center items-center ">
                <p className="lg:text-8xl md:text-6xl text-3xl font-extrabold text-white uppercase">No <span className="text-blue-400">Pain</span> No <span className="text-blue-400">Gain</span></p>
                <p className="lg:text-4xl md:text-3xl text-xl font-extrabold text-white text-center">Join Today and Become <span className="text-blue-400">The Alpha</span></p>

                <button className="p-5 my-3 mx-auto bg-blue-600 text-white uppercase font-bold transform -skew-x-12 lg:text-2xl text-xl" onClick={handleOnGetStartedClick}>Get Started
                </button>

            </div>
        </div>
    );
};

export default Hero;