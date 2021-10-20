import React from 'react';
import Loading from 'react-loading-animation';
import useData from '../../Hooks/useData';
import Hero from './Hero/Hero';
import MembershipFee from './MembershipFee/MembershipFee';
import Stories from './Stories/Stories';
import TrainingCard from './TrainingCard/TrainingCard';


const Home = () => {
    const { trainings } = useData();
    const traininsRef = React.createRef();

    return (
        <div className="w-full flex flex-col items-center">
            <Hero destinationRef={traininsRef}></Hero>
            <p className="font-bold text-4xl uppercase p-3 mt-16 mb-2 text-black">Tainings</p>
            {
                trainings ?
                    <div ref={traininsRef} className="w-full mx-auto flex flex-wrap justify-center bg-white">
                        {
                            trainings.map(item => <TrainingCard key={item.id} data={item}></TrainingCard>)
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