import React from 'react';
import useData from "../../../Hooks/useData";
import FeeCard from './FeeCard/FeeCard';

const MembershipFee = () => {
    const { membershipFees } = useData();
    return (
        <div className="w-full flex flex-col items-center membership-margin-top">
            <p className="font-bold text-4xl uppercase p-3 mt-8 mb-2 text-black">GYM ACCESS</p>
            <div className="w-full mx-auto flex flex-wrap justify-center">
                {
                    membershipFees.map(item => <FeeCard key={item.id} data={item}></FeeCard>)
                }
            </div>
        </div>
    );
};

export default MembershipFee;