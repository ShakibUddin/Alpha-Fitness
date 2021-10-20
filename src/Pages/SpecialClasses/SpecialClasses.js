import React from 'react';
import useData from '../../Hooks/useData';
import SpecialClassCard from './SpecialClassCard/SpecialClassCard';

const SpecialClasses = () => {
    const { specialClasses } = useData();
    return (
        <div className="w-full flex flex-col justify-center">
            <p className="font-extrabold lg:text-5xl text-3xl text-center p-3 mt-16 mb-2 text-blue-500">Join our special class and persue excellence</p>
            <div className="flex flex-wrap justify-evenly">
                {
                    specialClasses.map((item, index) => <SpecialClassCard key={item.id} data={item} index={index}></SpecialClassCard>)
                }
            </div>
        </div>
    );
};

export default SpecialClasses;