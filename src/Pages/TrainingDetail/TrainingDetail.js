import React, { useEffect, useState } from 'react';
import Loading from 'react-loading-animation';
import { useParams } from 'react-router';
import useData from '../../Hooks/useData';
import Included from './Included/Included';
const TrainingDetail = () => {
    const { trainingId } = useParams();
    const { trainings } = useData();
    const [training, setTraining] = useState({});
    useEffect(() => {
        setTraining(trainings.find(item => parseInt(trainingId) === parseInt(item._id)));
    }, [trainings, trainingId]);

    return (
        training ?
            <div className="w-full flex flex-col mx-auto">
                <div className="w-full h-64 object-cover bg-fixed bg-blue-800 bg-blend-multiply " style={{ backgroundImage: `url(${training.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <p className="font-bold lg:text-6xl md:text-4xl text-3xl py-3 text-cente text-yellow-400 absolute top-5 left-8">{training.name}</p>
                    <p className="font-bold text-2xl py-3 text-center text-white absolute top-20 left-8">{training.duration}</p>
                    <p className="font-bold text-xl py-3 text-white absolute top-40 left-8">{training.description}</p>
                </div>
                <div className="m-8">
                    <p className="font-bold text-4xl uppercase p-3 text-black">Who's it for</p>
                    <p className="text-xl py-3 text-black p-3">{training.for}</p>
                    <p className="font-bold text-4xl uppercase p-3 text-black">WHAT'S INCLUDED?</p>
                    {
                        training["included"]?.map(item => <Included key={item.title} data={item}></Included>)
                    }

                </div>
                <p className="font-extrabold text-5xl p-3  text-center text-yellow-600">${training.price}</p>
                <button className="w-3/5 mx-auto my-3 font-extrabold text-4xl p-5  text-center bg-yellow-400 border- text-black uppercase">Join</button>
            </div>
            :
            <Loading></Loading>

    );
};

export default TrainingDetail;