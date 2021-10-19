import React from 'react';
import useData from "../../Hooks/useData";
import hiitZone from '../../images/hitzone.jpg';
import HIItCard from './HIItCard/HIItCard';

const HIITClass = () => {
    const { HIITClasses } = useData();
    return (
        <div className="w-full flex flex-col justify-center">
            <img className="w-3/5 mx-auto my-20" src={hiitZone} alt="" />
            <div className="flex flex-wrap justify-evenly">
                {
                    HIITClasses.map(item => <HIItCard key={item.id} data={item}></HIItCard>)
                }
            </div>
        </div>
    );
};

export default HIITClass;