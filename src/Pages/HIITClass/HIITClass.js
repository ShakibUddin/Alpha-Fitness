import React from 'react';
import useData from "../../Hooks/useData";
import hiitbg from '../../images/hiitbg.jpg';
import HIItCard from './HIItCard/HIItCard';

const HIITClass = () => {
    const { HIITClasses } = useData();
    return (
        <div className="w-full flex flex-col justify-center">
            <div className="w-full h-screen object-cover bg-fixed bg-blue-600 bg-blend-multiply relative" style={{ backgroundImage: `url(${hiitbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <p className="font-bold text-3xl text-center lg:text-7xl py-3 text-yellow-400 absolute top-40 uppercase">The benefits of HIIT include burning calories, losing weight, and building muscle.</p>
            </div>
            <div className="flex flex-wrap justify-evenly">
                {
                    HIITClasses.map(item => <HIItCard key={item.id} data={item}></HIItCard>)
                }
            </div>
        </div>
    );
};

export default HIITClass;