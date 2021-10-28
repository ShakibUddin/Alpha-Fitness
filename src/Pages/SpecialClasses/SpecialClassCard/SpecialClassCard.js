import React from 'react';

const SpecialClassCard = (props) => {
    const { title, description, image } = props.data;
    const index = props.index;
    return (
        <div style={{ minWidth: "300px" }} className={`m-6 flex lg:flex-row flex-col justify-start shadow-2xl  overflow-hidden w-8/12 bg-white lg:${index % 2 === 0 && "flex-row-reverse"}`}>
            <div className="lg:w-2/4 w-full h-full">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="lg:w-2/4 w-full flex flex-col items-center justify-between">
                <p class="text-sm text-gray-600 flex items-center p-3 text-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                </p>
                <p className="font-extrabold text-center text-3xl p-3 text-black">{title}</p>
                <p className=" text-xl p-3 text-black">{description}</p>
                <button className="w-2/5 mx-auto my-3 font-bold text-xl p-3  text-center bg-blue-500 border- text-white uppercase">Enroll</button>
            </div>
        </div>
    );
};

export default SpecialClassCard;