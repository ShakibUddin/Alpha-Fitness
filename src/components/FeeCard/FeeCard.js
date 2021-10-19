import React from 'react';

const FeeCard = (props) => {
    const { title, features, price } = props.data;
    return (
        <div style={{ minWidth: "300px" }} className="w-2/5 m-6 flex flex-col justify-start shadow-2xl rounded-lg">
            <p className="font-extrabold text-4xl p-3  text-center text-black">{title}</p>
            <ul className="w-dull p-3 m-3 list-disc">
                {
                    features.map(item => <li>{item}</li>)
                }
            </ul>
            <p className="font-extrabold text-4xl p-3  text-center text-yellow-600">${price}/Month</p>
            <button className="w-3/5 mx-auto my-3 font-bold text-2xl p-3  text-center bg-yellow-400 border- text-black uppercase">Order Now</button>
        </div>
    );
};

export default FeeCard;