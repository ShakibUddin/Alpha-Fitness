import React from 'react';
import { Link } from 'react-router-dom';

const FeeCard = (props) => {
    const { _id, name, features, price } = props.data;
    const index = props.index;

    return (
        <div style={{ minWidth: "300px", boxShadow: "#B2CAFF 0px 4px 12px" }} className={`w-1/4 flex flex-col justify-between bg-white duration-700 lg:${index % 2 !== 0 && "-mt-8"} my-6 mx-2`} >
            <p className="font-extrabold text-3xl p-3  text-center text-black">{name}</p>
            <ul className="w-dull p-4 m-3 list-disc">
                {
                    features.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
            <div className="flex flex-col items-center">
                <p className="font-extrabold text-3xl p-3  text-center text-blue-600">${price}/Month</p>
                <Link className="w-full text-center" to={`/payment/membership/${_id}`}><button className="w-3/5 mx-auto my-3 font-bold text-xl p-3  text-center bg-blue-400  text-white uppercase -mb-6 rounded-3xl">Join Now</button></Link>
            </div>
        </div >
    );
};

export default FeeCard;