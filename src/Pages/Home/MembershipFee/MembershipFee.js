import React from 'react';
import Loader from "react-loader-spinner";
import useData from "../../../Hooks/useData";
import FeeCard from './FeeCard/FeeCard';

const MembershipFee = () => {
    const { memberships } = useData();

    if (memberships.length === 0) return (<div className='w-full flex justify-center items-center h-96'>

        <Loader
            type="Bars"
            color="#3386FF"
            height={100}
            width={100}
            timeout={4000}
        />

    </div>);
    return (
        <div className="w-full flex flex-col my-20 items-center">
            <p className="font-bold text-4xl uppercase p-3 text-blue-500 mb-24">GYM ACCESS</p>
            <div className="w-full mx-auto flex flex-wrap justify-center">
                {
                    memberships.map((item, index) => <FeeCard key={item._id} data={item} index={index}></FeeCard>)
                }
            </div>
        </div>
    );
};

export default MembershipFee;