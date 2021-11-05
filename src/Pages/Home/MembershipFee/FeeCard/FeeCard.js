import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const FeeCard = (props) => {
    const { title, features, price } = props.data;
    const index = props.index;
    const { user } = useAuth();

    return (
        <div style={{ minWidth: "300px", boxShadow: "#B2CAFF 0px 4px 12px" }} className={`w-1/4 flex flex-col justify-between bg-white duration-700 lg:${index % 2 !== 0 && "-mt-8"} my-6 mx-2`} >
            <p className="font-extrabold text-3xl p-3  text-center text-black">{title}</p>
            <ul className="w-dull p-4 m-3 list-disc">
                {
                    features.map((item) => <li key={item._id}>{item}</li>)
                }
            </ul>
            <div className="flex flex-col items-center">
                <p className="font-extrabold text-3xl p-3  text-center text-blue-600">${price}/Month</p>
                <Link className="w-full text-center" to={user.email ? "/payment" : "/signin"}><button className="w-3/5 mx-auto my-3 font-bold text-xl p-3  text-center bg-blue-400  text-white uppercase -mb-6 rounded-3xl">Join Now</button></Link>
            </div>
        </div >
    );
};

export default FeeCard;