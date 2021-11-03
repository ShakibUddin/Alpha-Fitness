import React from 'react';
import Hero from './Hero/Hero';
import MembershipFee from './MembershipFee/MembershipFee';
import Services from './Services/Services';
import Stories from './Stories/Stories';

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Hero></Hero>
            <div className="w-full max-h-full -mt-24">
                <Services></Services>
            </div>
            <MembershipFee></MembershipFee>
            <p className="font-bold text-4xl uppercase p-3 mt-16 mb-2 text-black">Recent Stories</p>
            <Stories></Stories>
        </div >
    );
};

export default Home;