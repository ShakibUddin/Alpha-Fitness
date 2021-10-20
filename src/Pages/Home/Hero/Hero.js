import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from "../../../Hooks/useFirebase";
import mainbg from "../../../images/mainbg.jpg";
const Hero = (props) => {
    const { user } = useFirebase();
    const path = !user.email && "/signin";
    const scrollTo = () => {
        props.destinationRef.current.scrollIntoView();
    }
    return (
        <div className="w-full h-screen object-cover bg-fixed bg-blue-600 bg-blend-multiply" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="w-full h-5/6 flex flex-col justify-center items-center">
                <p className="lg:text-8xl md:text-6xl text-3xl font-extrabold text-white uppercase">No <span className="text-yellow-400">Pain</span> No <span className="text-yellow-400">Gain</span></p>
                <p className="lg:text-4xl md:text-3xl text-xl font-extrabold text-white">Join Today and Become <span className="text-yellow-400">The Alpha</span></p>
                <Link to={path}>
                    <button className="p-5 my-3 mx-auto bg-yellow-600 text-white uppercase font-bold transform -skew-x-12 border-4 border-yellow-600 lg:text-2xl text-xl" onClick={scrollTo}>Get Started</button></Link>
            </div>
        </div>
    );
};

export default Hero;