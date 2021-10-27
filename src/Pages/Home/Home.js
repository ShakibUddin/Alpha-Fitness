import React from 'react';
import Hero from './Hero/Hero';
import MembershipFee from './MembershipFee/MembershipFee';
import Stories from './Stories/Stories';
import Trainings from './Trainings/Trainings';

const Home = () => {

    const traininsRef = React.createRef();

    return (
        <div className="w-full flex flex-col items-center">
            <Hero destinationRef={traininsRef}></Hero>
            <div ref={traininsRef}>
                <Trainings ></Trainings>
            </div>
            <MembershipFee></MembershipFee>

            <p className="font-bold text-4xl uppercase p-3 mt-16 mb-2 text-black">Recent Stories</p>
            <Stories></Stories>
        </div >
    );
};

export default Home;