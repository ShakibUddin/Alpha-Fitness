import React from 'react';

const HIItCard = (props) => {
    const { title, features, image } = props.data;
    return (
        <div style={{ minWidth: "300px" }} className="m-6 flex justify-start shadow-2xl flex-col rounded-lg overflow-hidden w-2/6">
            <img className="w-full h-3/5 object-cover" src={image} alt="" />
            <p className="font-extrabold text-center text-3xl p-3 text-black">{title}</p>
            <p className=" text-xl p-3 text-black">{features}</p>
            <button className="w-2/5 mx-auto my-3 font-bold text-xl p-3  text-center bg-blue-500 border- text-white uppercase">Enroll</button>
        </div>
    );
};

export default HIItCard;