import React from 'react';
import useData from '../../Hooks/useData';
import successbg from '../../images/success.jpg';
import SuccessCard from '../SuccessCard/SuccessCard';

const Success = () => {
    const { successes } = useData();

    return (
        <div className="w-full mx-auto flex flex-col items-center">
            <div className="relative">
                <div className="bg-gray-600">
                    <div className="mix-blend-multiply">
                        <img className="w-screen h-screen object-cover" src={successbg} alt="" />
                    </div>
                </div>
                <div>
                    <p className="font-bold lg:text-8xl md:text-6xl text-4xl py-3 text-cente text-blue-300 absolute top-1/4 left-10 uppercase">More than just a <br /> 'before and after'</p>
                </div>
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