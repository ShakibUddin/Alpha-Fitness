import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Hero = () => {
    return (
        <div className="lg:w-3/5 md:w-4/5 h-10/12">
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img className="w-full" src="https://i.ibb.co/12ZkjDB/3.jpg" alt="1" border="0" />
                    <p className="legend"><span className="lg:text-3xl font-bold">¨Look in the mirror. That’s your competition.¨ – John Assaraf</span></p>
                </div>
                <div>
                    <img className="w-full" src="https://i.ibb.co/Lv60Ywv/1.jpg" alt="2" border="0" />
                    <p className="legend"><span className="lg:text-3xl font-bold">¨A feeble body weakens the mind.¨ – Jean-Jacques Rousseau</span></p>
                </div>
                <div>
                    <img className="w-full" src="https://i.ibb.co/XCKCHng/2.jpg" alt="3" border="0" />
                    <p className="legend"><span className="lg:text-3xl font-bold">“Nothing will work unless you do.” —Maya Angelou</span></p>
                </div>
            </Carousel>
        </div>

    );
};

export default Hero;