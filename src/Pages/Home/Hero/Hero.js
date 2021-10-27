import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from "../../../Hooks/useFirebase";
import mainbg from "../../../images/mainbg.jpg";

const Hero = () => {
    const { user } = useFirebase();
    const path = !user.email && "/signin";
    const history = useHistory();
    function goTo() {
        history.push("/trainigs");
    }
    return (
        <div className="w-full h-screen object-cover bg-fixed bg-blue-600 bg-blend-multiply relative" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundPosition: "center" }}>
            <div className="w-full h-5/6 flex flex-col justify-center items-center">
                <p className="lg:text-8xl md:text-6xl text-3xl font-extrabold text-white uppercase">No <span className="text-yellow-400">Pain</span> No <span className="text-yellow-400">Gain</span></p>
                <p className="lg:text-4xl md:text-3xl text-xl font-extrabold text-white">Join Today and Become <span className="text-yellow-400">The Alpha</span></p>
                <Link to={path}>
                    <button className="p-5 my-3 mx-auto bg-yellow-600 text-white uppercase font-bold transform -skew-x-12 border-4 border-yellow-600 lg:text-2xl text-xl" onClick={goTo}>Get Started
                    </button>
                </Link>
                <p className="text-white text-3xl font-bold absolute bottom-1/4"><FontAwesomeIcon className="mr-2" icon={faArrowDown} /></p>
            </div>
        </div>
    );
};

export default Hero;