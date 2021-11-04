import React, { useEffect, useState } from 'react';
import Loading from 'react-loading-animation';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import Included from './Included/Included';
const TrainingDetail = () => {
    const { trainingId } = useParams();
    const { trainings } = useData();
    const [training, setTraining] = useState({});
    useEffect(() => {
        setTraining(trainings.find(item => trainingId.toString() === item._id.toString()));
    }, [trainings, trainingId]);

    return (
        training ?
            <div className="w-full mx-auto flex flex-col items-center ">
                <div className="w-full h-96 object-cover bg-fixed bg-blue-800 bg-blend-multiply " style={{ backgroundImage: `url(${training.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <p className="font-bold lg:text-6xl md:text-4xl text-3xl p-3 text-start text-blue-400">{training.name}</p>
                    <p className="font-bold text-2xl p-3 text-start text-white ">{training.duration}</p>
                    <p className="font-bold text-xl p-3 text-white">{training.description}</p>
                </div>
                <div className="m-8">
                    <p className="font-bold text-4xl uppercase p-3 text-black">Who's it for</p>
                    <p className="text-xl py-3 text-black p-3">{training.for}</p>
                    <p className="font-bold text-4xl uppercase p-3 text-black">WHAT'S INCLUDED?</p>
                    {
                        training["included"]?.map(item => <Included key={item.title} data={item}></Included>)
                    }

                </div>
                <p className="font-extrabold text-5xl p-3  text-center text-blue-600">${training.price}</p>
                <Link className="text-center w-3/5" to={`/checkout/${trainingId}`}>
                    <button className="w-full mx-auto my-3 font-extrabold text-4xl p-5 bg-blue-400 border- text-black uppercase">Join</button>
                </Link>

            </div>
            :
            <Loading></Loading>

    );
};

export default TrainingDetail;