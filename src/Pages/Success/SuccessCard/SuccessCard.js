import React from 'react';

const SuccessCard = (props) => {
    let { weeks, age, image } = props.data;
    return (
        <div style={{ minWidth: "300px" }} className="w-2/5 m-6 flex flex-col justify-start shadow-2xl rounded-lg">
            <p className="font-extrabold text-black p-3">{weeks} weeks</p>
            <p className=" text-black p-3">{age} years old</p>
            <br />
            <img className="w-full" src={image} alt="" />
        </div>
    );
};

export default SuccessCard;