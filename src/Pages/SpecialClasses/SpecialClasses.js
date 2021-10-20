import React from 'react';
import useData from '../../Hooks/useData';
import specialbg from '../../images/specialbg.jpg';
import SpecialClassCard from './SpecialClassCard/SpecialClassCard';

const SpecialClasses = () => {
    const { specialClasses } = useData();
    return (
        <div className="w-full flex flex-col justify-center">
            <div className="w-full h-screen object-cover bg-fixed bg-blue-600 bg-blend-multiply relative" style={{ backgroundImage: `url(${specialbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <p className="font-bold text-3xl text-center lg:text-7xl py-3 text-yellow-400 absolute top-40 uppercase">Join our special class and persue excellence</p>
            </div>
            <div className="flex flex-wrap justify-evenly">
                {
                    specialClasses.map((item, index) => <SpecialClassCard key={item.id} data={item} index={index}></SpecialClassCard>)
                }
            </div>
        </div>
    );
};

export default SpecialClasses;