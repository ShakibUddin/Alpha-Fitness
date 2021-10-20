import React from 'react';

const HIItCard = (props) => {
    const { title, features, image } = props.data;
    return (
        <div style={{ minWidth: "300px" }} className="m-6 flex justify-start shadow-2xl flex-col rounded-lg overflow-hidden w-2/6">
            <img className="w-full h-3/5 object-cover" src={image} alt="" />
            <p class="text-sm text-gray-600 flex items-center p-3 text-center">
                <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
            </p>
            <p className="font-extrabold text-center text-3xl p-3 text-black">{title}</p>
            <p className=" text-xl p-3 text-black">{features}</p>
            <button className="w-2/5 mx-auto my-3 font-bold text-xl p-3  text-center bg-blue-500 border- text-white uppercase">Enroll</button>
        </div>
    );
};

export default HIItCard;