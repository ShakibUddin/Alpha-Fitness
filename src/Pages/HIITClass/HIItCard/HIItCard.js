import React from 'react';

const HIItCard = (props) => {
    const { title, features, image } = props.data;
    return (
        <div style={{ minWidth: "300px" }} className="m-6 flex justify-start shadow-2xl flex-col rounded-lg overflow-hidden w-2/6">
            <img className="w-full h-3/5 object-cover" src={image} alt="" />
            <p className="font-extrabold text-center text-3xl p-3 text-black">{title}</p>
            <p className=" text-xl p-3 text-black">{features}</p>
        </div>
    );
};

export default HIItCard;