import React from 'react';
import useData from '../../Hooks/useData';
import successbg from '../../images/success.jpg';
import SuccessCard from './SuccessCard/SuccessCard';

const Success = () => {
    const { successes } = useData();

    return (
        <div className="w-full mx-auto flex flex-col items-center ">
            <div className="w-full h-screen object-cover bg-fixed bg-blue-600 bg-blend-multiply relative" style={{ backgroundImage: `url(${successbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <p className="font-bold text-3xl text-center lg:text-7xl py-3 text-yellow-400 absolute top-40 uppercase">More than just a 'before and after'</p>
            </div>

            <p className="font-bold lg:text-5xl md:text-4xl text-3xl py-3 text-cente text-black my-10">Consistency leaves clues</p>
            <p className="text-center mb-20 w-5/12">Thousands of clients of all ages, backgrounds and abilities have put their health in our hands over the years and achieved truly remarkable results. Here are just some of them…</p>
            <div className="flex flex-wrap justify-center">
                {
                    successes.map((item) => <SuccessCard key={item.id} data={item}></SuccessCard>)
                }
            </div>
        </div>
    );
};

export default Success;