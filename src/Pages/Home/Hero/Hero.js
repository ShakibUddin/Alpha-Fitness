import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import mainbg from "../../../images/mainbg.jpg";
import Services from '../Services/Services';

const Hero = () => {
    return (
        <div className="w-full h-screen object-cover bg-fixed bg-blue-600 bg-blend-multiply relative" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="w-full h-5/6 flex flex-col justify-center items-center">
                <p className="lg:text-8xl md:text-6xl text-3xl font-extrabold text-white uppercase">No <span className="text-yellow-400">Pain</span> No <span className="text-yellow-400">Gain</span></p>
                <p className="lg:text-4xl md:text-3xl text-xl font-extrabold text-white">Join Today and Become <span className="text-yellow-400">The Alpha</span></p>
                <Link to="/trainings">
                    <button className="p-5 my-3 mx-auto bg-yellow-600 text-white uppercase font-bold transform -skew-x-12 border-4 border-yellow-600 lg:text-2xl text-xl">Get Started
                    </button>
                </Link>
                <p className="text-white text-3xl font-bold absolute bottom-1/4"><FontAwesomeIcon className="mr-2" icon={faArrowDown} /></p>
            </div>
            <Services></Services>
        </div>
    );
};

export default Hero;