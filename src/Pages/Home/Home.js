import React from 'react';
import { Link } from 'react-router-dom';
import instructor from '../../images/instructor.png';
import Contact from '../Contact/Contact';
import Hero from './Hero/Hero';
import MembershipFee from './MembershipFee/MembershipFee';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import Stories from './Stories/Stories';

const Home = () => {
    const membershipRef = React.createRef();

    return (
        <div className="w-full flex flex-col items-center">
            <Hero gotoOnGetStartedClick={membershipRef}></Hero>
            <div className="w-full mt-24">
                <p className="lg:text-3xl md:text-2xl text-xl font-bold text-black text-center pb-4">Why <span className="border-blue-600 border-b-4">Choose</span> Us?</p>
                <Services></Services>
            </div>
            <div className="w-full my-24">
                <Slider></Slider>
            </div>
            {/* consultation section */}
            <div className="w-full flex flex-wrap my-24 justify-center items-center bg-blue-500">
                <div style={{ minWidth: "300px" }} className="lg:inline-block md:inline-block hidden lg:w-1/3 md:w-2/4">
                    <img className="w-full lg:-mt-36" src={instructor} alt="" />
                </div>
                <div style={{ minWidth: "300px" }} className="flex flex-col items-start justify-center lg:w-2/4 md:w-2/4 sm:w-full p-12">
                    <p className="text-3xl text-white font-bold mb-4 text-center lg:text-left md:text-left">Need Professional Help?</p>
                    <p className="text-xl text-white mb-4 text-justify">We have trained professionals who will help you. They are here to show you the alpha way. Reach out to them today.</p>
                    <Link className="lg:w-2/4 md:w-2/4 sm:w-3/4 mr-auto m-2  mt-4" to='/consultation'>
                        <button className=" text-center bg-white border-white border-2 rounded-md py-3 px-8 font-medium text-blue-600">Book Session</button>
                    </Link>
                </div>
            </div>
            <div className="w-full" ref={membershipRef}>
                <MembershipFee></MembershipFee>
            </div>
            <Stories></Stories>
            <Contact></Contact>
        </div >
    );
};

export default Home;