import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import mainbg from "../../../images/mainbg.jpg";

const Hero = () => {
    return (
        <div className="w-full h-screen object-cover bg-fixed bg-blue-600 bg-blend-multiply" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="w-full h-5/6 flex flex-col justify-center items-center">
                <p className="lg:text-8xl md:text-6xl sm:text-3xl font-extrabold text-white uppercase">No <span className="text-yellow-400">Pain</span> No <span className="text-yellow-400">Gain</span></p>
                <p className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-white">Join Today and Become <span className="text-yellow-400">The Alpha</span></p>
                <button className="p-5 my-3 mx-auto bg-yellow-600 text-white uppercase font-bold transform -skew-x-12 border-4 border-yellow-600 text-2xl">Get Started</button>
            </div>
        </div>
        // <div className="lg:w-3/5 md:w-4/5 h-10/12">

        //     <Carousel autoPlay={true} infiniteLoop={true}>
        //         <div className="w-full h-1/3">
        //             <img className="w-full" src={one} alt="1" border="0" />
        //             <p className="legend"><span className="lg:text-3xl font-bold">¨Look in the mirror. That’s your competition.¨ – John Assaraf</span></p>
        //         </div>
        //         <div className="w-full  h-1/3">
        //             <img className="w-full" src={two} alt="2" border="0" />
        //             <p className="legend"><span className="lg:text-3xl font-bold">¨A feeble body weakens the mind.¨ – Jean-Jacques Rousseau</span></p>
        //         </div>
        //         <div className="w-full  h-1/3">
        //             <img className="w-full" src={three} alt="3" border="0" />
        //             <p className="legend"><span className="lg:text-3xl font-bold">“Nothing will work unless you do.” —Maya Angelou</span></p>
        //         </div>
        //     </Carousel>
        // </div>

    );
};

export default Hero;