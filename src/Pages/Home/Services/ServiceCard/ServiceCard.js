import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceCard = (props) => {
    const { icon, title, details } = props.data;
    return (
        <div className="w-1/5 m-6 flex flex-col justify-start items-center bg-transparent lg:m-2 my-2 p-3 shadow-blue-500" style={{ minWidth: "300px", minHeight: "200px" }}>
            <FontAwesomeIcon className="text-center text-5xl text-blue-500" icon={icon} />
            <p className="font-bold text-base text-black py-3 text-center uppercase">{title}</p>
            <p className="font-bold text-sm text-gray-500  text-center">{details}</p>
        </div>
    );
};

export default ServiceCard;