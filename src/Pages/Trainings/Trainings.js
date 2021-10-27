import React from 'react';
import Loading from 'react-loading-animation';
import useData from '../../Hooks/useData';
import TrainingCard from './TrainingCard/TrainingCard';

const Trainings = () => {
    const { trainings } = useData();
    return (
        <div className="w-full flex flex-col items-center">
            <p className="font-bold text-4xl uppercase p-3 mt-16 mb-2 text-black">Tainings</p>
            {
                trainings ?
                    <div className="w-full mx-auto flex flex-wrap justify-center">
                        {
                            trainings.map(item => <TrainingCard key={item._id} data={item}></TrainingCard>)
                        }
                    </div>
                    :
                    <Loading></Loading>
            }
        </div>
    );
};

export default Trainings;