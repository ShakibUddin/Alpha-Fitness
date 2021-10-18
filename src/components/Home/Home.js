import React from 'react';
import Loading from 'react-loading-animation';
import useTrainingJson from '../../Hooks/useTrainingJson';
import Hero from '../Hero/Hero';
import ProgrammeCard from '../ProgrammeCard/ProgrammeCard';


const Home = () => {
    const [trainings] = useTrainingJson();
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
        </div >
    );
};

export default Home;