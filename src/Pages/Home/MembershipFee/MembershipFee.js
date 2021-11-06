import React from 'react';
import useData from "../../../Hooks/useData";
import FeeCard from './FeeCard/FeeCard';

const MembershipFee = () => {
    const { memberships } = useData();
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