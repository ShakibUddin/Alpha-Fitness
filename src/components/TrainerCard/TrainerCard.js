import React from 'react';

const TrainerCard = (props) => {
    //destructuring trainer data
    let { name, occupation, description, image } = props.trainer;
    console.log(props.course)
    return (
        <div style={{ minWidth: "300px" }} className="w-3/12 m-6 flex flex-col justify-start text-center shadow-2xl rounded-lg overflow-hidden">
            <img className="w-full" src={image} alt="" />
            <div className="p-3">
                <p className="font-bold text-3xl py-3 text-black">{name}</p>
                <p className="font-bold text-2xl py-3 text-gray-400">{occupation}</p>
                <p className="text-xl py-3 text-black">{description}</p>
            </div>
        </div>
    );
};

export default TrainerCard;