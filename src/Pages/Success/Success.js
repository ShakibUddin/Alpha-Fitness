import React from 'react';
import Loader from "react-loader-spinner";
import useData from '../../Hooks/useData';
import successbg from '../../images/success.jpg';
import SuccessCard from './SuccessCard/SuccessCard';

const Success = () => {
    const { successes } = useData();

    if (successes.length === 0) return (<div className='w-full flex justify-center items-center h-96'>

        <Loader
            type="Bars"
            color="#3386FF"
            height={100}
            width={100}
            timeout={4000}
        />

    </div>);
    return (
        <div className="w-full mx-auto flex flex-col items-center  ">
            <div className="w-full h-96 object-cover bg-fixed bg-gray-500 bg-blend-multiply " style={{ backgroundImage: `url(${successbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <p className="font-bold text-3xl lg:text-7xl md:text-5xl text-center  py-3 text-blue-400 uppercase">More than just a 'before and after'</p>
            </div>

            <p className="font-bold lg:text-5xl md:text-4xl text-3xl py-3 text-cente text-black my-10">Consistency leaves clues</p>
            <p className="text-center mb-20 lg:w-5/12 w-full p-2 text-black">Thousands of clients of all ages, backgrounds and abilities have put their health in our hands over the years and achieved truly remarkable results. Here are just some of them…</p>
            <div className="flex flex-wrap justify-center">
                {
                    successes.map((item) => <SuccessCard key={item._id} data={item}></SuccessCard>)
                }
            </div>
        </div>
    );
};

export default Success;