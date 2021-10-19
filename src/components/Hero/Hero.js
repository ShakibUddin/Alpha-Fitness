import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import one from "../../images/1.jpg";
import two from "../../images/2.jpg";
import three from "../../images/3.jpg";

const Hero = () => {
    return (
        <div className="lg:w-3/5 md:w-4/5 h-10/12">
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div className="w-full h-1/3">
                    <img className="w-full" src={one} alt="1" border="0" />
                    <p className="legend"><span className="lg:text-3xl font-bold">¨Look in the mirror. That’s your competition.¨ – John Assaraf</span></p>
                </div>
                <div className="w-full  h-1/3">
                    <img className="w-full" src={two} alt="2" border="0" />
                    <p className="legend"><span className="lg:text-3xl font-bold">¨A feeble body weakens the mind.¨ – Jean-Jacques Rousseau</span></p>
                </div>
                <div className="w-full  h-1/3">
                    <img className="w-full" src={three} alt="3" border="0" />
                    <p className="legend"><span className="lg:text-3xl font-bold">“Nothing will work unless you do.” —Maya Angelou</span></p>
                </div>
            </Carousel>
        </div>

    );
};

export default Hero;