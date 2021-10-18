import React, { useEffect, useState } from 'react';
import Loading from 'react-loading-animation';
import { useParams } from 'react-router';
import useData from '../../Hooks/useData';
import Included from '../Included/Included';
const TrainingDetail = () => {
    const { trainingId } = useParams();
    const { trainings } = useData();
    const [training, setTraining] = useState({});
    useEffect(() => {
        setTraining(trainings.find(item => parseInt(trainingId) === parseInt(item.id)));
    }, [trainings, trainingId]);

    return (
        training ?
            <div className="w-full flex flex-col mx-auto">
                <div className="relative">
                    <div className="bg-gray-600">
                        <div className="mix-blend-multiply">
                            <img className="w-screen h-screen object-cover" src={training.image} alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="font-bold lg:text-6xl md:text-4xl text-3xl py-3 text-cente text-blue-300 absolute top-5 left-8">{training.name}</p>
                        <p className="font-bold text-2xl py-3 text-center text-white text-white absolute top-20 left-8">{training.duration}</p>
                        <p className="font-bold text-xl py-3 text-white text-white absolute top-40 left-8">{training.description}</p>
                    </div>
                </div>
                <div className="m-8">
                    <p className="font-bold text-4xl uppercase p-3 text-black">Who's it for</p>
                    <p className="text-xl py-3 text-black p-3">{training.for}</p>
                    <p className="font-bold text-4xl uppercase p-3 text-black">WHAT'S INCLUDED?</p>
                    {
                        training["included"]?.map(item => <Included key={item.title} data={item}></Included>)
                    }
                </div>
            </div>
            :
            <Loading></Loading>

    );
};

export default TrainingDetail;