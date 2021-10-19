import React from 'react';
import Loading from 'react-loading-animation';
import useData from '../../Hooks/useData';
import Hero from '../Hero/Hero';
import MembershipFee from '../MembershipFee/MembershipFee';
import ProgrammeCard from '../ProgrammeCard/ProgrammeCard';
import Stories from '../Stories/Stories';


const Home = () => {
    const { trainings } = useData();
    return (
        <div className="w-full flex flex-col items-center">
            <Hero></Hero>
            <p className="text-4xl font-bold text-center">Tainings</p>
            {
                trainings ?
                    <div className="w-full mx-auto flex flex-wrap justify-center">
                        {
                            trainings.map(item => <ProgrammeCard key={item.id} data={item}></ProgrammeCard>)
                        }
                    </div>
                    :
                    <Loading></Loading>
            }

            <p className="font-bold text-4xl uppercase p-3 mt-16 mb-2 text-black">GYM ACCESS</p>
            <MembershipFee></MembershipFee>


            <p className="font-bold text-4xl uppercase p-3 mt-16 mb-2 text-black">Recent Stories</p>
            <Stories></Stories>
        </div >
    );
};

export default Home;