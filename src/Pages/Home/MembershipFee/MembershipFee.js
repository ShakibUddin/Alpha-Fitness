import React from 'react';
import useData from "../../../Hooks/useData";
import FeeCard from './FeeCard/FeeCard';
const MembershipFee = () => {
    const { membershipFees } = useData();
    return (
        <div className="w-full">
            <div className="w-full mx-auto flex flex-wrap justify-center">
                {
                    membershipFees.map(item => <FeeCard key={item.id} data={item}></FeeCard>)
                }
            </div>
        </div>
    );
};

export default MembershipFee;