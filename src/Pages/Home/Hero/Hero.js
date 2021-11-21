import React from 'react';
import mainbg from '../../../images/mainbg.jpg';

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
        <div className="w-full h-screen object-cover bg-fixed bg-gray-500 bg-blend-multiply lg:p-16 md:p-8 p-4" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "top" }}>
            <div className="w-full  h-full flex flex-col justify-center items-center">
                <p className="lg:text-6xl md:text-5xl text-3xl font-extrabold text-blue-500 uppercase my-8">No Pain No Gain</p>
                <p className="lg:text-xl md:text-lg text-base text-white text-center">Get in touch with experts. Let us guide you to your destination. Join Today and Become The Alpha</p>

                <button className="px-4 py-2 my-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xl rounded-md shadow-md" onClick={handleOnGetStartedClick}>Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;