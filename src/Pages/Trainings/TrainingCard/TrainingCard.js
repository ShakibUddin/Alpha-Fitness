import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const TrainingCard = (props) => {
    //destructuring course data
    const { _id, name, duration, description, image } = props.data;
    const route = `/detail/${_id}`;
    return (
        <div style={{ minWidth: "300px" }} className="lg:w-2/5 md:w-3/5 sm:w-4/5 m-6 flex flex-col justify-between shadow-md  overflow-hidden relative bg-white">
            <div className="w-full  flex justify-center items-center bg-blend-multiply bg-gray-500" style={{ height: "500px", backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <p className="uppercase font-bold text-3xl py-3 z-10  text-center text-white">{name} <br /><br /> {duration}</p>
            </div>

            <div className="w-full p-3 h-2/4 flex flex-col justify-between">
                <p className="text-xl p-2 text-justify">{description}</p>
                <Link className="text-center" to={route}><button className="w-3/5 bg-white border-2 border-blue-500 p-3 m-3 text-blue-500">Learn More <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            </div>
        </div>
    );
};

export default TrainingCard;